(function() {
    "use strict";

    // loadMap();

    // модальные окна
    initFancybox();

    // подсказки тектовых полей для старых браузеров
    initPlaceholder();

    // конфигурация по-умолчанию для валидатора
    setValidatorDefaults();

    // валидация формы
    requestForm();

    function initFancybox() {
        $("[data-fancybox]").fancybox();
    }

    function initPlaceholder() {
        $("[placeholder]").placeholder();
    }

    function setValidatorDefaults() {
        $.validator.setDefaults({
            errorElement: "span",
            errorClass: "validator-error"
        });
    }

    function requestForm() {
        $(".request-form").validate();
    }

    function loadMap() {
        if (document.getElementById("google-map") === null) return;
        var map;

        init();
        setMarkers();

        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(54.724288, 55.997412),
                zoom: 16,
                scrollwheel: false
            };

            map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
        }

        function setMarkers() {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(54.724288, 55.997412),
                map: map
            });
        }
    }

})();
