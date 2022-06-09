// Consertando erro
window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showArrowToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2;

  // Verificar se a seção passou.
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetline = targetline > sectionTop;

  // Informações do dado
  // console.log(
  //   `O topo da seção chegou o passou da linha? ${sectionTopReachOrPassedTargetline}`
  // );

  // Verificar se a base está abaixo da linha alvo
  // Quais dados vou precisar?

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  // O final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetline;

  // console.log(
  //   `O fundo da seção passou da linha? ${sectionEndPassedTargetline}`
  // );

  // Limite da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
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
