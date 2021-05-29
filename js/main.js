document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',
    {
        autoplay: true,
        interval: 14000,
        type: 'loop',
    }
    ).mount();
} );