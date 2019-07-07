jQuery( function( $ ) {

    $(document).on('click', '.fx-video-popup', function () {
        $('.fx-product-youtube').addClass('active');
        $(this).addClass('active');
        $(this).text('Скрыть видео');
    });

    $(document).on('click', '.fx-video-popup.active', function () {
        $('.fx-product-youtube').removeClass('active');
        $(this).removeClass('active');
        $(this).text('Показать видео');

        var leg=$('.fx-product-youtube').attr("src");
        $('.fx-product-youtube').attr("src",leg);
    });

});