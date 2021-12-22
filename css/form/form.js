function form() {
    // маска для модального окна
    const modalTel = document.querySelector('.modal__input_phone');

    const regTel = new Inputmask("+7(999)-999-99-99");
    regTel.mask(modalTel);

    //валидатор модального окна
    const validatorModal = new JustValidate('#modal-form', {
        errorLabelStyle: {
            color: 'red',
            textDecoration: 'underlined',        
        }
    });

    validatorModal
        .addField('#namemodal', [
        {
            rule: 'required',
            errorMessage: 'Введите Фамилию Имя',
        },
        {
            rule: 'maxLength',
            value: 54,
            errorMessage: 'Слишком длинное имя',
        },
        {
            rule: 'customRegexp',
            value: /[а-яА-ЯёЁa-zA-Z\-\'\ ]/i,
            errorMessage: 'Введите Фамилию Имя '
        },
    ])
    .addField('#phonemodal', [
        {
            rule: 'required',
            errorMessage: 'Введите номер карты',
        },
        {
            validator: (value) => {
                const tel = modalTel.inputmask.unmaskedvalue();                                
                return tel.length === 10;
            },
            errorMessage: 'Номер не корректный!',
        }, 
    ]);

    //маска  для бронирования зала
    const bronTel = document.querySelector('.book__input_phone');
    const regbronTel = new Inputmask("+7(999)-999-99-99");
    regbronTel.mask(bronTel);

    //валидатор bron
    const validatorBron = new JustValidate('#bron', {
        errorLabelStyle: {
            color: 'red',
            textDecoration: 'underlined',        
        }
    });

    validatorBron
        .addRequiredGroup('#radio', 'Выбирите зал')
        .addRequiredGroup('#prefix', 'Выбирите приставку')
        .addRequiredGroup('#boardGame', 'Выбирите игру')        
        .addField('#data', [
            {
                rule: 'required',
                errorMessage: 'Выберите дату',
            },             
        ])
        .addField('#time', [
            {
                rule: 'required',
                errorMessage: 'Выберите время',
            },             
        ])
        .addField('#count', [
            {
                rule: 'required',
                errorMessage: 'Введите сколько человек',
            },             
        ])
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Введите Фамилию Имя',
            },
            {
                rule: 'maxLength',
                value: 54,
                errorMessage: 'Слишком длинное имя',
            },
            {
                rule: 'customRegexp',
                value: /[а-яА-ЯёЁa-zA-Z\-\'\ ]/i,
                errorMessage: 'Введите Имя '
            },
        ])
        .addField('#surname', [
            {
                rule: 'required',
                errorMessage: 'Введите Фамилию Имя',
            },
            {
                rule: 'maxLength',
                value: 54,
                errorMessage: 'Слишком длинное имя',
            },
            {
                rule: 'customRegexp',
                value: /[а-яА-ЯёЁa-zA-Z\-\'\ ]/i,
                errorMessage: 'Введите Фамилию'
            },
        ])
        .addField('#phone', [
            {
                rule: 'required',
                errorMessage: 'Введите номер карты',
            },
            {
                validator: (value) => {
                    const tel = bronTel.inputmask.unmaskedvalue();                                
                    return tel.length === 10;
                },
                errorMessage: 'Номер не корректный!',
            }, 
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Введите email',
            },
            {
                rule: 'email',
                errorMessage: 'Email неправильный!',
            }, 
        ]);


    // отправка формы
    $('.modal, .book__form').submit(function(event) {
        let valid ='';
        event.preventDefault();        

        if ($(this).hasClass('book__form')) valid = validatorBron.isValid;
        if ($(this).hasClass('modal')) valid = validatorModal.isValid;

        if (valid) {            
        
            const modalForm = $(this);
    
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                type: 'POST',
                data: $(this).serialize(),
                success(data) {                       
                    
                    const div = $('<div>').addClass('modal__title-rezult')
                            .html(`<p style="text-align: center;">Спасибо заявка принята ${data.id}</p>`);
                    modalForm.append(div); 
    
                    setTimeout(function() {
                        $('.modal__title-rezult').detach();
                        modalForm[0].reset();
                    },5000);
                },
                erorr() {
                    $('.form__title').text('Что то не так повторите позже'); 
                    
                    setTimeout(function() {                
                        modalForm[0].reset();                        
                    },5000);
                }
            });
        }
        
    
    });

};

export default form;