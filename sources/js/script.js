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

    // Init google maps
    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.7391749, lng: 37.5998668},
          zoom: 10,
          disableDefaultUI: true
        });
    }