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

// Email picker dropdown
$(function () {
    var email = 'business_contact@globad.net';
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&to=' + email;
    var outlookUrl = 'https://outlook.live.com/mail/0/deeplink/compose?to=' + email;

    // Wrap desktop email link
    $('.navright a[href^="mailto"]').each(function () {
        var $a = $(this);
        $a.removeAttr('href').css('cursor', 'pointer');
        $a.wrap('<div class="email-picker"></div>');
        $a.parent().append(
            '<div class="email-picker-dropdown">' +
            '<a href="' + gmailUrl + '" target="_blank">📧 Open in Gmail</a>' +
            '<a href="' + outlookUrl + '" target="_blank">📨 Open in Outlook</a>' +
            '</div>'
        );
    });

    // Wrap mobile email link
    $('.wap_header .lin[href^="mailto"]').each(function () {
        var $a = $(this);
        $a.removeAttr('href').css('cursor', 'pointer');
        $a.wrap('<div class="email-picker"></div>');
        $a.parent().append(
            '<div class="email-picker-dropdown">' +
            '<a href="' + gmailUrl + '" target="_blank">📧 Open in Gmail</a>' +
            '<a href="' + outlookUrl + '" target="_blank">📨 Open in Outlook</a>' +
            '</div>'
        );
    });

    // Toggle dropdown on click
    $(document).on('click', '.email-picker > a, .email-picker > .lin', function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('open');
    });

    // Close on outside click
    $(document).on('click', function () {
        $('.email-picker').removeClass('open');
    });
});
