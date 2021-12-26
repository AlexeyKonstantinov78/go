import './time-picker/jquery.timepicker.js';

function timejs() {
    $(document).ready(function(){
        $('.book__input_time').timepicker({
            timeFormat: 'HH:mm',
            interval: 60,
            minTime: '10',
            maxTime: '7:00 pm',
            defaultTime: 'now',
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });    
    });
}

export default timejs;