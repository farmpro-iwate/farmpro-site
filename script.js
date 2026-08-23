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
    .hero-visual{padding-left:54px}
    .desktop-mockup{
      width:96%!important;
      min-height:340px;
      overflow:hidden;
      padding:0!important;
      background:#fff!important;
      border:1px solid #dbe7f2!important;
      border-radius:24px!important;
      box-shadow:0 20px 48px rgba(25,71,120,.14)!important;
      transform:translate(3%,0)!important;
    }
    .desktop-topbar{
      min-height:42px;
      background:#1976d2;
      color:#fff;
      padding:0 16px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:.66rem;
      font-weight:800;
      white-space:nowrap;
    }
    .desktop-topbar strong{font-size:.88rem}
    .desktop-nav{
      display:flex;
      align-items:center;
      gap:7px;
      min-height:35px;
      padding:6px 12px;
      border-bottom:1px solid #dce6ef;
      background:#f8fbff;
      white-space:nowrap;
      overflow:hidden;
    }
    .desktop-nav span{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:22px;
      padding:2px 8px;
      border:1px solid #c8dced;
      border-radius:999px;
      color:#31546f;
      background:#fff;
      font-size:.43rem;
      font-weight:800;
      line-height:1;
    }
    .desktop-nav span:first-child{background:#1976d2;color:#fff;border-color:#1976d2}
    .desktop-body{padding:15px 16px 16px;background:#fff}
    .desktop-body h3{margin:0 0 2px;font-size:.86rem;line-height:1.3;color:#1f2933}
    .desktop-body>p{margin:0 0 11px;font-size:.5rem;line-height:1.5;color:#6b7280}
    .desktop-status,.desktop-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:0 0 7px}
    .desktop-status div,.desktop-summary div{
      min-width:0;
      border:1px solid #dbe7f2;
      border-radius:8px;
      background:#fff;
      padding:7px 6px;
      overflow:hidden;
    }
    .desktop-status span,.desktop-summary span{
      display:block;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      color:#6b7280;
      font-size:.42rem;
      line-height:1.35;
    }
    .desktop-status strong,.desktop-summary strong{
      display:block;
      margin-top:2px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      color:#1f2933;
      font-size:.64rem;
      line-height:1.25;
    }
    .desktop-summary strong{color:#0d47a1}
    .desktop-action{
      margin-top:2px;
      border:1px solid #9fc3e8;
      color:#1565c0;
      background:#f8fbff;
      border-radius:7px;
      text-align:center;
      padding:5px;
      font-size:.44rem;
      line-height:1.2;
      font-weight:800;
    }
    .app-preview{left:-2px!important;bottom:4px!important;width:36%!important;max-width:205px!important}
    @media(max-width:900px){
      .hero-visual{padding-left:58px}
      .desktop-mockup{width:94%!important;transform:translate(2%,0)!important}
    }
    @media(max-width:560px){
      .hero-visual{padding-left:44px}
      .desktop-mockup{min-height:235px;width:96%!important;border-radius:18px!important}
      .desktop-topbar{min-height:30px;padding:0 9px;font-size:.45rem}
      .desktop-topbar strong{font-size:.58rem}
      .desktop-nav{min-height:25px;gap:4px;padding:4px 7px}
      .desktop-nav span{min-height:16px;padding:1px 5px;font-size:.29rem}
      .desktop-body{padding:9px}
      .desktop-body h3{font-size:.58rem}
      .desktop-body>p{font-size:.34rem;margin-bottom:6px}
      .desktop-status,.desktop-summary{gap:4px;margin-bottom:4px}
      .desktop-status div,.desktop-summary div{padding:4px 3px;border-radius:5px}
      .desktop-status span,.desktop-summary span{font-size:.27rem}
      .desktop-status strong,.desktop-summary strong{font-size:.42rem}
      .desktop-action{padding:3px;font-size:.29rem}
      .app-preview{width:37%!important;max-width:132px!important}
    }
  `;
  document.head.appendChild(style);
});
