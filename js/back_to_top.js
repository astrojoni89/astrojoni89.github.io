$(window).load(function() {
    var $btn = $('div.backtotoparrow');

    function repositionBtn() {
        if (_5grid.isDesktop) {
            var mainWidth = $('#main').outerWidth();
            if (mainWidth) {
                var right = Math.max(($(window).width() - mainWidth) / 2, 8);
                $btn.css('right', right + 'px');
            }
        }
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $btn.css({'opacity': '1', 'pointer-events': 'auto'});
        } else {
            $btn.css({'opacity': '0', 'pointer-events': 'none'});
        }
    });

    $(window).on('resize', function() {
        setTimeout(repositionBtn, 150);
    });

    repositionBtn();
});
