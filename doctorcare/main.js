// Consertando erro
window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showArrowToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showArrowToTopButtonOnScroll() {
  if (scrollY > 880) {
    arrowToTopButton.classList.add("show");
  } else {
    arrowToTopButton.classList.remove("show");
  }
}
function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "3rem",
  duration: 700,
}).reveal(`
 #home,
 #home
 img,
 #home
 .stats,
 footer,
  header
 `);

ScrollReveal({
  origin: "left",
  distance: "3rem",
  duration: 700,
}).reveal(`
 #services
  header,
 #services
 .card,
 #about,
 #about 
 header,
 #about 
 .content,
 #contact,
 header,
 .content
 `);
