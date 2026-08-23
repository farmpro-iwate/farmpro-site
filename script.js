document.addEventListener("DOMContentLoaded", () => {
  const freeStartUrl = "https://app.farmpro-app.jp/register";
  const buttons = document.querySelectorAll('a[href="#start"], #startButton');

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = freeStartUrl;
    });
  });

  const style = document.createElement("style");
  style.textContent = `
    .desktop-mockup{overflow:hidden;padding:0!important;background:#fff!important}
    .desktop-topbar{background:#1976d2;color:#fff;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;font-size:.72rem;font-weight:800}
    .desktop-nav{display:flex;gap:13px;padding:8px 14px;border-bottom:1px solid #dce6ef;background:#f8fbff;color:#456;font-size:.54rem;font-weight:700;white-space:nowrap}
    .desktop-body{padding:15px 16px 17px;background:#fff}
    .desktop-body h3{margin:0 0 2px;font-size:.9rem;color:#1f2933}
    .desktop-body>p{margin:0 0 12px;font-size:.56rem;color:#6b7280}
    .desktop-status,.desktop-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:8px}
    .desktop-status div,.desktop-summary div{border:1px solid #dbe7f2;border-radius:8px;background:#fff;padding:8px 7px}
    .desktop-status span,.desktop-summary span{display:block;color:#6b7280;font-size:.48rem}
    .desktop-status strong,.desktop-summary strong{display:block;margin-top:2px;color:#1f2933;font-size:.72rem}
    .desktop-action{border:1px solid #8db9e8;color:#1565c0;background:#f7fbff;border-radius:8px;text-align:center;padding:6px;font-size:.52rem;font-weight:800}
    @media(max-width:560px){
      .desktop-topbar{padding:7px 9px;font-size:.52rem}
      .desktop-nav{gap:7px;padding:5px 8px;font-size:.38rem;overflow:hidden}
      .desktop-body{padding:9px 9px 10px}
      .desktop-body h3{font-size:.62rem}
      .desktop-body>p{font-size:.4rem;margin-bottom:7px}
      .desktop-status,.desktop-summary{gap:4px;margin-bottom:5px}
      .desktop-status div,.desktop-summary div{padding:5px 4px;border-radius:5px}
      .desktop-status span,.desktop-summary span{font-size:.34rem}
      .desktop-status strong,.desktop-summary strong{font-size:.49rem}
      .desktop-action{padding:4px;font-size:.36rem}
    }
  `;
  document.head.appendChild(style);
});
