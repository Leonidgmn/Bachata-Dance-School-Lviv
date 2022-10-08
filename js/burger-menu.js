const burgerButton = document.querySelector(".burger-menu-button");
const menuNavigation = document.querySelector(".navigation__menu");
const menuItem = document.querySelector(".menu");
const mainPage = document.querySelector(".main-page");

burgerButton.addEventListener("click", function (e) {
  document.body.classList.toggle("lock");
  burgerButton.classList.toggle("active");
  menuNavigation.classList.toggle("active");
});























function toggleMenu() {
  if (menuNavigation.classList.contains("show-menu")) {
    menuNavigation.classList.remove("show-menu");
    menuNavigation.style.display = "none";
    mainPage.style.display = "block";
  } else {
    menuNavigation.classList.add("show-menu");
    menuNavigation.style.display = "flex";
    mainPage.style.display = "none";

    menuItem.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  }
}

burgerButton.addEventListener("click", toggleMenu);