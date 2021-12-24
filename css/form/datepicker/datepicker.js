function datepicker() {
    $.datepicker.setDefaults($.datepicker.regional["ru"]);   

    $( ".book__input_data" ).datepicker({
        dateFormat: "yy-mm-dd",
        //beforeShowDay: $.datepicker.noWeekends, // невыбираем выходные
        minDate: 'null', // минимальная дата
        autoSize: true,          
        numberOfMonths: 2,
        showButtonPanel: true,   
    });
    
    
} 

export default datepicker;