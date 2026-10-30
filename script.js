
// Welcome message when website loads
console.log("Welcome to Harshpreet's Portfolio!");

// Smooth navigation is already enabled in CSS

// Show a message when a navigation link is clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation:", link.textContent);
    });
});
