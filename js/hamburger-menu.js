jQuery(document).ready(function ($) {
    // Toggle the mobile menu when the hamburger button is clicked
    $(".navbar-toggler").on("click", function () {
        $("#navbar").toggleClass("show");
    });
});