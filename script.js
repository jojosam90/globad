/* ===== Shared Scripts ===== */

// Mouse follower
$(function () {
    $(document).on("mousemove", function (e) {
        $('.follower').css({ left: e.clientX, top: e.clientY });
        $('.follower').show();
    });
});

// Sticky nav on scroll
$(function () {
    var sTop = 0;
    var x = $(".header").offset().top;
    var y = $(".wap_header").offset().top;
    $(window).scroll(function () {
        sTop = $(this).scrollTop();
        if (sTop > x) {
            $(".header").addClass("fixedNav");
            $(".wap_header").addClass("fixedNav");
        } else {
            $(".header").removeClass("fixedNav");
            $(".wap_header").removeClass("fixedNav");
        }
        if (sTop > y) {
            $(".wap_header").addClass("fixedNav");
        } else {
            $(".wap_header").removeClass("fixedNav");
        }
    });
});

// Back to top
$(function () {
    $(".gotop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});

// WOW animations
new WOW().init();

