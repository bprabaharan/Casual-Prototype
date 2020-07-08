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
                "content": "Status: On\n Wi-Fi Direct Name: SSID\n Wi-Fi Direct Password: Value\n Devices Connected: 4",
                "url1": "./images/Icons_SVG/print_l.svg",
                "url2": "./images/Icons_SVG/settings_l.svg",
                "id": "Notification-with-icon"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><span>" + f.content + "</span><div class='notificationbuttoncontainer'> <img class='notification_img_print'  src=" + f.url1 + "><img class='notification_img_setting' src=" + f.url2 + "></div>");
        });
    };

    $.fn.notificationwithbuttons = function (options) {
        var data = {
            "items": [{
                "iclass": "notification_content",
                "aclass": "notification_content_left",
                "content": "The printer includes an automatic Wireless Setup Mode that makes it easy to connect the printer to a wireless network that has a router. However, turning on Wi-Fi Direct will turn off this Wireless Setup Mode. Do you still want to turn on Wi- Fi Direct ? ",
                "id": "Notification-with-button"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><span class='notification_content'>" + f.content + "</span></div><div class='notificationimgcontainer'> <button class='notification_yes_but'>YES</button><button class='notification_no_but'>NO</button></div>");
        });
    };



    $.fn.processingscreen = function (options) {
        var data = {
            "items": [{
                "iclass": "processing_screen",
                "aclass": "process_content",
                "content1": "Printing...",
                "content2": "Printing complete!",
                "url1": "./images/Icons_SVG/u17.png",
                "id": "processing_screen"
            }]
        };
        $.each(data.items, function (i, f) {
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
                "url1": "./images/Icons_SVG/u17.png",
                "id": "Print_btn_processing_screen"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class='processcontainer'> <img class='process_img' src=" + f.url1 + "></div><div class=" + f.aclass + "><div class='show'><input type='text' id='processtext'></div>");
        });
    };

    $.fn.notificationconnection_method = function (options) {
        var data = {
            "items": [{
                "iclass": "help_processing_screen",
                "aclass": "help_process_content",
                "content": "You can control how people connect to the printer using Wi-Fi Direct: • Automatic: Allows any mobile device to connect to the printer.• Manual: Either prompts for a button to be pressed on the printer control panel or displays an 8-digit PIN that must be entered on the mobile device. This option is more secure than the Automatic option.",
                "content1": "Connection Method Help<br>",
                "url1": "./images/Icons_SVG/u17.png",
                "url": "./images/Icons_SVG/done_m.svg",
                "id": "Print_nottificationmethod_screen"
            }]
        };
        $.each(data.items, function (i, f) {
            $('#' + f.id + '').append("<div class=" + f.aclass + "><img class='helpsection' src=" + f.url1 + "><span class='helpsec_content'>" + f.content1 + "</span><span class='notification_content'>" + f.content + "</span></div><div class='notificationimgcontainer'> <img class='helpcheck_icon' src=" + f.url + "></img></div>");
        });
    };



}(jQuery));