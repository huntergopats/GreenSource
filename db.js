import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, "greensource.db"));

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    google_id TEXT UNIQUE,
    email TEXT UNIQUE,
    name TEXT,
    picture TEXT,
    stripe_customer_id TEXT,
    is_pro INTEGER DEFAULT 0,
    plan TEXT,
    calc_uses INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

export function upsertUser({ googleId, email, name, picture }) {
  const existing = db.prepare("SELECT * FROM users WHERE google_id = ?").get(googleId);
  if (existing) {
    db.prepare(`
      UPDATE users SET email = ?, name = ?, picture = ? WHERE google_id = ?
    `).run(email, name, picture, googleId);
    return db.prepare("SELECT * FROM users WHERE google_id = ?").get(googleId);
  } else {
    db.prepare(`
      INSERT INTO users (google_id, email, name, picture) VALUES (?, ?, ?, ?)
    `).run(googleId, email, name, picture);
    return db.prepare("SELECT * FROM users WHERE google_id = ?").get(googleId);
  }
}

export function getUserById(id) {
  return db.prepare("SELECT * FROM users WHERE id = ?").get(id) || null;
}

export function getUserByCustomer(stripeCustomerId) {
  return db.prepare("SELECT * FROM users WHERE stripe_customer_id = ?").get(stripeCustomerId) || null;
}

export function setStripeCustomer(userId, stripeCustomerId) {
  db.prepare("UPDATE users SET stripe_customer_id = ? WHERE id = ?").run(stripeCustomerId, userId);
}

export function setProStatus(userId, isPro, plan = null) {
  db.prepare("UPDATE users SET is_pro = ?, plan = ? WHERE id = ?").run(isPro ? 1 : 0, plan, userId);
}

export function incCalcUse(userId) {
  db.prepare("UPDATE users SET calc_uses = calc_uses + 1 WHERE id = ?").run(userId);
  const user = db.prepare("SELECT calc_uses FROM users WHERE id = ?").get(userId);
  return user.calc_uses;
}
