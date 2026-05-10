/* ===== Shared Scripts ===== */

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

// Language toggle
$(function () {
    var lang = localStorage.getItem('globad_lang') || 'en';

    function applyLang(l) {
        lang = l;
        localStorage.setItem('globad_lang', l);
        $('[data-en]').each(function () {
            var $el = $(this);
            $el.html(l === 'zh' ? $el.data('zh') : $el.data('en'));
        });
        $('[data-ph-en]').each(function () {
            var $el = $(this);
            $el.attr('placeholder', l === 'zh' ? $el.data('ph-zh') : $el.data('ph-en'));
        });
        $('[data-val-en]').each(function () {
            var $el = $(this);
            $el.val(l === 'zh' ? $el.data('val-zh') : $el.data('val-en'));
        });
        $('#lang-toggle, #lang-toggle-mobile').text(l === 'zh' ? 'EN' : '中文');
    }

    applyLang(lang);

    $(document).on('click', '#lang-toggle, #lang-toggle-mobile', function () {
        applyLang(lang === 'zh' ? 'en' : 'zh');
    });
});

// Desktop email choice popup
$(function () {
    var emailTo = 'Admin@globad.net';
    var $popup = $(
        '<div class="email-choice-popup">' +
        '<p>Open with</p>' +
        '<a href="https://mail.google.com/mail/?view=cm&fs=1&to=' + emailTo + '" target="_blank">' +
        '<span class="badge badge-gmail">G</span> Gmail</a>' +
        '<a href="https://outlook.live.com/mail/0/deeplink/compose?to=' + emailTo + '" target="_blank">' +
        '<span class="badge badge-outlook">O</span> Outlook</a>' +
        '</div>'
    ).appendTo('body');

    $(document).on('click', 'a[href^="mailto:"]', function (e) {
        if ($(window).width() > 768) {
            e.preventDefault();
            var rect = this.getBoundingClientRect();
            $popup.css({
                top: rect.bottom + window.scrollY + 8,
                left: Math.min(rect.left, $(window).width() - 220)
            }).toggle();
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.email-choice-popup, a[href^="mailto:"]').length) {
            $popup.hide();
        }
    });
});

