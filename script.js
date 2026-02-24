const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name ||  !email ||!message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill all fields!";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email!";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
  form.reset();
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const faders = document.querySelectorAll(".fade");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = "translateY(30px)";
  fader.style.transition = "all 0.8s ease-out";
  appearOnScroll.observe(fader);
});