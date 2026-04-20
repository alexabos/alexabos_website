$(document).ready(function() {
    var navTarget = document.querySelector('.site-navbar');
    if (window.bootstrap && navTarget) {
        new window.bootstrap.ScrollSpy(document.body, {
            target: '.site-navbar',
            offset: 80
        });
    }

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();

        var navbar = document.getElementById('navbar');
        if (window.bootstrap && navbar && navbar.classList.contains('show')) {
            window.bootstrap.Collapse.getOrCreateInstance(navbar).hide();
        }
    });
});

var cbpAnimatedHeader = (function() {
    var changeHeaderOn = 200, scrollDebounce = 250;

    function scrollPage() {
      $('.site-navbar').toggleClass('navbar-scroll', scrollY() >= changeHeaderOn);
    }

    function scrollY() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

    window.addEventListener('scroll', function() { setTimeout(scrollPage, scrollDebounce); }, false);
})();

// Activate WOW.js plugin for animation on scroll
new WOW().init();
