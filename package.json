import express from "express";
import cookieSession from "cookie-session";
import { OAuth2Client } from "google-auth-library";
import Stripe from "stripe";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  upsertUser, getUserById, getUserByCustomer,
  setStripeCustomer, setProStatus, incCalcUse,
} from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Config (all from environment) ──────────────────────────────
const PORT = process.env.PORT || 3000;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;          // safe, public
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;        // secret
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;// secret (added later)
const PRICE_MONTHLY = process.env.STRIPE_PRICE_MONTHLY;         // price_...
const PRICE_YEARLY  = process.env.STRIPE_PRICE_YEARLY;          // price_...
const SESSION_SECRET = process.env.SESSION_SECRET || "dev-only-change-me";
const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;

// Free-tier limits
const FREE_BEAN_LIMIT = 100;
const FREE_CALC_USES = 2;

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// ── Load listings once at startup ──────────────────────────────
let LISTINGS = [];
try {
  const raw = fs.readFileSync(path.join(__dirname, "coffee_data.json"), "utf8");
  LISTINGS = JSON.parse(raw).coffees || [];
  console.log(`Loaded ${LISTINGS.length} listings`);
} catch (e) {
  console.error("Could not load coffee_data.json:", e.message);
}

const app = express();

// Stripe webhook needs the RAW body, so register it BEFORE express.json()
app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), (req, res) => {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) return res.status(200).end();
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers["stripe-signature"], STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  const type = event.type;
  const obj = event.data.object;
  try {
    if (type === "checkout.session.completed") {
      const customerId = obj.customer;
      const user = getUserByCustomer(customerId);
      if (user) {
        const plan = obj.metadata?.plan || null;
        setProStatus(user.id, true, plan);
      }
    } else if (type === "customer.subscription.deleted" || type === "customer.subscription.updated") {
      const customerId = obj.customer;
      const user = getUserByCustomer(customerId);
      if (user) {
        const active = obj.status === "active" || obj.status === "trialing";
        setProStatus(user.id, active, active ? user.plan : null);
      }
    }
  } catch (e) { console.error("webhook handler:", e.message); }
  res.json({ received: true });
});

app.use(express.json());
app.use(cookieSession({
  name: "gs_session",
  secret: SESSION_SECRET,
  httpOnly: true,
  sameSite: "lax",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
}));

// ── Helpers ────────────────────────────────────────────────────
function currentUser(req) {
  if (!req.session?.uid) return null;
  return getUserById(req.session.uid) || null;
}
function publicUser(u) {
  if (!u) return null;
  return {
    email: u.email, name: u.name, picture: u.picture,
    isPro: !!u.is_pro, plan: u.plan,
    calcUsesLeft: u.is_pro ? null : Math.max(0, FREE_CALC_USES - u.calc_uses),
  };
}

// ── Auth: verify Google credential, create session ─────────────
app.post("/api/auth/google", async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) return res.status(400).json({ error: "missing credential" });
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: GOOGLE_CLIENT_ID });
    const p = ticket.getPayload();
    const user = upsertUser({ googleId: p.sub, email: p.email, name: p.name, picture: p.picture });
    req.session.uid = user.id;
    res.json({ user: publicUser(user) });
  } catch (e) {
    console.error("google auth:", e.message);
    res.status(401).json({ error: "invalid credential" });
  }
});

app.post("/api/auth/logout", (req, res) => { req.session = null; res.json({ ok: true }); });

app.get("/api/me", (req, res) => {
  res.json({ user: publicUser(currentUser(req)), config: { googleClientId: GOOGLE_CLIENT_ID } });
});

// ── Listings: free users capped at 100, Pro gets all ───────────
app.get("/api/listings", (req, res) => {
  const u = currentUser(req);
  const isPro = !!(u && u.is_pro);
  const data = isPro ? LISTINGS : LISTINGS.slice(0, FREE_BEAN_LIMIT);
  res.json({
    total: LISTINGS.length,
    returned: data.length,
    locked: isPro ? 0 : Math.max(0, LISTINGS.length - FREE_BEAN_LIMIT),
    isPro,
    coffees: data,
  });
});

// ── Calculator gate: free users limited to 2 uses ──────────────
app.post("/api/calc/use", (req, res) => {
  const u = currentUser(req);
  if (!u) return res.status(401).json({ error: "sign_in_required" });
  if (u.is_pro) return res.json({ allowed: true, usesLeft: null });
  if (u.calc_uses >= FREE_CALC_USES) return res.status(402).json({ error: "upgrade_required", usesLeft: 0 });
  const used = incCalcUse(u.id);
  res.json({ allowed: true, usesLeft: Math.max(0, FREE_CALC_USES - used) });
});

// ── Stripe checkout ────────────────────────────────────────────
app.post("/api/checkout", async (req, res) => {
  if (!stripe) return res.status(500).json({ error: "stripe_not_configured" });
  const u = currentUser(req);
  if (!u) return res.status(401).json({ error: "sign_in_required" });
  const plan = req.body.plan === "yearly" ? "yearly" : "monthly";
  const price = plan === "yearly" ? PRICE_YEARLY : PRICE_MONTHLY;
  try {
    let customerId = u.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: u.email, name: u.name, metadata: { google_id: u.google_id } });
      customerId = customer.id;
      setStripeCustomer(u.id, customerId);
    }
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price, quantity: 1 }],
      metadata: { plan },
      subscription_data: { metadata: { plan, google_id: u.google_id } },
      success_url: `${APP_URL}/?upgraded=1`,
      cancel_url: `${APP_URL}/?canceled=1`,
    });
    res.json({ url: session.url });
  } catch (e) {
    console.error("checkout:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ── Stripe billing portal (manage/cancel) ──────────────────────
app.get("/api/billing/portal", async (req, res) => {
  if (!stripe) return res.status(500).json({ error: "stripe_not_configured" });
  const u = currentUser(req);
  if (!u || !u.stripe_customer_id) return res.status(400).json({ error: "no_customer" });
  const portal = await stripe.billingPortal.sessions.create({
    customer: u.stripe_customer_id, return_url: APP_URL,
  });
  res.json({ url: portal.url });
});

// ── Serve the frontend ─────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`GreenSource running on ${APP_URL}`));
