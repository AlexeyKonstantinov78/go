function datepicker() {
    $.datepicker.setDefaults($.datepicker.regional["ru"]);   

    $( ".book__input_data" ).datepicker({
        dateFormat: "yy-mm-dd",
        // dateFormat: "dd.mm.yy",
        //beforeShowDay: $.datepicker.noWeekends, // невыбираем выходные
        minDate: 'null', // минимальная дата
        autoSize: true,          
        numberOfMonths: 1,
        showButtonPanel: true,   
    });       
} 

export default datepicker;