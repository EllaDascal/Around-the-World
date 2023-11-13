document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth", // Use smooth scrolling behavior
            block: "start",
          });
        }
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollButtons = document.querySelectorAll(".scroll-to-top-button");
  
    scrollButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  });

