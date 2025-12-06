$(document).ready(function() {
    // Fade-in animation for heading
    $(".fade").addClass("show");

    // Smooth page transitions
    $("nav a").click(function(e) {
        var link = $(this).attr("href");
        $("body").fadeOut(300, function() {
            window.location.href = link;
        });
        e.preventDefault();
    });
});
