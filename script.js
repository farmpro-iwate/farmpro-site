document.addEventListener("DOMContentLoaded", () => {
  const freeStartUrl = "https://app.farmpro-app.jp/register";
  const buttons = document.querySelectorAll('a[href="#start"], #startButton');

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = freeStartUrl;
    });
  });
});
