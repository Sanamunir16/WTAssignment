$(document).ready(function () {

    // Fade effect for heading
    $(".fade").addClass("show");

    // Always show popup on homepage
    setTimeout(() => {
        $("#welcomePopup").css("display", "flex");
    }, 500);

    // Close popup
    $(".popup-close").click(function () {
        $("#welcomePopup").css("display", "none");
    });

});
