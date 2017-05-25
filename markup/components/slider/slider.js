$( document ).ready( function () {
    let slider = $( '.slider__items' );

    slider.css( 'display', 'block' ); // Для предотвращения flash эффекта

    slider.slick({
        //  autoplay: true,
        arrows: true,
        appendArrows: '.slider__arrows',
        zIndex: 5
    });
});
