$(document).ready(function () {

    // Fade animation on headings
    $(".fade").addClass("show");

    // Show popup only on Home Page (index.html)
    if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
        setTimeout(function () {
            $("#welcomePopup").addClass("show");
        }, 800);
    }

    // Close popup
    $("#closePopup").click(function () {
        $("#welcomePopup").removeClass("show");
    });

    // Smooth page transitions
    $("nav a").click(function (e) {
        let link = $(this).attr("href");
        $("body").fadeOut(300, function () {
            window.location.href = link;
        });
        e.preventDefault();
    });
});
