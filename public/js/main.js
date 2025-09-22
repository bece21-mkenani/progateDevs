import { Toast } from "./toast.js";

// ------Mobile Menu Functionality
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  const overlay = document.createElement('div');
  const slideInmanue = document.querySelector('.nav-links')

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    slideInmanue.classList.toggle('active')
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  overlay.addEventListener('click', toggleMenu);

  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      slideInmanue.classList.remove('acctive')
    }
  });
}

const style = document.createElement('style');
style.textContent = `
  body.no-scroll {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', initMobileMenu);

const toast = new Toast();
//----getting user form data =========
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        const formData = new FormData(form);
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                body: new URLSearchParams(formData)
            });
            if (response.ok) {
                toast.show('Message sent successfully!', 'success');
                form.reset();
            } else {
                toast.show('Error sending message. Try again.', 'error');
            }
        } catch (error) {
            toast.show('Network error. Please check your connection.', 'error');
        }
    }
});
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

//------typer writter----hero section=============
const services = [
  "Web Development",
  "Mobile App Development",
  "ICT Consultancy",
  "Student Project Help",
  "Software Training (Word, Excel, etc.)",
  "Networking Skills"
];

const typedElement = document.getElementById("typed-service");
let serviceIndex = 0;
let charIndex = 0;
let typingSpeed = 100;  
let deletingSpeed = 50;    
let delayBetween = 1500;   

function typeService() {
    if (charIndex < services[serviceIndex].length) {
        typedElement.textContent += services[serviceIndex][charIndex];
        charIndex++;
        setTimeout(typeService, typingSpeed);
    } else {
        setTimeout(deleteService, delayBetween);
    }
}

function deleteService() {
    if (charIndex > 0) {
        typedElement.textContent = services[serviceIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteService, deletingSpeed);
    } else {
        serviceIndex = (serviceIndex + 1) % services.length;
        setTimeout(typeService, typingSpeed);
    }
}
typeService();
