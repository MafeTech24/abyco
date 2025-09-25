// ======== NAVBAR SCROLL EFFECT ========
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ======== HIGHLIGHT ACTIVE SECTION ========
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

function setActiveLink() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // margen top
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        }
      });
    }
  });
}
window.addEventListener("scroll", setActiveLink);

// ======== CLOSE MOBILE MENU ON CLICK ========
const navItems = document.querySelectorAll(".navbar .nav-link");
const bsCollapse = document.querySelector(".navbar-collapse");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (bsCollapse.classList.contains("show")) {
      new bootstrap.Collapse(bsCollapse).toggle();
    }
  });
});
