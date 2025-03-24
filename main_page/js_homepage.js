document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle (Open)
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Sidebar Close
    const closeSidebar = document.querySelector(".close-sidebar");
    closeSidebar.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Sticky Header Effect on Scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 0);
    });

    // Smooth scroll to services section
    window.scrollToServices = function () {
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    };
});