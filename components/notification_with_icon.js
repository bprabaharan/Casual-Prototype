(function($) {
    $.fn.hello = function(options) {
        var settings = $.extend({
            name: 'Copy'
        }, options);
        return this.append(' ' + settings.name + ' ');
    };
    $.fn.imageload = function(options) {
        var data = {
            "items": [{
                "iclass": "icon-back",
                "aclass": "carousel-item",
                "url": "./images/Icons_SVG/back_l.svg",
                "id": "iconback"
            }, {
                "iclass": "icon-help",
                "aclass": "carousel-item",
                "url": "./images/Icons_SVG/help_l.svg",
                "id": "iconhelp"
            }, {
                "iclass": "icon-cancel",
                "aclass": "carousel-item",
                "url": "./images/Icons_SVG/cancel_button.svg",
                "id": "iconcancel"
            }]
        };
        $.each(data.items, function(i, f) {
            // $("#icons ul").append("<li class=" + f.class + " id=" + f.id + "><img src='" + f.url + "' / > </li>");
            $('#' + f.id + '').append("<a class=" + f.aclass + "><img src=" + f.url + "></a>");
        });
    };
    $.fn.notificationwithouticons = function(options) {
        var data = {
            "items": [{
                "iclass": "notification_content",
                "aclass": "notification_content_left",
                "content": "Status: On\n Wi-Fi Direct Name: SSID\n Wi-Fi Direct Password: Value\n Devices Connected: 4",
                "url1": "./images/Icons_SVG/print_l.svg",
                "url2": "./images/Icons_SVG/settings_l.svg",
                "id": "Notification-with-icon"
            }]
        };
        $.each(data.items, function(i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><span>" + f.content + "</span><div class='verticalline'></div><div class='notificationimgcontainer'> <img class='notification_img_print'  src=" + f.url1 + "><img class='notification_img_setting' src=" + f.url2 + "></div>");
        });
    };

    $.fn.processingscreen = function(options) {
        var data = {
            "items": [{
                "iclass": "processing_screen",
                "aclass": "process_content",
                "content1": "Printing",
                "content2": "Printing complete!",
                "url1": "./images/Icons_SVG/u17.png",
                "id": "processing_screen"
            }]
        };
        $.each(data.items, function(i, f) {
            $('#' + f.id + '').append("<div class='processcontainer'> <img class='process_img' src=" + f.url1 + "></div><div class=" + f.aclass + "><div class='show'><wifiprocess class='copying-txt'>" + f.content1 + "</wifiprocess> <wifiprocess class='copying-txt'>" + f.content2 + "</wifiprocess><p class='processtext'></p></div>");
        });
    };



}(jQuery));