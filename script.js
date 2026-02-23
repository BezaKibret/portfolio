const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => { navLinks.classList.toggle("show"); });

const darkModeToggle = document.getElementById("darkModeToggle");
if(darkModeToggle){ darkModeToggle.addEventListener("click", () => { document.body.classList.toggle("dark-mode"); }); }

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();
    if(!name || !email || !userMessage){ message.style.color="red"; message.textContent="Please fill all fields!"; return; }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){ message.style.color="red"; message.textContent="Please enter a valid email!"; return; }
    message.style.color="green"; message.textContent="Message sent successfully!"; form.reset();
  });
}

const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => { scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none"; });
scrollTopBtn.addEventListener("click", () => { window.scrollTo({ top:0, behavior:"smooth" }); });