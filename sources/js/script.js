"use strict"

$(function(){
    $('#cntByDay').niceSelect();
    $(".form_datetime").datetimepicker({
        minView: 2, 
        pickTime: false,
        autoclose: true,
        format: "dd MM yyyy",
        pickerPosition: 'bottom',
        language:'ru',
    });
})