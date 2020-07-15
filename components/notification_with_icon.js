(function ($) {
    $.fn.hello = function (options) {
        var settings = $.extend({
            name: 'Copy'
        }, options);
        return this.append(' ' + settings.name + ' ');
    };
    $.fn.imageload = function (options) {
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
        $.each(data.items, function (i, f) {
            // $("#icons ul").append("<li class=" + f.class + " id=" + f.id + "><img src='" + f.url + "' / > </li>");
            $('#' + f.id + '').append("<a class=" + f.aclass + "><img src=" + f.url + "></a>");
        });
    };
    $.fn.notificationwithouticons = function (options) {
        var data = {
            "items": [{
                "iclass": "notification_content",
                "aclass": "notification_content_left",
                "content": "Status: On </br>Wi-Fi Direct Name: xyzxyz</br>Wi-Fi Direct Password: ******</br> Devices Connected: 4",
                "url1": "./images/Icons_SVG/print_l.svg",
                "url2": "./images/Icons_SVG/settings_l.svg",
                "id": "Notification-with-icon"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><span class='viewdetails-content'>" + f.content + "</span><div class='notificationbuttoncontainer'> <img class='notification_img_print'  src=" + f.url1 + "><img class='notification_img_setting' src=" + f.url2 + "></div>");
        });
    };

    $.fn.notificationwithbuttons = function (options) {
        var data = {
            "items": [{
                "iclass": "notification_content",
                "aclass": "notification_content_left",
                "content": "The printer includes an automatic Wireless Setup Mode that makes it easy to connect the printer to a wireless network that has a router. However, turning on Wi-Fi Direct will turn off this Wireless Setup Mode. Do you still want to turn on </br>Wi-Fi Direct ? ",
                "id": "Notification-with-button"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><span class='notification_content'>" + f.content + "</span></div><div class='notificationimgcontainer'> <button class='notification_yes_but'>Yes</button><button class='notification_no_but'>No</button></div>");
        });
    };



    $.fn.processingscreen = function (options) {
        var data = [{
            "iclass": "processing_screen",
            "aclass": "process_content",
            "content1": "Printing",
            "content2": "Printing completed successfully.",
            "url1": "./images/Gif-images/connectivity_globalprinting_animation.gif",
            "id": "processing_screen"
        }];
        var settings = $.extend(data, options);
        $.each(settings, function (i, f) {
            $('#' + f.id + '').empty();
            $('#' + f.id + '').append("<div class='processcontainer'> <img class='process_img' src=" + f.url1 + "></div><div class=" + f.aclass + "><div class='show'><input type='text' id='printprocesstext'></div>");
        });
    };
    $.fn.notificationwith_buttons = function (options) {
        var data = {
            "items": [{
                "iclass": "processing_screen",
                "aclass": "process_content",
                "content1": "Printing",
                "content2": "Printing complete!",
                "url1": "./images/Gif-images/connectivity_wifi_animation.gif",
                "id": "Print_btn_processing_screen"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class='processcontainer'> <img class='process_img' src=" + f.url1 + "></div><div class=" + f.aclass + "><div class='show'><input type='text' id='processtext'></div>");
        });
    };

    $.fn.notificationconnection_method = function (options) {

        var settings = $.extend([{}], options);
        $.each(settings, function (i, f) {
            $('#' + f.id + '').empty();
            $('#' + f.id + '').append("<div class=" + f.aclass + "><img class='helpsection' src=" + f.url1 + "><span class='helpsec_content'>" + f.content1 + "</span><span class='notification_content'>" + f.content + "</span></div><div class='notificationimgcontainer'> <img class='helpcheck_icon' onclick='helpcheck_icon()' src=" + f.url + "></img></div>");
        });
    };



}(jQuery));