// Placeholder for JavaScript functionality
console.log("JavaScript loaded");

// Simple form validation (optional, if needed)
document.querySelector("form")?.addEventListener("submit", function(e) {
    const company = document.querySelector('input[name="company"]')?.value;
    const email = document.querySelector('input[name="email"]')?.value;
    const phone = document.querySelector('input[name="phone"]')?.value;
    
    if (!company || !email || !phone) {
        alert("Please fill in all fields");
        e.preventDefault();
    }
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});
