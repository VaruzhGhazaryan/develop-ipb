"use strict"

$(function(){
    $('#cntByDay, #price-for-week').niceSelect();
    $(".form_datetime").datetimepicker({
        minView: 2, 
        pickTime: false,
        autoclose: true,
        format: "dd MM yyyy",
        pickerPosition: 'bottom-right',
        language:'ru',
    });
    $('#price-filter-slide').slider({
        formatter: function(value) {
            return 'От: ' + value + ' руб.';
        }
    });
})