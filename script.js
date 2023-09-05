// Nav link active

        // Get all the navigation links
        const navLinks = document.querySelectorAll('.nav-link');

        // Add a click event listener to each navigation link
        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                // Remove the "active" class from all navigation links
                navLinks.forEach((navLink) => {
                    navLink.classList.remove('active');
                });

                // Add the "active" class to the clicked navigation link
                event.currentTarget.classList.add('active');
            });
        });
// End Nav link


// Back to Top section
document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 15 ||
            document.documentElement.scrollTop > 15
        ) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }

    document.getElementById("backToTopBtn").onclick = function () {
        // Use scrollIntoView with smooth behavior
        document.body.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
});
// End Back to Top



