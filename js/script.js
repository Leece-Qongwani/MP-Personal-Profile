
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav');
    // Select the menu icon checkbox
    const menuIcon = document.getElementById('menu-icon');

    // Add a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the menu icon checkbox
            menuIcon.checked = false;
        });
    });

