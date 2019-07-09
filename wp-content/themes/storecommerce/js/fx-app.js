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

    $(document).on('click', '.fx-reviews-button', function () {
        $('#review_form_wrapper').css('display', 'block');
        $(this).addClass('active');
        $(this).text('Отказаться');
    });

    $(document).on('click', '.fx-reviews-button.active', function () {
        $('#review_form_wrapper').css('display', 'none');
        $(this).removeClass('active');
        $(this).text('Оставить отзыв');
    });
    


});