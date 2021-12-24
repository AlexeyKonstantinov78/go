function datepicker() {
    $.datepicker.setDefaults($.datepicker.regional["ru"]);   

    $( ".book__input_data" ).datepicker({
        dateFormat: "yy-mm-dd",
        //beforeShowDay: $.datepicker.noWeekends, // невыбираем выходные
        minDate: 'null', // минимальная дата
        autoSize: true,          
        numberOfMonths: 1,
        showButtonPanel: true,   
    });
    
    console.log($('.book__input_data').val());
    if ($('.book__input_data').val() == '') {

        console.log($('div[pseudo="-webkit-datetime-edit-fields-wrapper"]'));
        $('div[pseudo="-webkit-datetime-edit-fields-wrapper"]').html("<span>Дата</span>");
    };
} 

export default datepicker;