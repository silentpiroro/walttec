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
