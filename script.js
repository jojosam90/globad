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
        // Swap all non-option translatable elements
        $('[data-en]').not('option').each(function () {
            var text = l === 'zh' ? this.getAttribute('data-zh') : this.getAttribute('data-en');
            if (text != null) { $(this).html(text); }
        });
        // Marquee clones (created by the plugin at init) have no data-en/zh,
        // so update every li inside .picMarquee-left directly
        var marqueeText = l === 'zh'
            ? '联系我们！&nbsp;&nbsp;联系我们！&nbsp;&nbsp;联系我们！&nbsp;&nbsp;'
            : "let's talk! &nbsp;let's talk! &nbsp;let's talk! &nbsp;";
        $('.picMarquee-left li').html(marqueeText);
        // Non-default options (e.g. multi-select items): simple text update is enough
        $('option[data-en]').each(function () {
            if (this.value === '') return;
            var text = l === 'zh' ? this.getAttribute('data-zh') : this.getAttribute('data-en');
            if (text != null) { this.text = text; }
        });
        // Default "Please select" options: browser caches the selected option's display text,
        // so we must remove + re-insert the element to force a redraw
        $('select').each(function () {
            var sel = this;
            var optIdx = -1;
            for (var i = 0; i < sel.options.length; i++) {
                if (sel.options[i].value === '' && sel.options[i].getAttribute('data-en')) {
                    optIdx = i; break;
                }
            }
            if (optIdx === -1) return;
            var opt     = sel.options[optIdx];
            var dataEn  = opt.getAttribute('data-en');
            var dataZh  = opt.getAttribute('data-zh');
            var text    = l === 'zh' ? dataZh : dataEn;
            var wasSelected = (sel.selectedIndex === optIdx);
            sel.remove(optIdx);
            var newOpt = new Option(text, '');
            newOpt.setAttribute('data-en', dataEn);
            newOpt.setAttribute('data-zh', dataZh);
            sel.insertBefore(newOpt, sel.options[optIdx] || null);
            if (wasSelected) sel.selectedIndex = optIdx;
        });
        // Swap input placeholders
        $('[data-ph-en]').each(function () {
            this.placeholder = l === 'zh' ? this.getAttribute('data-ph-zh') : this.getAttribute('data-ph-en');
        });
        // Swap submit button values
        $('[data-val-en]').each(function () {
            this.value = l === 'zh' ? this.getAttribute('data-val-zh') : this.getAttribute('data-val-en');
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

