<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GreenSource — Live Green Coffee Marketplace for Roasters</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{
  --green:#2D6A4F;--green-d:#1F4D39;--green-l:#40916C;--gold:#C9A84C;--gold-d:#A8862F;
  --bg:#F9F7F4;--surface:#fff;--text:#1A1A1A;--muted:#6B7280;--border:#E5E0D8;--radius:13px;
  --shadow:0 2px 14px rgba(45,106,79,.09);--shadow-lg:0 8px 30px rgba(45,106,79,.14);
  --africa:#D97706;--central:#0D9488;--south:#16A34A;--asia:#4F46E5;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;padding-bottom:0}

/* HEADER */
header{background:var(--green);color:#fff;padding:0 20px;height:60px;display:flex;align-items:center;gap:14px;position:sticky;top:0;z-index:400;box-shadow:0 2px 10px rgba(0,0,0,.15)}
.logo{font-size:1.28rem;font-weight:800;letter-spacing:-.5px;white-space:nowrap;flex-shrink:0;display:flex;align-items:center;gap:6px}
.logo .g{color:#95D5B2}.logo .s{color:#fff}
.search-wrap{flex:1;max-width:580px;position:relative;display:flex}
.search-wrap input{width:100%;padding:9px 38px 9px 40px;border-radius:24px;border:none;background:rgba(255,255,255,.15);color:#fff;font-size:.85rem;outline:none;transition:background .2s;font-family:inherit}
.search-wrap input::placeholder{color:rgba(255,255,255,.55)}
.search-wrap input:focus{background:rgba(255,255,255,.25)}
.si{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:.92rem;opacity:.6;pointer-events:none}
.search-spin{position:absolute;right:13px;top:50%;transform:translateY(-50%);width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#95D5B2;border-radius:50%;animation:spin .7s linear infinite;display:none}
.search-spin.on{display:block}
@keyframes spin{to{transform:translateY(-50%) rotate(360deg)}}
.hactions{display:flex;gap:8px;margin-left:auto;flex-shrink:0}
.hbtn{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;padding:6px 13px;border-radius:18px;cursor:pointer;font-size:.79rem;display:flex;align-items:center;gap:5px;transition:background .18s;font-family:inherit;white-space:nowrap;position:relative}
.hbtn:hover{background:rgba(255,255,255,.24)}
.hbadge{background:var(--gold);color:#1A1A1A;border-radius:9px;padding:1px 6px;font-size:.68rem;font-weight:700}
.search-toggle{display:none}

/* SYNC BAR */
.sync-bar{background:var(--green-d);color:#B7E4C7;font-size:.74rem;display:flex;align-items:center;justify-content:space-between;padding:6px 20px;gap:10px;flex-wrap:wrap}
.sync-left{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.sync-controls{display:flex;align-items:center;gap:8px}
.sync-bar select{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#B7E4C7;border-radius:8px;padding:3px 6px;font-size:.72rem;font-family:inherit;cursor:pointer;outline:none}
.sync-bar button{background:rgba(183,228,199,.18);border:1px solid rgba(183,228,199,.35);color:#D8F3DC;border-radius:12px;padding:3px 11px;cursor:pointer;font-size:.72rem;font-family:inherit;transition:background .2s}
.sync-bar button:hover{background:rgba(183,228,199,.32)}
.sync-bar button:disabled{opacity:.5;cursor:not-allowed}
.toggle-sw{position:relative;width:34px;height:18px;background:rgba(255,255,255,.2);border-radius:10px;cursor:pointer;transition:background .2s;flex-shrink:0}
.toggle-sw.on{background:var(--gold)}
.toggle-sw::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:left .2s}
.toggle-sw.on::after{left:18px}

/* NAV (desktop tabs) */
nav.tabs{background:var(--surface);border-bottom:1px solid var(--border);padding:0 20px;display:flex;gap:2px;overflow-x:auto;position:sticky;top:60px;z-index:300}
.tab{padding:12px 17px;border:none;background:none;cursor:pointer;font-size:.85rem;color:var(--muted);font-weight:600;border-bottom:2.5px solid transparent;white-space:nowrap;transition:all .18s;font-family:inherit;display:flex;align-items:center;gap:5px}
.tab.active{color:var(--green);border-bottom-color:var(--green)}
.tab:hover:not(.active){color:var(--text)}
.tab .tbadge{background:var(--gold);color:#1A1A1A;border-radius:9px;padding:0 6px;font-size:.66rem;font-weight:700}

.container{max-width:1400px;margin:0 auto;padding:20px}
.tc{display:none;animation:fade .25s ease}
.tc.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}

/* BROWSE LAYOUT */
.browse-layout{display:grid;grid-template-columns:262px 1fr;gap:20px;align-items:start}
.sidebar{background:var(--surface);border-radius:var(--radius);padding:18px;border:1px solid var(--border);position:sticky;top:116px;max-height:calc(100vh - 132px);overflow-y:auto}
.sidebar::-webkit-scrollbar{width:5px}.sidebar::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
.sf{font-size:.7rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin:16px 0 7px;font-weight:700;display:flex;justify-content:space-between;align-items:center}
.sf:first-child{margin-top:0}
.chips{display:flex;flex-wrap:wrap;gap:4px}
.chip{display:inline-flex;align-items:center;gap:3px;padding:4px 10px;border-radius:14px;border:1px solid var(--border);background:var(--bg);font-size:.73rem;cursor:pointer;transition:all .13s;color:var(--text);font-family:inherit}
.chip:hover{border-color:var(--green);color:var(--green)}
.chip.on{background:var(--green);color:#fff;border-color:var(--green)}
.sel{width:100%;padding:7px 9px;border-radius:8px;border:1px solid var(--border);background:var(--bg);font-size:.8rem;color:var(--text);cursor:pointer;outline:none;font-family:inherit}
.chkrow{display:flex;align-items:center;gap:7px;font-size:.79rem;cursor:pointer;margin-bottom:6px}
.chkrow input{accent-color:var(--green);width:15px;height:15px}
.rst{width:100%;padding:8px;margin-top:14px;border:1px solid var(--border);border-radius:8px;background:none;cursor:pointer;font-size:.78rem;color:var(--muted);transition:all .18s;font-family:inherit;font-weight:600}
.rst:hover{background:var(--green);color:#fff;border-color:var(--green)}

/* DUAL RANGE SLIDER */
.dual-range{position:relative;height:32px;margin-top:8px}
.dual-range input[type=range]{position:absolute;width:100%;top:8px;height:4px;background:none;pointer-events:none;-webkit-appearance:none;appearance:none}
.dual-range input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;pointer-events:all;width:16px;height:16px;border-radius:50%;background:var(--green);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);cursor:pointer}
.dual-range input[type=range]::-moz-range-thumb{pointer-events:all;width:16px;height:16px;border-radius:50%;background:var(--green);border:2px solid #fff;cursor:pointer}
.dual-track{position:absolute;top:9px;height:4px;width:100%;background:var(--border);border-radius:2px}
.dual-fill{position:absolute;top:9px;height:4px;background:var(--green);border-radius:2px}
.range-labels{display:flex;justify-content:space-between;font-size:.74rem;color:var(--green);font-weight:600;margin-top:14px}
.single-range{width:100%;accent-color:var(--green);margin-top:6px}
.rrow{display:flex;align-items:center;gap:8px}
.rval{font-size:.76rem;font-weight:600;color:var(--green);min-width:42px;text-align:right}

/* RESULTS */
.rhdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:13px;flex-wrap:wrap;gap:8px}
.rcount{font-size:.84rem;color:var(--muted)}.rcount strong{color:var(--text)}
.view-toggle{display:flex;gap:4px;background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:3px}
.vt-btn{border:none;background:none;padding:5px 12px;border-radius:6px;font-size:.78rem;cursor:pointer;color:var(--muted);font-family:inherit;font-weight:600;display:flex;align-items:center;gap:4px}
.vt-btn.on{background:var(--green);color:#fff}

.aibox{background:linear-gradient(135deg,#E9F5EF,#F4EFE0);border:1px solid #B7E4C7;border-radius:var(--radius);padding:13px 16px;margin-bottom:14px;display:none;align-items:flex-start;gap:10px}
.aibox.show{display:flex}
.aibox-txt{font-size:.83rem;color:var(--green-d);line-height:1.5}

.newbanner{background:var(--gold);color:#1A1A1A;border-radius:var(--radius);padding:11px 16px;margin-bottom:14px;display:none;align-items:center;justify-content:space-between;font-size:.83rem;font-weight:600;cursor:pointer;box-shadow:var(--shadow)}
.newbanner.show{display:flex}

.cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px}

/* CARD */
.card{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;transition:box-shadow .2s,transform .18s;position:relative;display:flex;flex-direction:column}
.card:hover{box-shadow:var(--shadow-lg);transform:translateY(-3px)}
.card.highlight{animation:hl 2.5s ease}
@keyframes hl{0%,100%{box-shadow:var(--shadow)}30%{box-shadow:0 0 0 3px var(--gold)}}
.card-badges{position:absolute;top:9px;left:9px;display:flex;gap:3px;flex-wrap:wrap;z-index:2;max-width:70%}
.card-actions{position:absolute;top:9px;right:9px;display:flex;gap:4px;z-index:2}
.badge{font-size:.62rem;font-weight:700;padding:2px 7px;border-radius:9px;text-transform:uppercase;letter-spacing:.03em}
.b-new{background:#DCFCE7;color:#166534}.b-quote{background:#EDE9FE;color:#6D28D9}.b-spot{background:#D1FAE5;color:#065F46}
.b-fwd{background:#DBEAFE;color:#1E40AF}.b-multi{background:var(--gold);color:#1A1A1A}
.ibtn{width:30px;height:30px;border-radius:50%;border:none;background:rgba(255,255,255,.95);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;box-shadow:0 1px 5px rgba(0,0,0,.12);transition:transform .13s}
.ibtn:hover{transform:scale(1.13)}
.card-banner{height:88px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.card-banner-ov{position:absolute;inset:0;background:rgba(0,0,0,.15)}
.card-banner-flag{font-size:2.6rem;position:relative;z-index:1}
.region-stripe{position:absolute;bottom:0;left:0;right:0;height:4px;z-index:1}
.card-body{padding:13px 15px;flex:1;display:flex;flex-direction:column}
.card-name{font-size:.9rem;font-weight:700;line-height:1.32;margin-bottom:3px}
.card-sup{font-size:.71rem;color:var(--muted);margin-bottom:8px;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.card-origin{font-size:.74rem;color:var(--green);font-weight:600;margin-bottom:7px}
.tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px}
.tag{font-size:.65rem;padding:2px 8px;border-radius:9px;font-weight:600}
.t-proc{background:#E9F5EF;color:var(--green-d)}
.t-var{background:#F4EFE0;color:var(--gold-d)}
.t-note{background:#FEF3F2;color:#B42318}
.cert-pill{font-size:.6rem;padding:1px 6px;border-radius:7px;font-weight:700;background:#ECFDF5;color:#047857;border:1px solid #A7F3D0}
.specs{display:grid;grid-template-columns:1fr 1fr;gap:3px 10px;font-size:.7rem;color:var(--muted);margin:6px 0 8px}
.specs b{color:var(--text);font-weight:600}
.card-meta{display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto;padding-top:8px}
.price{font-size:1.15rem;font-weight:800;color:var(--green-d)}
.price-unit{font-size:.66rem;color:var(--muted);font-weight:500}
.price-quote{font-size:.82rem;font-weight:700;color:#6D28D9}
.pdir{font-size:.7rem;font-weight:700;margin-left:4px}
.pdir.up{color:#DC2626}.pdir.down{color:#16A34A}
.score-pill{display:inline-flex;align-items:center;gap:2px;background:linear-gradient(135deg,var(--green),var(--green-l));color:#fff;border-radius:10px;padding:2px 8px;font-size:.68rem;font-weight:700}
.card-footer{padding:9px 13px;border-top:1px solid var(--border);display:flex;align-items:center;gap:5px}
.avail{display:flex;align-items:center;gap:4px;font-size:.69rem;color:var(--muted);margin-right:auto}
.dot{width:7px;height:7px;border-radius:50%;display:inline-block;flex-shrink:0}
.d-in{background:#22C55E}.d-out{background:#EF4444}.d-fwd{background:#6366F1}
.fbtn{font-size:.78rem;padding:5px 8px;border-radius:7px;background:var(--bg);color:var(--muted);border:1px solid var(--border);cursor:pointer;transition:all .15s;font-family:inherit}
.fbtn:hover{border-color:var(--green);color:var(--green)}
.fbtn.on{background:#DBEAFE;color:#1E40AF;border-color:#93C5FD}
.viewbtn{font-size:.71rem;padding:5px 11px;border-radius:7px;background:var(--green);color:#fff;border:none;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:3px;transition:background .18s;font-weight:600}
.viewbtn:hover{background:var(--green-d)}
.no-results{text-align:center;padding:60px 20px;color:var(--muted);grid-column:1/-1}
.card.unavailable{opacity:.55;filter:grayscale(.5)}

/* SKELETON */
.skel{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;height:330px}
.skel-banner{height:88px;background:linear-gradient(90deg,#eee,#f5f5f5,#eee);background-size:200% 100%;animation:shimmer 1.3s infinite}
.skel-line{height:11px;border-radius:5px;background:linear-gradient(90deg,#eee,#f5f5f5,#eee);background-size:200% 100%;animation:shimmer 1.3s infinite;margin:11px 14px}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* SECTIONS */
.sec-title{font-size:1.05rem;font-weight:800;display:flex;align-items:center;gap:7px;margin-bottom:6px}
.section-note{font-size:.81rem;color:var(--muted);margin-bottom:16px;line-height:1.55}
.phdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;flex-wrap:wrap;gap:10px}
.btn{padding:8px 16px;border-radius:8px;font-size:.82rem;font-weight:600;cursor:pointer;border:none;transition:all .18s;font-family:inherit}
.btn-g{background:var(--green);color:#fff}.btn-g:hover{background:var(--green-d)}
.btn-gold{background:var(--gold);color:#1A1A1A}.btn-gold:hover{background:var(--gold-d)}
.btn-s{background:var(--surface);color:var(--text);border:1px solid var(--border)}.btn-s:hover{border-color:var(--green);color:var(--green)}

/* CALC */
.calc-grid{display:flex;flex-direction:column;gap:20px}
.ccard{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);padding:22px}
.ccard h2{font-size:1rem;font-weight:800;margin-bottom:16px;display:flex;align-items:center;gap:7px}
.calc-inputs{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:13px;margin-bottom:18px}
.fg label{display:block;font-size:.69rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);margin-bottom:5px}
.fg input,.fg select{width:100%;padding:8px 10px;border-radius:8px;border:1px solid var(--border);font-size:.86rem;background:var(--bg);color:var(--text);outline:none;transition:border-color .2s;font-family:inherit}
.fg input:focus,.fg select:focus{border-color:var(--green);background:#fff}
.calc-table{width:100%;border-collapse:collapse;font-size:.82rem;overflow:hidden;border-radius:10px}
.calc-table th,.calc-table td{padding:10px 12px;text-align:center;border-bottom:1px solid var(--border)}
.calc-table th{background:var(--green);color:#fff;font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;font-weight:700}
.calc-table td:first-child,.calc-table th:first-child{text-align:left;font-weight:600}
.calc-table tr:nth-child(even){background:var(--bg)}
.calc-table .hl-row{background:#E9F5EF!important;font-weight:700;color:var(--green-d)}
.blend-row{display:grid;grid-template-columns:1fr 90px 32px;gap:8px;align-items:center;margin-bottom:8px}
.blend-row select,.blend-row input{padding:7px 9px;border-radius:7px;border:1px solid var(--border);font-size:.8rem;background:var(--bg);font-family:inherit;outline:none}
.blend-total{font-size:.82rem;font-weight:700;margin-top:8px}
.blend-total.bad{color:#DC2626}.blend-total.good{color:var(--green)}
.rmbtn{background:#FEE2E2;color:#B91C1C;border:none;border-radius:6px;cursor:pointer;font-size:.85rem;height:32px}

/* COMPARE */
.cmp-wrap{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden}
.cmp-hdr{padding:14px 18px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
.cmp-empty{text-align:center;padding:60px 20px;color:var(--muted)}
.cmp-table{width:100%;border-collapse:collapse;font-size:.82rem}
.cmp-table th{background:var(--bg);padding:11px 14px;font-weight:700;text-align:left;font-size:.72rem;border-bottom:1px solid var(--border)}
.cmp-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top}
.cmp-table td:first-child{color:var(--muted);font-weight:600;width:140px;font-size:.76rem;background:var(--bg)}
.cmp-table input{width:75px;padding:4px 7px;border-radius:6px;border:1px solid var(--border);font-size:.78rem;font-family:inherit;outline:none}
.cmp-table input:focus{border-color:var(--green)}
.best{font-weight:800!important;color:var(--green)!important}

/* SUPPLIERS */
.sup-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:15px}
.sup-card{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);padding:18px;transition:box-shadow .18s}
.sup-card:hover{box-shadow:var(--shadow)}
.sup-name{font-size:.97rem;font-weight:800;margin-bottom:3px}
.sup-type{font-size:.7rem;color:var(--muted);margin-bottom:9px}
.sup-tags{display:flex;flex-wrap:wrap;gap:3px;margin-bottom:10px}
.sup-tag{padding:2px 7px;border-radius:8px;font-size:.65rem;background:var(--bg);border:1px solid var(--border);color:var(--muted)}
.sup-desc{font-size:.78rem;color:var(--muted);line-height:1.5;margin-bottom:11px}
.sup-link{display:inline-flex;align-items:center;gap:3px;font-size:.8rem;color:var(--green);text-decoration:none;font-weight:700}
.sup-link:hover{text-decoration:underline}
.live-badge{display:inline-flex;align-items:center;gap:5px;font-size:.66rem;background:#DCFCE7;color:#166534;border-radius:9px;padding:3px 8px;font-weight:700;margin-bottom:9px}
.live-dot{width:6px;height:6px;border-radius:50%;background:#22C55E;animation:pulse 2s infinite}
.pend-badge{display:inline-flex;align-items:center;gap:5px;font-size:.66rem;background:#FEF3C7;color:#92400E;border-radius:9px;padding:3px 8px;font-weight:700;margin-bottom:9px}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}

/* MAP */
.map-wrap{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);padding:20px;position:relative}
.map-svg{width:100%;height:auto;display:block;border-radius:10px;background:linear-gradient(180deg,#EAF4FB,#F4F9FC)}
.map-dot{cursor:pointer;transition:all .18s}
.map-dot:hover{stroke:#1A1A1A;stroke-width:2}
.map-label{font-size:9px;fill:#374151;font-weight:600;pointer-events:none}
.map-legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:14px;font-size:.78rem}
.map-legend span{display:flex;align-items:center;gap:5px}
.leg-dot{width:11px;height:11px;border-radius:50%}
.map-tooltip{position:absolute;background:#1A1A1A;color:#fff;padding:6px 10px;border-radius:7px;font-size:.74rem;pointer-events:none;opacity:0;transition:opacity .15s;z-index:10;white-space:nowrap}

/* ORIGINS GRID */
.region-section{margin-bottom:24px}
.region-head{display:flex;align-items:center;gap:8px;font-size:.82rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;margin-bottom:11px;padding-bottom:7px;border-bottom:2px solid var(--border)}
.region-head .rdot{width:12px;height:12px;border-radius:50%}
.region-head .rcnt{font-weight:600;color:var(--muted);font-size:.74rem;text-transform:none;letter-spacing:0}
.origins-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:12px}
.origin-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;cursor:pointer;transition:all .16s;position:relative;overflow:hidden}
.origin-card:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px);border-color:var(--green)}
.origin-card .oc-stripe{position:absolute;top:0;left:0;right:0;height:4px}
.origin-flag{font-size:2rem;line-height:1;margin-bottom:6px}
.origin-name{font-size:.92rem;font-weight:700;margin-bottom:2px}
.origin-meta{font-size:.73rem;color:var(--muted);line-height:1.5}
.origin-count{display:inline-block;background:var(--green);color:#fff;border-radius:9px;padding:1px 8px;font-size:.7rem;font-weight:700;margin-top:6px}

/* CALENDAR */
.cal-wrap{background:var(--surface);border-radius:var(--radius);border:1px solid var(--border);padding:20px;overflow-x:auto}
.cal-table{width:100%;border-collapse:collapse;font-size:.76rem;min-width:760px}
.cal-table th{padding:8px 4px;font-size:.68rem;text-transform:uppercase;color:var(--muted);font-weight:700;text-align:center;border-bottom:2px solid var(--border)}
.cal-table th:first-child{text-align:left;width:150px}
.cal-table td{padding:4px;text-align:center;border-bottom:1px solid var(--border)}
.cal-table td:first-child{text-align:left;font-weight:600;font-size:.78rem}
.cal-cell{height:24px;border-radius:5px;margin:1px;background:#F1EFEA}
.cal-peak{opacity:1}.cal-arrival{opacity:.45}.cal-none{background:#F1EFEA}
.cal-table td:first-child{white-space:nowrap;padding-right:10px}
.cal-table th[data-now]{background:var(--green);color:#fff;border-radius:5px}
.cal-legend{display:flex;gap:18px;flex-wrap:wrap;margin-top:14px;font-size:.78rem}

/* WATCHLIST */
.wl-empty{text-align:center;padding:80px 20px;color:var(--muted)}
.wl-table{width:100%;border-collapse:collapse;font-size:.82rem;background:var(--surface);border-radius:var(--radius);overflow:hidden;border:1px solid var(--border)}
.wl-table th{background:var(--green);color:#fff;padding:11px 13px;text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.03em;font-weight:700}
.wl-table td{padding:11px 13px;border-bottom:1px solid var(--border);vertical-align:middle}
.wl-table tr:last-child td{border-bottom:none}
.wl-table input{width:80px;padding:5px 8px;border-radius:6px;border:1px solid var(--border);font-size:.8rem;font-family:inherit;outline:none}
.wl-table input:focus{border-color:var(--green)}
.delta-down{color:#16A34A;font-weight:700}.delta-up{color:#DC2626;font-weight:700}.delta-hit{background:#DCFCE7;color:#166534;font-weight:700;padding:2px 7px;border-radius:7px}
.alert-banner{background:#FEF2F2;border:1px solid #FCA5A5;color:#991B1B;border-radius:var(--radius);padding:12px 16px;margin-bottom:16px;font-size:.84rem;font-weight:600;display:flex;align-items:center;gap:8px}

/* TOAST */
.toasts{position:fixed;bottom:78px;right:18px;display:flex;flex-direction:column;gap:7px;z-index:9999}
.toast{background:var(--green-d);color:#fff;padding:10px 15px;border-radius:9px;font-size:.81rem;box-shadow:0 4px 14px rgba(0,0,0,.22);animation:tIn .2s ease;max-width:290px}
@keyframes tIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}

/* AUTH AREA */
.auth-area{display:flex;align-items:center;flex-shrink:0}
.acct{display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:18px;padding:3px 8px 3px 4px}
.acct-pic{width:24px;height:24px;border-radius:50%;object-fit:cover}
.acct-name{font-size:.78rem;color:#fff;font-weight:600;max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.acct-btn{background:none;border:none;color:#fff;cursor:pointer;font-size:.7rem;padding:0 2px}
.pro-badge{background:var(--gold);color:#1A1A1A;border-radius:7px;padding:1px 6px;font-size:.6rem;font-weight:800;letter-spacing:.04em}
#gsiButton{display:flex}

/* LOCKED BANNER */
.locked-banner{display:none;background:linear-gradient(90deg,#FEF3C7,#FDE68A);border:1px solid var(--gold);color:#7A5B12;border-radius:var(--radius);padding:11px 16px;margin-bottom:14px;font-size:.83rem;cursor:pointer;font-weight:600}
.locked-banner.show{display:block}
.locked-banner u{text-underline-offset:2px}

/* PAYWALL MODAL */
.paywall-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:800;align-items:center;justify-content:center;padding:18px}
.paywall-modal.open{display:flex}
.pw-card{background:var(--surface);border-radius:18px;max-width:420px;width:100%;padding:26px 24px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.35);animation:fade .2s ease}
.pw-close{position:absolute;top:12px;right:14px;background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--muted)}
.pw-emoji{font-size:2.2rem;text-align:center}
.pw-title{text-align:center;font-size:1.3rem;font-weight:800;margin:6px 0 4px;color:var(--green)}
.pw-reason{text-align:center;font-size:.86rem;color:var(--muted);margin-bottom:16px}
.pw-perks{list-style:none;margin:0 0 18px;padding:0;display:flex;flex-direction:column;gap:7px}
.pw-perks li{font-size:.86rem;color:var(--text)}
.pw-plans{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.pw-plan{position:relative;border:2px solid var(--border);background:var(--bg);border-radius:12px;padding:16px 10px 12px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;font-family:inherit;transition:all .15s}
.pw-plan:hover{border-color:var(--green)}
.pw-plan.best{border-color:var(--gold);background:#FFFBEB}
.pw-tag{position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--gold);color:#1A1A1A;font-size:.6rem;font-weight:800;padding:2px 8px;border-radius:8px;white-space:nowrap}
.pw-plan-name{font-size:.8rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.pw-plan-price{font-size:1.5rem;font-weight:800;color:var(--green)}
.pw-plan-price small{font-size:.7rem;font-weight:600;color:var(--muted)}
.pw-auth-note{text-align:center;font-size:.76rem;color:var(--muted);margin-top:14px}
.pw-fine{text-align:center;font-size:.72rem;color:var(--muted);margin-top:6px}

/* CALC LOCK */
.calc-locked .calc-grid{filter:blur(5px);pointer-events:none;user-select:none;opacity:.6}

/* MOBILE MENU BUTTON + OVERLAY */
.menu-toggle{display:none;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;width:38px;height:38px;border-radius:50%;align-items:center;justify-content:center;cursor:pointer;font-size:1.15rem;flex-shrink:0}
.menu-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:600}
.menu-overlay.open{display:block}
.menu-sheet{position:absolute;top:0;right:0;bottom:0;width:78%;max-width:320px;background:var(--surface);box-shadow:-4px 0 24px rgba(0,0,0,.25);padding:14px;overflow-y:auto;animation:slideIn .2s ease}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
.menu-sheet-head{display:flex;align-items:center;justify-content:space-between;font-size:1rem;font-weight:800;color:var(--green);padding:6px 6px 14px;border-bottom:1px solid var(--border);margin-bottom:8px}
.menu-close{background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--muted);line-height:1}
.menu-item{display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:none;border:none;padding:14px 12px;font-size:.95rem;font-weight:600;color:var(--text);cursor:pointer;border-radius:10px;font-family:inherit}
.menu-item:hover,.menu-item.active{background:var(--bg);color:var(--green)}
.menu-item span:first-child{font-size:1.25rem}
.menu-badge{margin-left:auto;background:var(--gold);color:#1A1A1A;border-radius:9px;padding:1px 8px;font-size:.72rem;font-weight:700}
.menu-badge:empty{display:none}

/* MOBILE BOTTOM NAV */
.bottom-nav{display:none;position:fixed;bottom:0;left:0;right:0;background:var(--green);z-index:400;padding:6px 4px;box-shadow:0 -2px 12px rgba(0,0,0,.2)}
.bottom-nav-inner{display:flex;justify-content:space-around;max-width:600px;margin:0 auto}
.bn-btn{flex:1;border:none;background:none;color:rgba(255,255,255,.65);font-size:.6rem;font-weight:600;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:5px 2px;font-family:inherit;position:relative}
.bn-btn .bn-ico{font-size:1.15rem}
.bn-btn.active{color:#fff}
.bn-badge{position:absolute;top:0;right:50%;transform:translateX(14px);background:var(--gold);color:#1A1A1A;border-radius:8px;font-size:.55rem;font-weight:700;padding:0 4px;min-width:14px}

@media(max-width:820px){
  .browse-layout{grid-template-columns:1fr}
  .sidebar{position:static;max-height:none}
  .calc-inputs{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:640px){
  nav.tabs{display:none}
  .bottom-nav{display:block}
  body{padding-bottom:62px}
  .toasts{bottom:78px}
  .hactions{display:none}
  .search-wrap{max-width:none}
  .search-wrap.collapsed{display:none}
  .search-toggle{display:flex;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;width:38px;height:38px;border-radius:50%;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;margin-left:auto}
  .menu-toggle{display:flex}
  .logo{font-size:1.1rem}
  .cgrid{grid-template-columns:1fr}
  .sync-bar{font-size:.68rem}
}
</style>
</head>
<body>
<header>
  <div class="logo"><span>☕</span><span><span class="g">Green</span><span class="s">Source</span></span></div>
  <div class="search-wrap collapsed" id="searchWrap">
    <span class="si">🔍</span>
    <input type="text" id="gSearch" placeholder='Search: "blueberry", "funky and wild", "low acid for espresso", "Ethiopia natural under $8"…'>
    <span class="search-spin" id="searchSpin"></span>
  </div>
  <button class="search-toggle" id="searchToggle" onclick="toggleSearch()">🔍</button>
  <button class="menu-toggle" id="menuToggle" onclick="toggleMenu()">☰</button>
  <div class="hactions">
    <button class="hbtn" onclick="goTab('compare')">⚖️ Compare <span class="hbadge" id="cmpBadge">0</span></button>
    <button class="hbtn" onclick="goTab('watchlist')">❤️ Watchlist <span class="hbadge" id="wlBadge">0</span></button>
  </div>
  <div id="authArea" class="auth-area"></div>
</header>

<div class="sync-bar">
  <div class="sync-left">
    <span id="syncStatus">📡 Live data: Royal Coffee &amp; Burman Coffee</span>
    <span id="countdown" style="opacity:.8"></span>
  </div>
  <div class="sync-controls">
    <span style="font-size:.7rem">Auto-refresh</span>
    <div class="toggle-sw on" id="autoToggle" onclick="toggleAuto()"></div>
    <select id="intervalSel" onchange="setInterval2()">
      <option value="5">5 min</option>
      <option value="15" selected>15 min</option>
      <option value="30">30 min</option>
      <option value="60">60 min</option>
    </select>
    <button id="refreshBtn" onclick="manualRefresh()">🔄 Refresh</button>
  </div>
</div>

<nav class="tabs">
  <button class="tab active" data-tab="browse" onclick="goTab('browse')">🌍 Browse</button>
  <button class="tab" data-tab="map" onclick="goTab('map')">🌍 Origins</button>
  <button class="tab" data-tab="calendar" onclick="goTab('calendar')">📅 Calendar</button>
  <button class="tab" data-tab="calculator" onclick="goTab('calculator')">🧮 Calculator</button>
  <button class="tab" data-tab="compare" onclick="goTab('compare')">⚖️ Compare <span class="tbadge" id="cmpBadge2" style="display:none">0</span></button>
  <button class="tab" data-tab="suppliers" onclick="goTab('suppliers')">🏭 Suppliers</button>
  <button class="tab" data-tab="watchlist" onclick="goTab('watchlist')">❤️ Watchlist <span class="tbadge" id="wlBadge2" style="display:none">0</span></button>
</nav>

<div class="container">
  <!-- BROWSE -->
  <div class="tc active" id="tc-browse">
    <div class="browse-layout">
      <aside class="sidebar">
        <div class="sf">Sort By</div>
        <select class="sel" id="sortSel" onchange="applyFilters()">
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name">Name A–Z</option>
          <option value="score">Highest Cup Score</option>
          <option value="qty">Most Available</option>
          <option value="new">Newest First</option>
        </select>
        <div class="sf">Supplier</div><div class="chips" id="supF"></div>
        <div class="sf">Origin</div><div class="chips" id="originF"></div>
        <div class="sf">Process</div><div class="chips" id="processF"></div>
        <div class="sf">Warehouse</div><div class="chips" id="warehouseF"></div>
        <div class="sf">Certifications</div>
        <label class="chkrow"><input type="checkbox" class="certChk" value="Organic" onchange="applyFilters()"> Organic</label>
        <label class="chkrow"><input type="checkbox" class="certChk" value="Fair Trade" onchange="applyFilters()"> Fair Trade</label>
        <label class="chkrow"><input type="checkbox" class="certChk" value="Direct Trade" onchange="applyFilters()"> Direct Trade</label>
        <label class="chkrow"><input type="checkbox" class="certChk" value="Rainforest Alliance" onchange="applyFilters()"> Rainforest Alliance</label>
        <div class="sf">Crop Year</div>
        <select class="sel" id="cropSel" onchange="applyFilters()"><option value="">Any year</option></select>
        <div class="sf">Max Price / lb <span class="rval" id="priceL">Any</span></div>
        <div class="rrow"><input type="range" class="single-range" min="2" max="35" value="35" id="priceR" oninput="updPL();applyFilters()"></div>
        <div class="sf">Cup Score Range</div>
        <div class="dual-range">
          <div class="dual-track"></div><div class="dual-fill" id="scoreFill"></div>
          <input type="range" min="75" max="100" step="0.5" value="75" id="scoreMin" oninput="updScore();applyFilters()">
          <input type="range" min="75" max="100" step="0.5" value="100" id="scoreMax" oninput="updScore();applyFilters()">
        </div>
        <div class="range-labels"><span id="scoreMinL">75</span><span id="scoreMaxL">100</span></div>
        <div class="sf">Availability</div>
        <div class="chips" id="availF">
          <button class="chip" data-f="avail" data-v="available" onclick="toggleChip(this)">✅ Available</button>
          <button class="chip" data-f="avail" data-v="unavailable" onclick="toggleChip(this)">✖ Unavailable</button>
        </div>
        <div class="sf">Show Only</div>
        <label class="chkrow"><input type="checkbox" id="fSpot" onchange="applyFilters()"> ✅ Spot available</label>
        <label class="chkrow"><input type="checkbox" id="fNotes" onchange="applyFilters()"> 🍃 Has tasting notes</label>
        <label class="chkrow"><input type="checkbox" id="fPriced" onchange="applyFilters()"> 💰 Priced only</label>
        <label class="chkrow"><input type="checkbox" id="fQuote" onchange="applyFilters()"> 💬 Quote only</label>
        <button class="rst" onclick="resetAll()">↺ Reset All Filters</button>
      </aside>
      <main>
        <div class="aibox" id="aiBox"><span style="font-size:1.1rem;flex-shrink:0">✨</span><div class="aibox-txt" id="aiMsg"></div></div>
        <div class="newbanner" id="newBanner" onclick="scrollToNew()"></div>
        <div class="locked-banner" id="lockedBanner" onclick="openPaywall()"></div>
        <div class="rhdr">
          <div class="rcount" id="rCount">Loading…</div>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="fbtn" onclick="togglePriceUnit()" id="unitBtn">$/lb</button>
            <button class="fbtn" onclick="shareView()">🔗 Share view</button>
          </div>
        </div>
        <div class="cgrid" id="coffeeGrid"></div>
      </main>
    </div>
  </div>

  <!-- ORIGINS -->
  <div class="tc" id="tc-map">
    <div class="sec-title">🌍 Browse by Origin</div>
    <p class="section-note">Every origin with available lots, grouped by growing region. Click any card to see those coffees.</p>
    <div id="originsHolder"></div>
  </div>

  <!-- CALENDAR -->
  <div class="tc" id="tc-calendar">
    <div class="sec-title">📅 Harvest & Arrival Calendar</div>
    <p class="section-note">Typical new-crop harvest windows (solid) and approximate US arrival windows (faded) by region. Use this to plan sourcing ahead of peak freshness.</p>
    <div class="cal-wrap"><div id="calHolder"></div>
      <div class="cal-legend">
        <span><span class="leg-dot" style="background:var(--green)"></span> ● Peak harvest at origin</span>
        <span><span class="leg-dot" style="background:var(--green);opacity:.45"></span> ○ Typical US arrival</span>
      </div>
    </div>
  </div>

  <!-- CALCULATOR -->
  <div class="tc" id="tc-calculator">
    <div class="calc-grid">
      <div class="ccard">
        <h2>🧮 Roast Cost Calculator</h2>
        <div class="calc-inputs">
          <div class="fg"><label>Green Price ($/lb)</label><input type="number" id="cGreen" step="0.01" oninput="saveCalc();calcCost()"></div>
          <div class="fg"><label>Roast Loss (%)</label><input type="number" id="cShrink" oninput="saveCalc();calcCost()"></div>
          <div class="fg"><label>Packaging ($/bag)</label><input type="number" id="cPack" step="0.01" oninput="saveCalc();calcCost()"></div>
          <div class="fg"><label>Labor ($/lb)</label><input type="number" id="cLabor" step="0.01" oninput="saveCalc();calcCost()"></div>
          <div class="fg"><label>Overhead ($/lb)</label><input type="number" id="cOver" step="0.01" oninput="saveCalc();calcCost()"></div>
          <div class="fg"><label>Target Margin (%)</label><input type="number" id="cMargin" oninput="saveCalc();calcCost()"></div>
        </div>
        <div style="overflow-x:auto"><table class="calc-table" id="calcTable"></table></div>
      </div>
      <div class="ccard">
        <h2>🎚️ Blend Calculator</h2>
        <p class="section-note">Build a blend from up to 6 priced coffees. Percentages must total 100%. The blended green cost auto-fills the calculator above.</p>
        <div id="blendRows"></div>
        <button class="btn btn-s" onclick="addBlendRow()" style="margin-top:6px">+ Add component</button>
        <div class="blend-total" id="blendTotal"></div>
      </div>
    </div>
  </div>

  <!-- COMPARE -->
  <div class="tc" id="tc-compare">
    <div class="cmp-wrap">
      <div class="cmp-hdr">
        <div class="sec-title" style="margin:0">⚖️ Side-by-Side Comparison</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-s" onclick="exportCSV()">⬇️ Export CSV</button>
          <button class="btn btn-s" onclick="shareCompare()">🔗 Share</button>
          <button class="btn btn-s" onclick="clearCompare()">Clear</button>
        </div>
      </div>
      <div id="compareBody"></div>
    </div>
  </div>

  <!-- SUPPLIERS -->
  <div class="tc" id="tc-suppliers">
    <div class="sec-title">🏭 Data Sources</div>
    <p class="section-note">GreenSource only lists suppliers whose inventory can be fetched without a login. Sources marked <b>LIVE</b> are currently feeding listings; <b>PENDING</b> sources need a backend proxy to bypass CORS before they can go live.</p>
    <div class="sup-grid" id="supGrid"></div>
  </div>

  <!-- WATCHLIST -->
  <div class="tc" id="tc-watchlist">
    <div class="phdr"><div class="sec-title" style="margin:0">❤️ Your Watchlist</div><button class="btn btn-s" onclick="clearWatchlist()">Clear All</button></div>
    <div id="wlAlerts"></div>
    <div id="wlBody"></div>
  </div>
</div>

<!-- MOBILE MENU OVERLAY -->
<div class="menu-overlay" id="menuOverlay" onclick="closeMenu(event)">
  <div class="menu-sheet">
    <div class="menu-sheet-head">Menu<button class="menu-close" onclick="closeMenu()">✕</button></div>
    <button class="menu-item" onclick="goTab('browse')"><span>🌍</span> Browse Listings</button>
    <button class="menu-item" onclick="goTab('map')"><span>🌍</span> Origins</button>
    <button class="menu-item" onclick="goTab('calendar')"><span>📅</span> Harvest Calendar</button>
    <button class="menu-item" onclick="goTab('calculator')"><span>🧮</span> Cost Calculator</button>
    <button class="menu-item" onclick="goTab('compare')"><span>⚖️</span> Compare <span class="menu-badge" id="cmpBadge4"></span></button>
    <button class="menu-item" onclick="goTab('suppliers')"><span>🏭</span> Suppliers</button>
    <button class="menu-item" onclick="goTab('watchlist')"><span>❤️</span> Watchlist <span class="menu-badge" id="wlBadge4"></span></button>
  </div>
</div>

<div class="bottom-nav"><div class="bottom-nav-inner">
  <button class="bn-btn active" data-tab="browse" onclick="goTab('browse')"><span class="bn-ico">🌍</span>Browse</button>
  <button class="bn-btn" data-tab="map" onclick="goTab('map')"><span class="bn-ico">🌍</span>Origins</button>
  <button class="bn-btn" data-tab="calculator" onclick="goTab('calculator')"><span class="bn-ico">🧮</span>Calc</button>
  <button class="bn-btn" data-tab="compare" onclick="goTab('compare')"><span class="bn-ico">⚖️</span>Compare<span class="bn-badge" id="cmpBadge3" style="display:none">0</span></button>
  <button class="bn-btn" onclick="toggleMenu()"><span class="bn-ico">☰</span>More</button>
</div></div>

<!-- PAYWALL MODAL -->
<div class="paywall-modal" id="paywallModal" onclick="closePaywall(event)">
  <div class="pw-card">
    <button class="pw-close" onclick="closePaywall()">✕</button>
    <div class="pw-emoji">☕🔓</div>
    <h2 class="pw-title">Unlock GreenSource Pro</h2>
    <p class="pw-reason" id="pwReason">Unlock the full catalog and all tools.</p>
    <ul class="pw-perks">
      <li>✅ All 500+ specialty green coffees</li>
      <li>✅ Unlimited cost &amp; blend calculator</li>
      <li>✅ Compare, watchlist &amp; price alerts</li>
      <li>✅ Origins map, harvest calendar &amp; more</li>
    </ul>
    <div class="pw-plans">
      <button class="pw-plan" onclick="checkout('monthly')"><span class="pw-plan-name">Monthly</span><span class="pw-plan-price">$15<small>/mo</small></span></button>
      <button class="pw-plan best" onclick="checkout('yearly')"><span class="pw-tag">Best value • save 28%</span><span class="pw-plan-name">Yearly</span><span class="pw-plan-price">$129<small>/yr</small></span></button>
    </div>
    <p class="pw-auth-note" id="pwAuthNote">You'll sign in with Google at checkout.</p>
    <p class="pw-fine">Secure payment via Stripe · cancel anytime</p>
  </div>
</div>

<div class="toasts" id="toasts"></div>
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script>
let DB = [];
// ════════ CONFIG ════════
// Single supplier config array — add a new entry to wire a new source.
const SUPPLIERS = [
  {id:"royal",name:"Royal Coffee",type:"Importer & Exporter",url:"https://royalcoffee.com/offerings/",
   origins:["Kenya","Tanzania","Colombia","Indonesia","Brazil"],live:true,
   desc:"Oakland-based specialty importer. Public offerings page is structured and parseable (warehouse, lot #, spot/forward).",
   // fetchFn would hit a backend scraper endpoint: GET /api/scrape/royal -> normalized JSON
   proxy:"/api/scrape/royal"},
  {id:"burman",name:"Burman Coffee",type:"Retailer & Home Roaster",url:"https://www.burmancoffee.com/product-category/green-coffee-beans/",
   origins:["Ethiopia","Colombia","Guatemala","Honduras","Brazil"],live:true,
   desc:"Minneapolis retailer (WooCommerce). Public product pages expose price, description and stock — fully parseable.",
   proxy:"/api/scrape/burman"},
  {id:"bodhileaf",name:"Bodhi Leaf",type:"Importer & retailer (Shopify)",url:"https://bodhileafcoffee.com/collections/green-coffee",
   origins:["Guatemala","Colombia","Ethiopia","Brazil","Honduras"],live:true,
   desc:"Brea, CA importer on Shopify. Public products.json exposes full structured data — country, region, varietal, process, altitude, cupping notes, per-lb pricing.",
   proxy:"https://bodhileafcoffee.com/products.json"},
  {id:"millcity",name:"Mill City",type:"Roaster supply (Shopify)",url:"https://www.millcityroasters.com/green-coffee",
   origins:["Burundi","Guatemala","Ethiopia","Colombia","Honduras"],live:true,
   desc:"Minneapolis roaster-supply on Shopify. Public products.json includes cupping scores and detailed flavor notes with per-pound pricing.",
   proxy:"https://www.millcityroasters.com/products.json"},
  {id:"sweetmarias",name:"Sweet Maria's",type:"Home roaster retailer",url:"https://www.sweetmarias.com/green-coffee.html",
   origins:["Ethiopia","Brazil","Colombia","Guatemala","Indonesia"],live:false,
   desc:"Cloudflare-protected (returns 403 to bots). Needs a backend proxy with a real browser session to fetch.",
   proxy:"/api/scrape/sweetmarias  // proxy must render JS + pass Cloudflare"},
  {id:"cafeimports",name:"Cafe Imports",type:"Full-service importer",url:"https://cafeimports.com/north-america/coffees",
   origins:["Ethiopia","Colombia","Guatemala","Kenya","Brazil"],live:false,
   desc:"React app — listings load via internal JSON API. A proxy could hit their /api products endpoint directly.",
   proxy:"/api/scrape/cafeimports  // target their react-components JSON feed"},
  {id:"genuineorigin",name:"Genuine Origin",type:"Online marketplace",url:"https://genuineorigin.com/shop",
   origins:["Ethiopia","Colombia","Rwanda","Guatemala","Honduras"],live:false,
   desc:"Times out to direct requests; likely geo/bot filtered. Proxy with residential routing needed.",
   proxy:"/api/scrape/genuineorigin"},
  {id:"ally",name:"Ally Coffee",type:"Direct trade importer",url:"https://allycoffee.com",
   origins:["Colombia","Brazil","Ethiopia","Peru"],live:false,
   desc:"Collection URL structure changed (404). Needs updated selector + proxy.",
   proxy:"/api/scrape/ally"},
  {id:"osito",name:"Osito Coffee",type:"Direct trade importer",url:"https://ositocoffee.com",
   origins:["Colombia","Brazil","Guatemala"],live:false,
   desc:"Public catalog candidate — proxy must map their listing markup once confirmed.",
   proxy:"/api/scrape/osito"},
];

/* LIVE DATA NOTE:
   This static page cannot scrape suppliers directly (browser CORS blocks cross-origin
   fetches, and supplier sites send no CORS headers). The DB below is real data scraped
   server-side. To make auto-refresh truly live, deploy a tiny backend that runs the
   scrapers and serves normalized JSON at LIVE_FEED_URL (CORS-enabled). The app will
   then fetch it on each refresh. Until then, refresh re-checks the embedded feed and
   computes "new since last visit" + price deltas from your own localStorage history. */
const LIVE_FEED_URL = null; // e.g. "https://your-host/api/listings.json"

// ════════ CONSTANTS ════════
const FLAGS={Ethiopia:"🇪🇹",Colombia:"🇨🇴",Kenya:"🇰🇪",Guatemala:"🇬🇹",Panama:"🇵🇦",Brazil:"🇧🇷",Rwanda:"🇷🇼",Burundi:"🇧🇮",Honduras:"🇭🇳","Costa Rica":"🇨🇷",Peru:"🇵🇪",Indonesia:"🇮🇩",Yemen:"🇾🇪",Tanzania:"🇹🇿","El Salvador":"🇸🇻",Nicaragua:"🇳🇮",Mexico:"🇲🇽","Papua New Guinea":"🇵🇬",Bolivia:"🇧🇴",India:"🇮🇳",Hawaii:"🇺🇸","East Timor":"🇹🇱",Timor:"🇹🇱",Ecuador:"🇪🇨",Uganda:"🇺🇬","Dominican Republic":"🇩🇴",Blend:"🌍",Malawi:"🇲🇼"};
const REGION_COLOR={Africa:"#D97706","Central America":"#0D9488","South America":"#16A34A","Asia Pacific":"#4F46E5",Blend:"#6B7280",Other:"#6B7280"};
const GRAD={Ethiopia:"linear-gradient(135deg,#7C3A00,#1E5631)",Colombia:"linear-gradient(135deg,#1F4D39,#C9A84C)",Kenya:"linear-gradient(135deg,#2D6A4F,#B91C1C)",Guatemala:"linear-gradient(135deg,#0D9488,#155E63)",Panama:"linear-gradient(135deg,#1F4D39,#0D9488)",Brazil:"linear-gradient(135deg,#16A34A,#1F4D39)",Rwanda:"linear-gradient(135deg,#40916C,#7A5230)",Burundi:"linear-gradient(135deg,#16A34A,#1F4D39)",Honduras:"linear-gradient(135deg,#0D9488,#1F4D39)","Costa Rica":"linear-gradient(135deg,#0D9488,#155E63)",Peru:"linear-gradient(135deg,#16A34A,#0F5132)",Indonesia:"linear-gradient(135deg,#4F46E5,#312E81)",Yemen:"linear-gradient(135deg,#D97706,#7C2D12)",Tanzania:"linear-gradient(135deg,#D97706,#1F4D39)","El Salvador":"linear-gradient(135deg,#0D9488,#134E4A)",Nicaragua:"linear-gradient(135deg,#0D9488,#1F4D39)",Mexico:"linear-gradient(135deg,#0D9488,#155E63)","Papua New Guinea":"linear-gradient(135deg,#4F46E5,#1E1B4B)",Bolivia:"linear-gradient(135deg,#16A34A,#0F5132)",India:"linear-gradient(135deg,#4F46E5,#312E81)",Hawaii:"linear-gradient(135deg,#4F46E5,#0D9488)",Blend:"linear-gradient(135deg,#2D6A4F,#C9A84C)"};

// Flavor-association map powers local semantic search (no API key needed)
const FLAVOR_ASSOC={
  blueberry:["blueberry","berry","blackberry","fruit","jammy","ethiopia natural"],
  berry:["berry","blueberry","strawberry","raspberry","blackberry","fruit","jammy"],
  fruity:["fruit","berry","tropical","citrus","stone fruit","peach","apricot","mango","cherry","plum","juicy"],
  fruit:["fruit","berry","tropical","citrus","peach","mango","cherry","plum","juicy","apricot"],
  funky:["natural","anaerobic","wild","ferment","carbonic","boozy","wine","exotic","yeast"],
  wild:["natural","anaerobic","funky","ferment","carbonic","exotic","wine"],
  exotic:["anaerobic","carbonic","gesha","exotic","tropical","unique","yeast"],
  chocolate:["chocolate","cocoa","cacao","fudge","brownie","dark chocolate","milk chocolate"],
  chocolatey:["chocolate","cocoa","fudge","nutty","caramel"],
  nutty:["nut","almond","hazelnut","walnut","peanut","pecan"],
  sweet:["caramel","honey","sugar","molasses","syrup","sweet","toffee","vanilla"],
  caramel:["caramel","toffee","butterscotch","brown sugar","sweet"],
  citrus:["citrus","lemon","lime","orange","grapefruit","bergamot","tangerine"],
  floral:["floral","jasmine","rose","lavender","bergamot","tea","hibiscus"],
  tropical:["tropical","mango","pineapple","passionfruit","papaya","guava","coconut"],
  winey:["wine","boozy","ferment","grape","port","anaerobic"],
  "low acid":["low acid","balanced","smooth","nutty","chocolate","brazil","sumatra","earthy","heavy body","full body"],
  espresso:["chocolate","caramel","nutty","balanced","heavy body","full body","syrupy","low acid","sweet"],
  clean:["clean","bright","washed","crisp","tea-like"],
  earthy:["earth","cedar","tobacco","herbal","sumatra","wet-hull","woody","spice"],
  "fruit punch":["tropical","berry","juicy","fruit","mango","passionfruit","anaerobic","candy"],
  juicy:["juicy","fruit","berry","citrus","tropical","tea"],
  bright:["bright","citrus","acidity","lively","clean","kenya"],
  spicy:["spice","cinnamon","clove","cardamom","pepper","nutmeg"],
};

// Map coordinates (equirectangular %) for origins
const MAP_COORD={Mexico:[16,46],Guatemala:[19.5,52],Honduras:[20.5,53],"El Salvador":[19.5,53.5],Nicaragua:[20.8,54.5],"Costa Rica":[21.5,57],Panama:[23,58],"Dominican Republic":[28.5,49],Colombia:[27,61],Ecuador:[25.5,64],Peru:[28,68],Bolivia:[31,71],Brazil:[35,69],Ethiopia:[58.5,55],Kenya:[59.5,60],Rwanda:[56.5,60],Burundi:[56.8,61.5],Tanzania:[58.5,63],Uganda:[57.5,58],Yemen:[60.5,51],India:[70,53],Indonesia:[79,66],"Papua New Guinea":[86,67],"East Timor":[81.5,68],Timor:[81.5,68],Hawaii:[7,49],Malawi:[58,64]};

const HARVEST=[
  {region:"Ethiopia / East Africa",color:"#D97706",peak:[10,11,0,1],arrival:[2,3,4,5]},
  {region:"Kenya",color:"#D97706",peak:[10,11,0],arrival:[2,3,4]},
  {region:"Colombia (main)",color:"#16A34A",peak:[9,10,11],arrival:[0,1,2]},
  {region:"Colombia (mitaca)",color:"#16A34A",peak:[3,4,5],arrival:[6,7,8]},
  {region:"Brazil",color:"#16A34A",peak:[4,5,6,7],arrival:[8,9,10]},
  {region:"Peru / Bolivia",color:"#16A34A",peak:[5,6,7,8],arrival:[9,10,11]},
  {region:"Guatemala / Honduras",color:"#0D9488",peak:[11,0,1,2],arrival:[3,4,5]},
  {region:"Costa Rica / Panama",color:"#0D9488",peak:[11,0,1,2],arrival:[3,4,5]},
  {region:"Indonesia (Sumatra)",color:"#4F46E5",peak:[9,10,11,0],arrival:[1,2,3]},
  {region:"PNG / India",color:"#4F46E5",peak:[3,4,5,6],arrival:[7,8,9]},
];
const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ════════ STATE ════════
let watchlist=JSON.parse(localStorage.getItem("gs_wl")||"[]");
let watchTargets=JSON.parse(localStorage.getItem("gs_targets")||"{}");
let compareList=JSON.parse(localStorage.getItem("gs_cmp")||"[]");
let landedInputs=JSON.parse(localStorage.getItem("gs_landed")||'{"freight":0.35,"duty":0.10,"storage":0.08}');
let firstSeen=JSON.parse(localStorage.getItem("gs_seen")||"{}");
let priceHist=JSON.parse(localStorage.getItem("gs_phist")||"{}");
let blend=JSON.parse(localStorage.getItem("gs_blend")||"[]");
let priceUnit=localStorage.getItem("gs_unit")||"lb";
let af={origins:[],suppliers:[],processes:[],warehouses:[],certs:[],avail:[],crop:"",maxPrice:35,scoreMin:75,scoreMax:100,spot:false,notes:false,priced:false,quote:false,sort:"price-asc",q:""};
let autoOn=true, intervalMin=15, refreshTimer=null, countdownTimer=null, nextRefresh=0, searchDebounce=null;
let currentResults=[];

const $=id=>document.getElementById(id);
const flag=o=>FLAGS[o]||"🌍";

// ════════ INIT ════════
// ════════ APP STATE (backend mode) ════════
let APP={user:null,total:0,locked:0,isPro:false,googleClientId:null};

async function loadApp(){
  // 1) who am I + google client id
  try{const me=await fetch("/api/me").then(r=>r.json());APP.user=me.user;APP.googleClientId=me.config.googleClientId;}catch(e){console.error("me",e);}
  // 2) listings (server caps free users)
  try{
    const r=await fetch("/api/listings").then(r=>r.json());
    DB=r.coffees||[];APP.total=r.total;APP.locked=r.locked;APP.isPro=r.isPro;
  }catch(e){console.error("listings",e);DB=[];}
  bootUI();
  renderAuth();
  initGoogle();
}

function bootUI(){
  const now=Date.now();
  DB.forEach(c=>{
    if(!firstSeen[c.id]) firstSeen[c.id]=now;
    if(c.price_per_lb){
      if(!priceHist[c.id]) priceHist[c.id]={prev:c.price_per_lb,cur:c.price_per_lb};
      else{priceHist[c.id].prev=priceHist[c.id].cur;priceHist[c.id].cur=c.price_per_lb;}
    }
  });
  localStorage.setItem("gs_seen",JSON.stringify(firstSeen));
  localStorage.setItem("gs_phist",JSON.stringify(priceHist));
  const safe=(fn,label)=>{try{fn()}catch(e){console.error('GreenSource init ['+label+']:',e)}};
  safe(loadCalcDefaults,'calc');safe(buildFilters,'filters');safe(parseURL,'url');safe(buildBlend,'blend');
  safe(applyFilters,'browse');safe(renderSuppliers,'suppliers');safe(renderCompare,'compare');safe(renderWatchlist,'watchlist');
  safe(renderMap,'origins');safe(renderCalendar,'calendar');safe(calcCost,'calcCost');safe(updateBadges,'badges');
  safe(checkPriceAlerts,'alerts');safe(startAuto,'auto');
  $("gSearch").addEventListener("input",e=>{clearTimeout(searchDebounce);$("searchSpin").classList.add("on");searchDebounce=setTimeout(()=>{semanticSearch(e.target.value);$("searchSpin").classList.remove("on");},300);});
}

// ════════ GOOGLE SIGN-IN ════════
function initGoogle(){
  if(APP.user||!APP.googleClientId||!window.google||!google.accounts)return;
  try{
    google.accounts.id.initialize({client_id:APP.googleClientId,callback:onGoogleCredential});
    const slot=$("gsiButton");
    if(slot){slot.innerHTML="";google.accounts.id.renderButton(slot,{theme:"outline",size:"medium",text:"signin_with",shape:"pill"});}
  }catch(e){console.error("gis",e);}
}
async function onGoogleCredential(resp){
  try{
    const r=await fetch("/api/auth/google",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({credential:resp.credential})});
    if(!r.ok)throw new Error("auth failed");
    location.reload();
  }catch(e){toast("Sign-in failed, try again");}
}
async function signOut(){await fetch("/api/auth/logout",{method:"POST"});location.reload();}

function renderAuth(){
  const el=$("authArea");if(!el)return;
  if(APP.user){
    const badge=APP.isPro?'<span class="pro-badge">PRO</span>':'';
    el.innerHTML=`<div class="acct">${APP.user.picture?`<img class="acct-pic" src="${APP.user.picture}" referrerpolicy="no-referrer">`:''}<span class="acct-name">${(APP.user.name||APP.user.email||'Account').split(' ')[0]}</span>${badge}<button class="acct-btn" onclick="acctMenu()">▾</button></div>`;
  }else{
    el.innerHTML=`<div id="gsiButton"></div>`;
  }
}
function acctMenu(){
  if(APP.isPro){if(confirm("Manage your subscription / billing?"))openPortal();}
  else{if(confirm("Sign out?"))signOut();}
}
async function openPortal(){try{const r=await fetch("/api/billing/portal").then(r=>r.json());if(r.url)location.href=r.url;else signOut();}catch(e){signOut();}}

// ════════ PAYWALL ════════
function openPaywall(reason){
  const m=$("paywallModal");if(!m)return;
  $("pwReason").textContent=reason||"Unlock the full GreenSource catalog and tools.";
  $("pwAuthNote").style.display=APP.user?"none":"block";
  m.classList.add("open");
}
function closePaywall(e){if(!e||e.target===$("paywallModal"))$("paywallModal").classList.remove("open");}
async function checkout(plan){
  if(!APP.user){openPaywall("Please sign in with Google first — then choose a plan.");toast("Sign in first");return;}
  try{
    const r=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plan})});
    const j=await r.json();
    if(j.url)location.href=j.url;else toast("Could not start checkout");
  }catch(e){toast("Checkout error");}
}

document.addEventListener("DOMContentLoaded",()=>{
  loadApp();
});
// legacy inline-init (unused in backend mode)
function __legacyInit(){
  const now=Date.now();
  DB.forEach(c=>{
    if(!firstSeen[c.id]) firstSeen[c.id]=now;
    if(c.price_per_lb){
      if(!priceHist[c.id]) priceHist[c.id]={prev:c.price_per_lb,cur:c.price_per_lb};
      else{priceHist[c.id].prev=priceHist[c.id].cur;priceHist[c.id].cur=c.price_per_lb;}
    }
  });
  localStorage.setItem("gs_seen",JSON.stringify(firstSeen));
  localStorage.setItem("gs_phist",JSON.stringify(priceHist));

  // Each render wrapped so one failure can't blank the whole app
  const safe=(fn,label)=>{try{fn()}catch(e){console.error('GreenSource init ['+label+']:',e)}};
  safe(loadCalcDefaults,'calc');
  safe(buildFilters,'filters');
  safe(parseURL,'url');
  safe(buildBlend,'blend');
  safe(applyFilters,'browse');
  safe(renderSuppliers,'suppliers');
  safe(renderCompare,'compare');
  safe(renderWatchlist,'watchlist');
  safe(renderMap,'origins');
  safe(renderCalendar,'calendar');
  safe(calcCost,'calcCost');
  safe(updateBadges,'badges');
  safe(checkPriceAlerts,'alerts');
  safe(startAuto,'auto');

  $("gSearch").addEventListener("input",e=>{
    clearTimeout(searchDebounce);
    $("searchSpin").classList.add("on");
    searchDebounce=setTimeout(()=>{semanticSearch(e.target.value);$("searchSpin").classList.remove("on");},300);
  });
}

// ════════ TABS ════════
function goTab(name){
  document.querySelectorAll(".tc").forEach(e=>e.classList.remove("active"));
  document.querySelectorAll(".tab,.bn-btn").forEach(e=>e.classList.remove("active"));
  $("tc-"+name).classList.add("active");
  document.querySelectorAll(`[data-tab="${name}"]`).forEach(e=>e.classList.add("active"));
  const mo=$("menuOverlay");if(mo)mo.classList.remove("open");
  if(name==="watchlist")renderWatchlist();
  if(name==="compare")renderCompare();
  if(name==="map")renderMap();
  if(name==="calendar")renderCalendar();
  if(name==="calculator")enterCalc();
  window.scrollTo({top:0,behavior:"smooth"});
}
function toggleSearch(){$("searchWrap").classList.toggle("collapsed");if(!$("searchWrap").classList.contains("collapsed"))$("gSearch").focus();}
function toggleMenu(){$("menuOverlay").classList.toggle("open")}
function closeMenu(e){if(!e||e.target===$("menuOverlay")||(e.currentTarget&&e.currentTarget.className==='menu-close'))$("menuOverlay").classList.remove("open")}

// ════════ FILTERS ════════
function buildFilters(){
  const sup=[...new Set(DB.map(c=>c.supplier))].sort();
  const ori=[...new Set(DB.map(c=>c.origin).filter(Boolean))].sort();
  const pro=[...new Set(DB.map(c=>c.process).filter(Boolean))].sort();
  const war=[...new Set(DB.map(c=>c.warehouse).filter(Boolean))].sort();
  const crops=[...new Set(DB.map(c=>c.crop_year).filter(Boolean))].sort().reverse();
  $("supF").innerHTML=sup.map(s=>`<button class="chip" data-f="suppliers" data-v="${esc(s)}" onclick="toggleChip(this)">${s}</button>`).join("");
  $("originF").innerHTML=ori.map(o=>`<button class="chip" data-f="origins" data-v="${esc(o)}" onclick="toggleChip(this)">${flag(o)} ${o}</button>`).join("");
  $("processF").innerHTML=pro.map(p=>`<button class="chip" data-f="processes" data-v="${esc(p)}" onclick="toggleChip(this)">${p}</button>`).join("");
  $("warehouseF").innerHTML=war.map(w=>`<button class="chip" data-f="warehouses" data-v="${esc(w)}" onclick="toggleChip(this)">📍 ${w}</button>`).join("");
  $("cropSel").innerHTML='<option value="">Any year</option>'+crops.map(c=>`<option value="${esc(c)}">${c}</option>`).join("");
}
function esc(s){return String(s).replace(/"/g,"&quot;")}
function toggleChip(btn){
  const f=btn.dataset.f,v=btn.dataset.v;
  btn.classList.toggle("on");
  af[f]=af[f].includes(v)?af[f].filter(x=>x!==v):[...af[f],v];
  applyFilters();
}
function updPL(){af.maxPrice=+$("priceR").value;$("priceL").textContent=af.maxPrice>=35?"Any":"$"+af.maxPrice}
function updScore(){
  let mn=+$("scoreMin").value,mx=+$("scoreMax").value;
  if(mn>mx){[mn,mx]=[mx,mn];$("scoreMin").value=mn;$("scoreMax").value=mx;}
  af.scoreMin=mn;af.scoreMax=mx;
  $("scoreMinL").textContent=mn;$("scoreMaxL").textContent=mx;
  const p=x=>((x-75)/25)*100;
  $("scoreFill").style.left=p(mn)+"%";$("scoreFill").style.width=(p(mx)-p(mn))+"%";
}
function readChecks(){
  af.certs=[...document.querySelectorAll(".certChk:checked")].map(c=>c.value);
  af.crop=$("cropSel").value;
  af.spot=$("fSpot").checked;af.notes=$("fNotes").checked;
  af.priced=$("fPriced").checked;af.quote=$("fQuote").checked;
  af.sort=$("sortSel").value;
}
function applyFilters(){
  readChecks();
  let res=DB.filter(c=>{
    if(af.suppliers.length&&!af.suppliers.includes(c.supplier))return false;
    if(af.origins.length&&!af.origins.includes(c.origin))return false;
    if(af.processes.length&&!af.processes.includes(c.process))return false;
    if(af.warehouses.length&&!af.warehouses.includes(c.warehouse))return false;
    if(af.avail.length){const isAvail=c.availability_type==="Spot"||c.availability_type==="In Stock";const wantAvail=af.avail.includes("available"),wantUnavail=af.avail.includes("unavailable");if(wantAvail&&!wantUnavail&&!isAvail)return false;if(wantUnavail&&!wantAvail&&isAvail)return false;}
    if(af.maxPrice<35&&c.price_per_lb&&c.price_per_lb>af.maxPrice)return false;
    if((af.scoreMin>75||af.scoreMax<100)){ if(!c.cup_score||c.cup_score<af.scoreMin||c.cup_score>af.scoreMax)return false; }
    if(af.certs.length&&!af.certs.every(ct=>(c.certifications||[]).includes(ct)))return false;
    if(af.crop&&c.crop_year!==af.crop)return false;
    if(af.spot&&c.availability_type!=="Spot")return false;
    if(af.notes&&!c.tasting_notes)return false;
    if(af.priced&&c.needs_quote)return false;
    if(af.quote&&!c.needs_quote)return false;
    return true;
  });
  if(af.q)res=filterByQuery(res,af.q);
  res.sort(sortFn);
  currentResults=res;
  renderLimit=PAGE_SIZE;
  $("rCount").innerHTML=`Showing <strong>${Math.min(res.length,renderLimit)}</strong> of ${res.length} matches`;
  renderCards(res);
  renderLockedBanner();
  syncURL();
}
function sortFn(a,b){
  const s=af.sort;
  if(s==="price-asc")return (a.price_per_lb||9999)-(b.price_per_lb||9999);
  if(s==="price-desc")return (b.price_per_lb||0)-(a.price_per_lb||0);
  if(s==="name")return a.name.localeCompare(b.name);
  if(s==="score")return (b.cup_score||0)-(a.cup_score||0);
  if(s==="qty")return (b.qty_bags||0)-(a.qty_bags||0);
  if(s==="new")return (firstSeen[b.id]||0)-(firstSeen[a.id]||0);
  return 0;
}
function resetAll(){
  af={origins:[],suppliers:[],processes:[],warehouses:[],certs:[],avail:[],crop:"",maxPrice:35,scoreMin:75,scoreMax:100,spot:false,notes:false,priced:false,quote:false,sort:"price-asc",q:""};
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("on"));
  document.querySelectorAll(".certChk").forEach(c=>c.checked=false);
  $("priceR").value=35;$("scoreMin").value=75;$("scoreMax").value=100;
  $("cropSel").value="";$("fSpot").checked=$("fNotes").checked=$("fPriced").checked=$("fQuote").checked=false;
  $("sortSel").value="price-asc";$("gSearch").value="";
  updPL();updScore();hideAI();
  history.replaceState(null,"",location.pathname);
  applyFilters();
}

// ════════ URL SYNC ════════
function syncURL(){
  const p=new URLSearchParams();
  if(af.origins.length)p.set("origin",af.origins.join(","));
  if(af.suppliers.length)p.set("supplier",af.suppliers.join(","));
  if(af.processes.length)p.set("process",af.processes.join(","));
  if(af.warehouses.length)p.set("wh",af.warehouses.join(","));
  if(af.avail.length)p.set("avail",af.avail.join(","));
  if(af.certs.length)p.set("cert",af.certs.join(","));
  if(af.crop)p.set("crop",af.crop);
  if(af.maxPrice<35)p.set("maxp",af.maxPrice);
  if(af.scoreMin>75)p.set("smin",af.scoreMin);
  if(af.scoreMax<100)p.set("smax",af.scoreMax);
  if(af.spot)p.set("spot","1");if(af.notes)p.set("notes","1");
  if(af.priced)p.set("priced","1");if(af.quote)p.set("quote","1");
  if(af.sort!=="price-asc")p.set("sort",af.sort);
  if(af.q)p.set("q",af.q);
  const s=p.toString();
  history.replaceState(null,"",s?"?"+s:location.pathname);
}
function parseURL(){
  const p=new URLSearchParams(location.search);
  if(p.get("origin"))af.origins=p.get("origin").split(",");
  if(p.get("supplier"))af.suppliers=p.get("supplier").split(",");
  if(p.get("process"))af.processes=p.get("process").split(",");
  if(p.get("wh"))af.warehouses=p.get("wh").split(",");
  if(p.get("avail"))af.avail=p.get("avail").split(",");
  if(p.get("cert"))af.certs=p.get("cert").split(",");
  if(p.get("crop"))af.crop=p.get("crop");
  if(p.get("maxp"))af.maxPrice=+p.get("maxp");
  if(p.get("smin"))af.scoreMin=+p.get("smin");
  if(p.get("smax"))af.scoreMax=+p.get("smax");
  af.spot=p.get("spot")==="1";af.notes=p.get("notes")==="1";
  af.priced=p.get("priced")==="1";af.quote=p.get("quote")==="1";
  if(p.get("sort"))af.sort=p.get("sort");
  if(p.get("q"))af.q=p.get("q");
  if(p.get("cmp"))compareList=p.get("cmp").split(",").filter(id=>DB.find(c=>c.id===id));
  // reflect into UI
  document.querySelectorAll(".chip").forEach(ch=>{if(af[ch.dataset.f]&&af[ch.dataset.f].includes(ch.dataset.v))ch.classList.add("on")});
  document.querySelectorAll(".certChk").forEach(c=>{if(af.certs.includes(c.value))c.checked=true});
  if(af.crop)$("cropSel").value=af.crop;
  $("priceR").value=af.maxPrice;$("scoreMin").value=af.scoreMin;$("scoreMax").value=af.scoreMax;
  $("fSpot").checked=af.spot;$("fNotes").checked=af.notes;$("fPriced").checked=af.priced;$("fQuote").checked=af.quote;
  $("sortSel").value=af.sort;$("gSearch").value=af.q;
  updPL();updScore();
}
function shareView(){copyLink(location.href,"View link copied!")}

// ════════ SEMANTIC SEARCH (local) ════════
function semanticSearch(val){
  af.q=val.trim();
  if(!af.q){hideAI();applyFilters();return}
  applyFilters();
  // build AI-style explainer
  const expanded=expandQuery(af.q.toLowerCase());
  if(expanded.terms.length){
    showAI(`Showing <strong>${currentResults.length}</strong> matches for "<strong>${af.q}</strong>" — also matching related notes: <em>${expanded.terms.slice(0,6).join(", ")}</em>`);
  } else hideAI();
}
function expandQuery(q){
  let terms=[],maxPrice=null,minScore=null,origins=[],procs=[];
  const pm=q.match(/under\s*\$?([\d.]+)/);if(pm)maxPrice=+pm[1];
  const sm=q.match(/(\d{2,3})\+/)||q.match(/(?:over|above|score|scoring)\s+(\d{2,3})/);if(sm)minScore=+sm[1];
  Object.keys(FLAGS).forEach(o=>{if(q.includes(o.toLowerCase()))origins.push(o)});
  ["washed","natural","honey","anaerobic","wet-hull","carbonic","pulped"].forEach(p=>{if(q.includes(p))procs.push(p)});
  // flavor association expansion
  Object.keys(FLAVOR_ASSOC).forEach(k=>{if(q.includes(k))terms.push(...FLAVOR_ASSOC[k])});
  // also include raw words
  q.split(/\s+/).filter(w=>w.length>3&&!["under","over","with","that","like","tastes","something","coffee","coffees","find"].includes(w)).forEach(w=>terms.push(w));
  return {terms:[...new Set(terms)],maxPrice,minScore,origins,procs};
}
function filterByQuery(list,q){
  const e=expandQuery(q.toLowerCase());
  let scored=list.map(c=>{
    let score=0;
    const hay=[c.name,c.origin,c.region,c.process,c.variety,c.tasting_notes,(c.certifications||[]).join(" ")].filter(Boolean).join(" ").toLowerCase();
    e.terms.forEach(t=>{if(hay.includes(t))score+=hay.includes(c.tasting_notes?.toLowerCase()?.includes(t)?t:"___")?2:1});
    e.terms.forEach(t=>{if((c.tasting_notes||"").toLowerCase().includes(t))score+=2});
    if(e.origins.length&&e.origins.includes(c.origin))score+=3;
    if(e.procs.length&&e.procs.some(p=>(c.process||"").toLowerCase().includes(p.replace("-hull","-hull"))))score+=2;
    if(e.maxPrice&&c.price_per_lb&&c.price_per_lb<=e.maxPrice)score+=2;
    if(e.maxPrice&&c.price_per_lb&&c.price_per_lb>e.maxPrice)score-=5;
    if(e.minScore&&c.cup_score&&c.cup_score>=e.minScore)score+=2;
    return {c,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  if(!scored.length){ // fallback plain text
    return list.filter(c=>[c.name,c.origin,c.tasting_notes,c.variety].filter(Boolean).join(" ").toLowerCase().includes(q.toLowerCase()));
  }
  return scored.map(x=>x.c);
}
function showAI(h){$("aiBox").classList.add("show");$("aiMsg").innerHTML=h}
function hideAI(){$("aiBox").classList.remove("show")}

// ════════ RENDER CARDS (paginated for performance) ════════
const PAGE_SIZE=48;
let renderLimit=PAGE_SIZE;
function togglePriceUnit(){priceUnit=priceUnit==="lb"?"kg":"lb";localStorage.setItem("gs_unit",priceUnit);$("unitBtn").textContent="$/"+priceUnit;applyFilters()}
function fmtPrice(perLb){
  if(!perLb)return null;
  const v=priceUnit==="kg"?perLb*2.20462:perLb;
  return "$"+v.toFixed(2)+" <span class='price-unit'>/"+priceUnit+"</span>";
}
function daysSince(id){const d=firstSeen[id];if(!d)return null;return Math.floor((Date.now()-d)/86400000)}
function renderCards(list){
  const g=$("coffeeGrid");
  if(!list.length){g.innerHTML=`<div class="no-results"><div style="font-size:2.5rem">☕</div><p style="font-weight:700;margin-top:8px">No listings match</p><p style="font-size:.82rem;margin-top:4px">Try adjusting filters or search</p></div>`;return}
  const shown=list.slice(0,renderLimit);
  g.innerHTML=shown.map(c=>{
    const inW=watchlist.includes(c.id),inC=compareList.includes(c.id);
    const grad=GRAD[c.origin]||GRAD.Blend;
    const ds=daysSince(c.id);const isNew=ds!==null&&ds<=7;
    const ph=priceHist[c.id];let pdir="";
    if(ph&&ph.cur<ph.prev)pdir=`<span class="pdir down">▼</span>`;
    else if(ph&&ph.cur>ph.prev)pdir=`<span class="pdir up">▲</span>`;
    const dotc=c.availability_type==="Spot"?"d-in":c.availability_type==="Forward Contract"?"d-fwd":"d-out";
    const priceHTML=c.price_per_lb?`<div class="price">${fmtPrice(c.price_per_lb)}${pdir}</div>`:`<div class="price-quote">💬 Quote required</div>`;
    const notes=(c.tasting_notes||"").split(/[,;]/).map(s=>s.trim()).filter(Boolean).slice(0,4);
    const lotLbs=c.lot_lbs?`${c.lot_lbs.toLocaleString()} lb`:(c.qty_bags?`${c.qty_bags} bags`:(c.bag_size_lbs?"Per lb":"—"));
    return `<div class="card" id="card-${c.id}">
  <div class="card-badges">
    ${isNew?'<span class="badge b-new">🆕 New</span>':''}
    ${(c.sources&&c.sources.length>1)?'<span class="badge b-multi">'+c.sources.length+' sources</span>':''}
    ${c.availability_type==="Forward Contract"?'<span class="badge b-fwd">📅 Forward</span>':''}
    ${c.needs_quote?'<span class="badge b-quote">💬 Quote</span>':(c.availability_type==="Spot"?'<span class="badge b-spot">✅ Spot</span>':'')}
  </div>
  <div class="card-actions"><button class="ibtn" onclick="toggleWL('${c.id}')" id="wb-${c.id}">${inW?"❤️":"🤍"}</button></div>
  <div class="card-banner" style="background:${grad}"><div class="card-banner-ov"></div><span class="card-banner-flag">${flag(c.origin)}</span><div class="region-stripe" style="background:${REGION_COLOR[c.region_group]||"#6B7280"}"></div></div>
  <div class="card-body">
    <div class="card-name">${c.name}</div>
    <div class="card-origin">${flag(c.origin)} ${c.origin||"—"}${c.region?" · "+c.region:""}</div>
    <div class="tags">
      ${c.process?`<span class="tag t-proc">${c.process}</span>`:""}
      ${c.variety?`<span class="tag t-var">${c.variety.split(",")[0].trim()}</span>`:""}
      ${(c.certifications||[]).map(ct=>`<span class="cert-pill">${ct}</span>`).join("")}
    </div>
    ${notes.length?`<div class="tags">${notes.map(n=>`<span class="tag t-note">${n}</span>`).join("")}</div>`:""}
    <div class="specs">
      <span>Cup score: <b>${c.cup_score?c.cup_score.toFixed(1):"—"}</b></span>
      <span>Crop: <b>${c.crop_year||"—"}</b></span>
      <span>Altitude: <b>${c.altitude||"—"}</b></span>
      <span>Lot: <b>${lotLbs}</b></span>
      <span>📍 <b>${c.warehouse||"—"}</b></span>
      <span>Added: <b>${ds!==null?(ds===0?"today":ds+"d ago"):"—"}</b></span>
    </div>
    <div class="card-meta">
      <div>${priceHTML}<div style="font-size:.65rem;color:var(--muted);margin-top:2px">${c.supplier}</div></div>
      <div style="text-align:right">${c.cup_score?`<div class="score-pill">⭐ ${c.cup_score.toFixed(1)}</div>`:""}</div>
    </div>
  </div>
  <div class="card-footer">
    <div class="avail"><span class="dot ${dotc}"></span>${c.availability_type||"—"}</div>
    ${c.price_per_lb?`<button class="fbtn" onclick="sendToCalc(${c.price_per_lb})" title="Send to calculator">🧮</button>`:""}
    <button class="fbtn ${inC?"on":""}" onclick="toggleCmp('${c.id}')" id="cb-${c.id}">${inC?"✓":"⚖️"}</button>
    <a class="viewbtn" href="${c.url}" target="_blank" rel="noopener">View ↗</a>
  </div>
</div>`;
  }).join("")+(list.length>renderLimit?`<div style="grid-column:1/-1;text-align:center;padding:16px"><button class="btn btn-g" onclick="loadMore()">Load more — ${list.length-renderLimit} more listings</button></div>`:"");
}
function loadMore(){renderLimit+=PAGE_SIZE;renderCards(currentResults);}

// ════════ WATCHLIST ════════
function toggleWL(id){
  watchlist=watchlist.includes(id)?watchlist.filter(x=>x!==id):[...watchlist,id];
  localStorage.setItem("gs_wl",JSON.stringify(watchlist));
  updateBadges();const b=$("wb-"+id);if(b)b.textContent=watchlist.includes(id)?"❤️":"🤍";
  toast(watchlist.includes(id)?"❤️ Added to watchlist":"Removed");
  if($("tc-watchlist").classList.contains("active"))renderWatchlist();
}
function setTarget(id,val){watchTargets[id]=parseFloat(val)||null;localStorage.setItem("gs_targets",JSON.stringify(watchTargets));renderWatchlist();checkPriceAlerts();}
function renderWatchlist(){
  const body=$("wlBody");
  if(!watchlist.length){body.innerHTML=`<div class="wl-empty"><div style="font-size:3rem">🤍</div><p style="font-weight:700;margin-top:10px">Watchlist empty</p><p style="font-size:.82rem;margin-top:4px;color:var(--muted)">Tap 🤍 on any listing to track price</p></div>`;return}
  const items=DB.filter(c=>watchlist.includes(c.id));
  body.innerHTML=`<div style="overflow-x:auto"><table class="wl-table">
  <thead><tr><th>Coffee</th><th>Supplier</th><th>Current</th><th>Target $/lb</th><th>Status</th><th></th></tr></thead><tbody>
  ${items.map(c=>{
    const t=watchTargets[c.id];const cur=c.price_per_lb;
    let status="—";
    if(cur&&t){const d=(cur-t);status=cur<=t?`<span class="delta-hit">🎯 At/below target!</span>`:`<span class="delta-up">+$${d.toFixed(2)} above</span>`}
    else if(!cur)status='<span style="color:#6D28D9">Quote only</span>';
    return `<tr>
      <td><b>${flag(c.origin)} ${c.name}</b><br><span style="font-size:.72rem;color:var(--muted)">${c.process||""}${c.tasting_notes?" · "+c.tasting_notes.slice(0,40):""}</span></td>
      <td>${c.supplier}</td>
      <td>${cur?"$"+cur.toFixed(2):"—"}</td>
      <td><input type="number" step="0.25" value="${t||""}" placeholder="set" onchange="setTarget('${c.id}',this.value)"></td>
      <td>${status}</td>
      <td><a class="viewbtn" href="${c.url}" target="_blank" rel="noopener">View ↗</a> <button class="rmbtn" style="width:auto;padding:4px 8px" onclick="toggleWL('${c.id}')">✕</button></td>
    </tr>`}).join("")}
  </tbody></table></div>`;
}
function clearWatchlist(){watchlist=[];localStorage.setItem("gs_wl","[]");updateBadges();renderWatchlist();applyFilters()}
function checkPriceAlerts(){
  const hits=DB.filter(c=>watchlist.includes(c.id)&&c.price_per_lb&&watchTargets[c.id]&&c.price_per_lb<=watchTargets[c.id]);
  const el=$("wlAlerts");
  if(hits.length){el.innerHTML=`<div class="alert-banner">🔔 ${hits.length} watchlisted coffee${hits.length>1?"s":""} hit your target price: ${hits.map(h=>h.name.split(" ").slice(0,3).join(" ")).join(", ")}</div>`}
  else el.innerHTML="";
  return hits.length;
}

// ════════ COMPARE ════════
function toggleCmp(id){
  if(compareList.includes(id))compareList=compareList.filter(x=>x!==id);
  else{if(compareList.length>=4){toast("Max 4 in comparison");return}compareList.push(id)}
  localStorage.setItem("gs_cmp",JSON.stringify(compareList));
  updateBadges();const b=$("cb-"+id);if(b){b.textContent=compareList.includes(id)?"✓":"⚖️";b.classList.toggle("on",compareList.includes(id))}
  toast(compareList.includes(id)?"⚖️ Added to compare":"Removed");
  if($("tc-compare").classList.contains("active"))renderCompare();
}
function renderCompare(){
  const body=$("compareBody");
  if(!compareList.length){body.innerHTML=`<div class="cmp-empty"><div style="font-size:3rem">⚖️</div><p style="font-weight:700;margin-top:10px">Add coffees to compare</p><p style="font-size:.82rem;color:var(--muted)">Click ⚖️ on cards — up to 4</p></div>`;return}
  const items=DB.filter(c=>compareList.includes(c.id));
  const F=parseFloat($("landedFreight")?.value)||landedInputs.freight;
  const prices=items.map(c=>c.price_per_lb).filter(Boolean);const minP=prices.length?Math.min(...prices):null;
  const calc=getCalc();
  const landedOf=c=>c.price_per_lb?c.price_per_lb+landedInputs.freight+landedInputs.duty+landedInputs.storage:null;
  const roastOf=c=>{const l=landedOf(c);if(!l)return null;return (l/(1-calc.shrink/100))+calc.labor+calc.over};
  const retailOf=c=>{const r=roastOf(c);if(!r)return null;return (r*(12/16)+calc.pack)/(1-calc.margin/100)};
  const lands=items.map(landedOf).filter(v=>v!=null);const minL=lands.length?Math.min(...lands):null;
  const row=(label,fn)=>`<tr><td>${label}</td>${items.map(fn).join("")}</tr>`;
  body.innerHTML=`<div style="padding:14px 18px;border-bottom:1px solid var(--border);display:flex;gap:14px;flex-wrap:wrap;align-items:center;font-size:.78rem">
    <b>Landed cost inputs:</b>
    <label>Freight $/lb <input type="number" step="0.01" id="landedFreight" value="${landedInputs.freight}" oninput="updLanded()"></label>
    <label>Duty $/lb <input type="number" step="0.01" id="landedDuty" value="${landedInputs.duty}" oninput="updLanded()"></label>
    <label>Storage $/lb <input type="number" step="0.01" id="landedStorage" value="${landedInputs.storage}" oninput="updLanded()"></label>
  </div>
  <div style="overflow-x:auto"><table class="cmp-table"><thead><tr><th>Attribute</th>${items.map(c=>`<th>${flag(c.origin)} ${c.name.split(" ").slice(0,4).join(" ")}</th>`).join("")}</tr></thead><tbody>
  ${row("Supplier",c=>`<td>${c.supplier}</td>`)}
  ${row("Origin",c=>`<td>${flag(c.origin)} ${c.origin||"—"}</td>`)}
  ${row("Region",c=>`<td>${c.region||"—"}</td>`)}
  ${row("Process",c=>`<td>${c.process?`<span class="tag t-proc">${c.process}</span>`:"—"}</td>`)}
  ${row("Variety",c=>`<td>${c.variety||"—"}</td>`)}
  ${row("Cup score",c=>`<td>${c.cup_score?c.cup_score.toFixed(1):"—"}</td>`)}
  ${row("Crop year",c=>`<td>${c.crop_year||"—"}</td>`)}
  ${row("Altitude",c=>`<td>${c.altitude||"—"}</td>`)}
  ${row("Certs",c=>`<td>${(c.certifications||[]).join(", ")||"—"}</td>`)}
  ${row("Warehouse",c=>`<td>${c.warehouse||"—"}</td>`)}
  ${row("Price/lb",c=>`<td class="${c.price_per_lb===minP?"best":""}">${c.price_per_lb?"$"+c.price_per_lb.toFixed(2):"💬 Quote"}</td>`)}
  ${row("Landed/lb",c=>{const l=landedOf(c);return `<td class="${l===minL?"best":""}">${l?"$"+l.toFixed(2):"—"}</td>`})}
  ${row("Est. roast cost/lb",c=>{const r=roastOf(c);return `<td>${r?"$"+r.toFixed(2):"—"}</td>`})}
  ${row("Suggested retail (12oz)",c=>{const r=retailOf(c);return `<td>${r?"$"+r.toFixed(2):"—"}</td>`})}
  ${row("Tasting notes",c=>`<td style="font-size:.74rem;color:var(--muted)">${c.tasting_notes||"—"}</td>`)}
  ${row("Link",c=>`<td><a class="viewbtn" href="${c.url}" target="_blank" rel="noopener">View ↗</a></td>`)}
  </tbody></table></div>`;
}
function updLanded(){landedInputs={freight:parseFloat($("landedFreight").value)||0,duty:parseFloat($("landedDuty").value)||0,storage:parseFloat($("landedStorage").value)||0};localStorage.setItem("gs_landed",JSON.stringify(landedInputs));renderCompare();}
function clearCompare(){compareList=[];localStorage.setItem("gs_cmp","[]");updateBadges();renderCompare();document.querySelectorAll(".fbtn.on").forEach(b=>{if(b.id.startsWith("cb-")){b.textContent="⚖️";b.classList.remove("on")}})}
function exportCSV(){
  if(!compareList.length){toast("Add coffees first");return}
  const items=DB.filter(c=>compareList.includes(c.id));
  const cols=["name","supplier","origin","region","process","variety","cup_score","crop_year","altitude","price_per_lb","warehouse","tasting_notes","url"];
  let csv=cols.join(",")+"\n";
  items.forEach(c=>{csv+=cols.map(k=>`"${String(c[k]??"").replace(/"/g,'""')}"`).join(",")+"\n"});
  const blob=new Blob([csv],{type:"text/csv"});const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download="greensource-compare.csv";a.click();toast("⬇️ CSV downloaded");
}
function shareCompare(){if(!compareList.length){toast("Add coffees first");return}const u=location.origin+location.pathname+"?cmp="+compareList.join(",");copyLink(u,"Compare link copied!")}
function copyLink(u,msg){navigator.clipboard?.writeText(u).then(()=>toast("🔗 "+msg)).catch(()=>{prompt("Copy link:",u)})}

// ════════ CALCULATOR ════════
function loadCalcDefaults(){
  const s=JSON.parse(localStorage.getItem("gs_calc")||"{}");
  $("cGreen").value=s.green??4.50;$("cShrink").value=s.shrink??15;$("cPack").value=s.pack??0.85;
  $("cLabor").value=s.labor??0.50;$("cOver").value=s.over??1.00;$("cMargin").value=s.margin??60;
}
function saveCalc(){localStorage.setItem("gs_calc",JSON.stringify(getCalc()))}
function getCalc(){return{green:+$("cGreen").value||0,shrink:+$("cShrink").value||15,pack:+$("cPack").value||0,labor:+$("cLabor").value||0,over:+$("cOver").value||0,margin:+$("cMargin").value||0}}
function sendToCalc(price){$("cGreen").value=price.toFixed(2);saveCalc();calcCost();goTab("calculator");toast("🧮 Green price sent to calculator")}
// Locked-beans upgrade banner (free tier)
function renderLockedBanner(){
  const el=$("lockedBanner");if(!el)return;
  if(APP.locked>0){el.classList.add("show");el.innerHTML=`🔓 <b>${APP.locked}</b> more specialty coffees are locked. <u>Upgrade to GreenSource Pro</u> to unlock the full catalog →`;}
  else el.classList.remove("show");
}
// Calculator gating (free = ${FREE} uses). Consumes one use per visit to the tab.
let calcVisitConsumed=false;
async function enterCalc(){
  if(APP.isPro){setCalcLock(false);return;}
  if(!APP.user){setCalcLock(true);openPaywall("Sign in with Google to use the cost calculator (2 free uses).");return;}
  if(calcVisitConsumed){return;}
  try{
    const r=await fetch("/api/calc/use",{method:"POST"});
    if(r.status===402){setCalcLock(true);openPaywall("You've used your 2 free calculator runs. Upgrade for unlimited access.");return;}
    const j=await r.json();
    calcVisitConsumed=true;setCalcLock(false);
    if(j.usesLeft!=null)toast(`🧮 ${j.usesLeft} free calculator use${j.usesLeft===1?"":"s"} left`);
  }catch(e){setCalcLock(false);}
}
function setCalcLock(locked){const t=$("tc-calculator");if(t)t.classList.toggle("calc-locked",locked);}
function calcCost(){
  const c=getCalc();const bags=[8,12,16,32,80];
  const cpl=(c.green/(1-c.shrink/100))+c.labor+c.over;
  let h=`<thead><tr><th>Per bag size →</th>${bags.map(b=>`<th>${b<16?b+"oz":(b/16)+"lb"}</th>`).join("")}</tr></thead><tbody>`;
  const rows=[
    ["Cost/lb roasted",()=>"$"+cpl.toFixed(2)],
    ["Cost per bag",b=>"$"+(cpl*(b/16)+c.pack).toFixed(2)],
    ["Suggested retail",b=>"$"+((cpl*(b/16)+c.pack)/(1-c.margin/100)).toFixed(2)],
    ["Profit per bag",b=>{const cost=cpl*(b/16)+c.pack;const ret=cost/(1-c.margin/100);return "$"+(ret-cost).toFixed(2)}],
    ["Margin",b=>c.margin+"%"],
  ];
  rows.forEach((r,i)=>{h+=`<tr class="${i===2?"hl-row":""}"><td>${r[0]}</td>${bags.map(b=>`<td>${typeof r[1]==="function"?r[1](b):r[1]}</td>`).join("")}</tr>`});
  h+="</tbody>";$("calcTable").innerHTML=h;
}
// Blend
function buildBlend(){
  if(!blend.length)blend=[{id:"",pct:100}];
  renderBlend();
}
function renderBlend(){
  const priced=DB.filter(c=>c.price_per_lb).sort((a,b)=>a.name.localeCompare(b.name));
  $("blendRows").innerHTML=blend.map((b,i)=>`<div class="blend-row">
    <select onchange="setBlend(${i},'id',this.value)"><option value="">— select coffee —</option>${priced.map(c=>`<option value="${c.id}" ${b.id===c.id?"selected":""}>${c.name} ($${c.price_per_lb.toFixed(2)})</option>`).join("")}</select>
    <input type="number" min="0" max="100" value="${b.pct}" onchange="setBlend(${i},'pct',this.value)" placeholder="%">
    <button class="rmbtn" onclick="rmBlend(${i})">✕</button>
  </div>`).join("");
  const total=blend.reduce((s,b)=>s+(+b.pct||0),0);
  const valid=Math.abs(total-100)<0.01;
  let cost=0,ok=true;
  blend.forEach(b=>{const c=DB.find(x=>x.id===b.id);if(c&&c.price_per_lb)cost+=c.price_per_lb*(b.pct/100);else if(b.id==="")ok=false});
  $("blendTotal").className="blend-total "+(valid?"good":"bad");
  $("blendTotal").innerHTML=`Total: ${total}% ${valid?"✓":"(must equal 100%)"}${valid&&cost>0?` · Blended green cost: <b>$${cost.toFixed(2)}/lb</b> <button class="btn btn-gold" style="padding:4px 10px;margin-left:8px" onclick="useBlend(${cost.toFixed(4)})">Use in calculator →</button>`:""}`;
  localStorage.setItem("gs_blend",JSON.stringify(blend));
}
function setBlend(i,k,v){blend[i][k]=k==="pct"?(+v||0):v;renderBlend()}
function addBlendRow(){if(blend.length>=6){toast("Max 6 components");return}blend.push({id:"",pct:0});renderBlend()}
function rmBlend(i){blend.splice(i,1);if(!blend.length)blend=[{id:"",pct:100}];renderBlend()}
function useBlend(cost){$("cGreen").value=(+cost).toFixed(2);saveCalc();calcCost();toast("🎚️ Blend cost applied")}

// ════════ ORIGINS (replaces map) ════════
function renderMap(){
  // group origins by region
  const byRegion={};
  DB.forEach(c=>{
    if(!c.origin)return;
    const rg=c.region_group||"Other";
    (byRegion[rg]=byRegion[rg]||{})[c.origin]=(byRegion[rg][c.origin]||[]);
    byRegion[rg][c.origin].push(c);
  });
  const order=["Africa","Central America","South America","Asia Pacific","Blend","Other"];
  let html="";
  order.forEach(rg=>{
    if(!byRegion[rg])return;
    const origins=Object.keys(byRegion[rg]).sort((a,b)=>byRegion[rg][b].length-byRegion[rg][a].length);
    const totLots=origins.reduce((s,o)=>s+byRegion[rg][o].length,0);
    const col=REGION_COLOR[rg]||"#6B7280";
    html+=`<div class="region-section"><div class="region-head"><span class="rdot" style="background:${col}"></span>${rg}<span class="rcnt">· ${origins.length} origins · ${totLots} lots</span></div><div class="origins-grid">`;
    origins.forEach(o=>{
      const lots=byRegion[rg][o];
      const prices=lots.map(c=>c.price_per_lb).filter(Boolean);
      const scores=lots.map(c=>c.cup_score).filter(Boolean);
      const pmin=prices.length?Math.min(...prices):null,pmax=prices.length?Math.max(...prices):null;
      const smax=scores.length?Math.max(...scores):null;
      html+=`<div class="origin-card" onclick="mapFilter('${o.replace(/'/g,"\\'")}')">
        <div class="oc-stripe" style="background:${col}"></div>
        <div class="origin-flag">${flag(o)}</div>
        <div class="origin-name">${o}</div>
        <div class="origin-meta">${prices.length?`$${pmin.toFixed(2)}–$${pmax.toFixed(2)}/lb`:"Quote only"}${smax?`<br>Top score: ⭐ ${smax.toFixed(1)}`:""}</div>
        <span class="origin-count">${lots.length} lot${lots.length>1?"s":""}</span>
      </div>`;
    });
    html+=`</div></div>`;
  });
  $("originsHolder").innerHTML=html;
}
function mapFilter(o){af.origins=[o];goTab("browse");document.querySelectorAll(".chip[data-f='origins']").forEach(ch=>ch.classList.toggle("on",ch.dataset.v===o));applyFilters();toast(`Filtered to ${flag(o)} ${o}`)}

// ════════ CALENDAR ════════
function renderCalendar(){
  const now=new Date().getMonth();
  let h=`<table class="cal-table"><thead><tr><th>Region</th>${MONTHS.map((m,i)=>`<th style="${i===now?"color:var(--green);font-weight:800":""}">${m}</th>`).join("")}</tr></thead><tbody>`;
  HARVEST.forEach(r=>{
    h+=`<tr><td>${r.region}</td>${MONTHS.map((m,i)=>{
      let cls="cal-none",bg="transparent";
      if(r.peak.includes(i)){cls="cal-peak";bg=r.color}
      else if(r.arrival.includes(i)){cls="cal-arrival";bg=r.color}
      return `<td><div class="cal-cell ${cls}" style="background:${bg}"></div></td>`}).join("")}</tr>`;
  });
  h+="</tbody></table>";$("calHolder").innerHTML=h;
}

// ════════ SUPPLIERS ════════
function renderSuppliers(){
  const counts={};DB.forEach(c=>counts[c.supplier]=(counts[c.supplier]||0)+1);
  $("supGrid").innerHTML=SUPPLIERS.map(s=>{
    const live=s.live;const cnt=counts[s.name]||0;
    return `<div class="sup-card">
    ${live?`<div class="live-badge"><span class="live-dot"></span> LIVE — ${cnt} listings</div>`:`<div class="pend-badge">⏳ PENDING — needs backend proxy</div>`}
    <div class="sup-name">${s.name}</div>
    <div class="sup-type">${s.type}</div>
    <div class="sup-tags">${s.origins.map(o=>`<span class="sup-tag">${flag(o)} ${o}</span>`).join("")}</div>
    <div class="sup-desc">${s.desc}</div>
    <a href="${s.url}" target="_blank" rel="noopener" class="sup-link">Visit ${s.name} ↗</a>
  </div>`}).join("");
}

// ════════ AUTO REFRESH ════════
function startAuto(){clearInterval(refreshTimer);clearInterval(countdownTimer);if(!autoOn){$("countdown").textContent="(paused)";return}nextRefresh=Date.now()+intervalMin*60000;refreshTimer=setInterval(doRefresh,intervalMin*60000);countdownTimer=setInterval(tickCountdown,1000);tickCountdown();}
function tickCountdown(){if(!autoOn)return;const ms=nextRefresh-Date.now();if(ms<=0){$("countdown").textContent="· refreshing…";return}const m=Math.floor(ms/60000),s=Math.floor((ms%60000)/1000);$("countdown").textContent=`· Next refresh in ${m}:${String(s).padStart(2,"0")}`}
function toggleAuto(){autoOn=!autoOn;$("autoToggle").classList.toggle("on",autoOn);startAuto()}
function setInterval2(){intervalMin=+$("intervalSel").value;startAuto()}
function manualRefresh(){doRefresh(true)}
async function doRefresh(manual){
  const btn=$("refreshBtn");btn.disabled=true;btn.textContent="🔄 …";$("syncStatus").textContent="📡 Fetching latest…";
  const before=DB.length;
  // If a live JSON feed is configured, fetch it; else re-check embedded feed.
  if(LIVE_FEED_URL){
    try{const r=await fetch(LIVE_FEED_URL);const j=await r.json();/* would merge j.coffees into DB */}catch(e){}
  }
  await new Promise(r=>setTimeout(r,900));
  // compute new since last refresh (real, from firstSeen)
  const newCount=DB.filter(c=>{const ds=daysSince(c.id);return ds!==null&&ds<1&&firstSeen[c.id]>Date.now()-intervalMin*60000}).length;
  btn.disabled=false;btn.textContent="🔄 Refresh";
  $("syncStatus").textContent="📡 Live data: Royal Coffee & Burman Coffee · synced "+new Date().toLocaleTimeString();
  nextRefresh=Date.now()+intervalMin*60000;
  checkPriceAlerts();updateBadges();
  if(manual)toast(LIVE_FEED_URL?"✅ Pulled latest feed":"✅ Re-checked — connect a backend feed for new live data");
  // demo of the new-listing banner UX (only shows if genuinely new)
  if(newCount>0){const nb=$("newBanner");nb.classList.add("show");nb.innerHTML=`✨ ${newCount} new listing${newCount>1?"s":""} since last refresh — click to view`}
}
function scrollToNew(){$("newBanner").classList.remove("show");af.sort="new";$("sortSel").value="new";applyFilters();document.querySelector(".cgrid")?.scrollIntoView({behavior:"smooth"});setTimeout(()=>{document.querySelectorAll(".card").forEach((c,i)=>{if(i<4)c.classList.add("highlight")})},300)}

// ════════ BADGES / TOAST ════════
function updateBadges(){
  [["cmpBadge",compareList.length],["cmpBadge2",compareList.length],["cmpBadge3",compareList.length],["wlBadge",watchlist.length],["wlBadge2",watchlist.length],["wlBadge3",watchlist.length]].forEach(([id,n])=>{const e=$(id);if(!e)return;e.textContent=n;if(id.endsWith("2")||id.endsWith("3"))e.style.display=n?"inline":"none";});
  const mb=(id,n)=>{const e=$(id);if(e)e.textContent=n?String(n):""};mb("cmpBadge4",compareList.length);mb("wlBadge4",watchlist.length);
}
function toast(m){const t=$("toasts");const e=document.createElement("div");e.className="toast";e.textContent=m;t.appendChild(e);setTimeout(()=>{e.style.opacity=0;e.style.transition="opacity .3s";setTimeout(()=>e.remove(),300)},2500)}

</script>
</body>
</html>