const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".main-menu");
function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);
    btn.textContent = "☰";
  } else {
    console.log(menuShown);
    btn.textContent = "☰";
  }
}
btn.addEventListener("click", toggleMenu);
