document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startButton");
  if (!button) return;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "https://app.farmpro-app.jp/";
  });
});
