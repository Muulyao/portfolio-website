document.addEventListener("DOMContentLoaded", () => {


  /* Typing Animation */
  const roles = ["Software Developer", "Aspiring Full Stack Developer"];
  let roleIndex = 0, charIndex = 0;

  function typeEffect() {
    const typing = document.getElementById("typing");
    if (!typing) return;

    if (charIndex < roles[roleIndex].length) {
      typing.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typing.textContent = "";
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
        typeEffect();
      }, 1500);
    }
  }
  typeEffect();

  /* Smooth Scrolling */
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* Fade In Sections & Hero Image */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const fadeElements = document.querySelectorAll("section, .hero-image");
  fadeElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  /* Active Navbar Highlight */
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });

});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_fmc9f8f",
      "template_0dfsikj",
      this
    )
    .then(() => {
      formMessage.textContent = "Message sent successfully!";
      form.reset();
    })
    .catch(() => {
      formMessage.textContent = "Something went wrong. Please try again.";
    });

  });

}
