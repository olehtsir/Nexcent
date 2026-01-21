const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu_header");

function closeMenu() {
   menu.classList.remove("is-open");
   burger.classList.remove("is-open");
   burger.setAttribute("aria-expanded", "false");
}

burger.addEventListener("click", () => {
   const isOpen = menu.classList.toggle("is-open");
   burger.classList.toggle("is-open");
   burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll(".menu_header_div_ul a").forEach((link) => {
   link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
   const clickInsideMenu = menu.contains(e.target);
   const clickOnBurger = burger.contains(e.target);

   if (!clickInsideMenu && !clickOnBurger) closeMenu();
});

document.addEventListener("keydown", (e) => {
   if (e.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
   if (window.innerWidth > 570) closeMenu();
});
