// script.js

// Function to handle navigation
function navigateToPage(pageNumber) {
    const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6", "Page 7", "Page 8", "Page 9", "Page 10", "Page 11", "Page 12", "Page 13", "Page 14", "Page 15"];
    if (pageNumber < 1 || pageNumber > pages.length) {
        console.log("Invalid page number.");
        return;
    }
    console.log(`Navigating to: ${pages[pageNumber - 1]}`);
}

// Function to handle password protection for specific pages
function protectedPage(pageNumber) {
    const password = prompt("Please enter the password:");
    if (password === "yourPasswordHere") {
        console.log(`Access granted to page ${pageNumber}`);
        navigateToPage(pageNumber);
    } else {
        console.log(`Access denied to page ${pageNumber}`);
    }
}

// Password protection for pages 5, 10, and 15
[5, 10, 15].forEach(page => {
    protectedPage(page);
});