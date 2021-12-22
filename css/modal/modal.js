function modal() {

    $('.header__btn').on('click', function(event) {
        event.preventDefault();

        $('.modal-section').show(500);
    });

    $('.modal__close').on('click', function(event) {
        event.preventDefault();

        $('.modal-section').hide(500);
    });
};

export default modal;