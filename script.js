document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startButton");
  if (!button) return;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("無料版の登録ページは準備中です。公開時にここへ登録URLを接続します。");
  });
});
