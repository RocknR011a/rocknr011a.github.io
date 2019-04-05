var rand;
var popupNum;
$('.close-popup').click(function () {
    $('.inner-popup').fadeOut();
});
$(window).on('load', function run() {
    if ($(window).width() > 768) {
        if ($('.inner-popup').hasClass('active')) {
            setTimeout(function () {
                $('.inner-popup').removeClass('active');
                $('.inner-popup').fadeOut();
                run();
            }, 10000);
        } else {
            setTimeout(function () {
                rand = 1 - 0.5 + Math.random() * (3 - 1 + 1);
                rand = Math.round(rand);
                popupNum = '.inner-popup:nth-child(' + rand + ')';
                $(popupNum).fadeIn();
                $('.inner-popup').addClass('active');
                run();
            }, 5000);
        }
    } else {
        return false;
    }
});
