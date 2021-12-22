function burgers() {

    $('.header__burger-menu').click(function (event) {

        $('.header__items').toggle(500);

        if ($(this).hasClass('burger__menu_open')) {
            $(this).removeClass('burger__menu_open');
            $(this).addClass('burger__menu_close');
        } else {
            if ($(this).hasClass('burger__menu_close')) {
                $(this).removeClass('burger__menu_close');
                $(this).addClass('burger__menu_open');
            }
        }        
    });

    $('.header__item').click(function(event) { 
        
        console.log(window.screen.width);
        if (window.screen.width <= 890) {
            const menu = $('.header__burger-menu');        
            menu.removeClass('burger__menu_close');
            menu.addClass('burger__menu_open');
            $('.header__items').toggle(500);
        }         
    });

    window.addEventListener("resize", () =>{

        if (window.screen.width > 890) {
            const headerItems = $('.header__items');
            if (headerItems[0].style.display === "none") {
                
                headerItems[0].removeAttribute('style');
                // headerItems[0].style.display = "flex";                
            }
        } 
        // else {
        //     headerItems[0].style.display = "none";
        // }
    });
    
}

export default burgers;

