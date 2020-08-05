$(document).ready(function () {
    let marquee = document.getElementById('multiSendMarq');
    marquee.stop();
    $("#multiFax").draggable({ axis: "x", containment: '.overflow', scroll: false });

    $(".Copying-txt, .Printing-txt, .Complete-txt, .cancel-fax").css("display", "none");
    $(".Dialing-txt,.Connecting-txt,.Scanning,.Faxing-page,.Fax-sent, .Faxing-pagenext").css("display", "none");

    /**** The Send to Recipients marquee pasue and running start */
    $(".fax-check-child1").attrchange({
        trackValues: true, // set to true so that the event object is updated with old & new values
        callback: function (evnt) {
            let marquee = document.getElementById('multiSendMarq');
            marquee.stop();
            if (evnt.attributeName == "style") { // which attribute you want to watch for changes
                if (evnt.newValue.search(/inline/i) == -1) {
                    if ($(".slidetext-content1").hasClass("active")) {
                        marquee.stop();
                        marquee.start();
                    } else {
                        marquee.stop();
                    }
                }
            }
        }
    });
    /**** The Send to Recipients marquee pasue and running end */

    function delayScanMode() {
        $(".option-landing-scanmode").hide();
        $(".option-landing").hide();
        $(".option-landing-sides").hide();
        $(".option-landing-color").hide();
        $(".option-landing-resize").hide();
        $(".option-landing-bright").hide();
        $(".Wifi-Connection-Method").hide();
        $(".option-landing").css({ "margin-left": "80px" });
        $(".Settings-network-Section").hide();
        $(".Settings-wifi-Section").hide();

        setTimeout(function () {
            let cscreen = activScreen_history[activScreen_history.length - 1];
            $topShade.css("background", "linear-gradient( to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.05) 95%, rgba(0, 0, 0, 0) 100%)");
            $(".option-landing, .option-content").addClass('transitionLR-reload').show();
            $(".option-landing").animate({ "margin-left": "0px" }, 300);
            $(".option-landing").css({ opacity: "1", visibility: "visible" });
            setTimeout(function () {
                $("" + cscreen + " .option-function").addClass('opacity-view').show();
            }, 500);
        }, 300);
    }

    /**** Option page Setbright Click event Starts here */
    $(".setBright").click(function (event) {
        history_details.pop();
        if ($("#brightCount").val() != "") {
            setTimeout(function () {
                activScreen_history = activScreen_history.slice(0, -1);
            }, 100);
            $("#bright").find("span").text($("#brightCount").val());
            $(".option-landing .optionli").css("margin-top", "-360px");
            $hiLightCopy.css({ "background-color": "unset", "border": "4px solid rgb(255, 255, 255)" })
            $(".option-landing .option-content").css({ "margin-left": "0px" });
            setTimeout(function () {
                $hiLightCopy.show();
                setTimeout(function () {
                    historyActiveScreen();
                    $hiLightCopy.animate({ "width": "658px", "margin-left": "19px" }, 600);
                    $(".option-landing-bright").css({ opacity: "0", position: "fixed" });
                    $(".option-landing-bright").hide();
                    setTimeout(delayScanMode, 300);
                }, 400);
            }, 500);
        }
    });
    /**** Option page Setbright Click event Ends here */

    /**** Option page Checkbox Click event Starts here */
    $(".check-box-list li").click(function (event) {
        history_details.pop();
        $(".option-landing-scanmode ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list li input[type=checkbox]").each(function () {
            var $this = $(this);
            if ($this.is(':checked')) {


                if (
                    $(this).val() === "Document" ||
                    $(this).val() === "Photo" ||
                    $(this).val() === "ID Card"
                ) {

                    activateOptionLanding();
                    setTimeout(function () {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);

                    $("#scan").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "0px");
                    $(".option-landing-scanmode").css({ opacity: "1" });
                    setTimeout(function () {
                        $(".option-landing-scanmode .option-function").hide();
                        setTimeout(function () {
                            $(".option-landing-scanmode .option-content").animate({ "margin-left": "2.162em" },
                                600
                            );
                            historyActiveScreen();
                            setTimeout(delayScanMode, 300);
                        }, 300);
                    }, 500);
                }
            }
        });

    });
    $(".check-box-list1 li").click(function (event) {
        history_details.pop();
        $(".option-landing-sides ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list1 li input[type=checkbox]").each(function () {

            var $this = $(this);
            if ($this.is(':checked')) {

                if (
                    $(this).val() === "1 to 1-Sided" ||
                    $(this).val() === "1 to 2-Sided"
                ) {

                    activateOptionLanding();
                    setTimeout(function () {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#sides").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-90px");
                    $(".option-landing-sides").css({ opacity: "1" });
                    setTimeout(function () {
                        $(".option-landing-sides .option-function").hide();
                        setTimeout(function () {
                            $(".option-landing-sides .option-content").animate({ "margin-left": "2.162em" },
                                600
                            );
                            historyActiveScreen();
                            setTimeout(delayScanMode, 300);
                        }, 300);
                    }, 500);
                }
            }
        });
    });
    $(".check-box-list2 li").click(function (event) {
        history_details.pop();
        $(".option-landing-color ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list2 li input[type=checkbox]").each(function () {

            var $this = $(this);
            if ($this.is(':checked')) {
                if (
                    $(this).val() === "Automatic" ||
                    $(this).val() === "Color" ||
                    $(this).val() === "Grayscale"
                ) {
                    activateOptionLanding();
                    setTimeout(function () {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#color").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-180px");
                    $(".option-landing-color").css({ opacity: "1" });
                    setTimeout(function () {
                        $(".option-landing-color .option-function").hide();
                        setTimeout(function () {
                            $(".option-landing-color .option-content").animate({ "margin-left": "2.162em" },
                                600
                            );
                            historyActiveScreen();
                            setTimeout(delayScanMode, 300);
                        }, 300);
                    }, 500);
                }
            }
        });
    });
    $(".check-box-list3 li").click(function (event) {
        history_details.pop();
        $(".option-landing-resize ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list3 li input[type=checkbox]").each(function () {

            var $this = $(this);
            if ($this.is(':checked')) {
                if (
                    $(this).val() === "None" ||
                    $(this).val() === "Custom" ||
                    $(this).val() === "Fit to Page"
                ) {

                    activateOptionLanding();
                    setTimeout(function () {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#resize")
                        .find("span")
                        .text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-270px");
                    $(".option-landing-resize").css({ opacity: "1" });
                    setTimeout(function () {
                        $(".option-landing-resize .option-function").hide();
                        setTimeout(function () {
                            $(".option-landing-resize .option-content").animate({ "margin-left": "2.162em" },
                                600
                            );
                            historyActiveScreen();
                            setTimeout(delayScanMode, 300);
                        }, 300);
                    }, 500);
                }
            }
        });
    });
    $(".check-box-list-wifiConnectMethod li").click(function (event) {
        history_details.pop();
        $(".Wifi-Connection-content ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list-wifiConnectMethod li input[type=checkbox]").each(function () {

            var $this = $(this);
            if ($this.is(':checked')) {
                if (
                    $(this).val() === "Automatic" ||
                    $(this).val() === "Manual"
                ) {
                    activateOptionLanding();
                    setTimeout(function () {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#conn_method").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-180px");
                    $(".Wifi-Connection-content").css({ opacity: "1" });
                    $(".processing_screen").processingscreen([{
                        "iclass": "processing_screen",
                        "aclass": "process_content",
                        "content1": "Printing...",
                        "content2": "Printing complete!",
                        "url1": "./images/Icons_SVG/done_m.svg",
                        "id": "processing_screen"
                    }]);
                    setTimeout(function () {
                        $(".Wifi-Connection-Method .option-function").hide();
                        $(".help_icon_container").css({ opacity: "0" });
                        setTimeout(function () {
                            // $(".Wifi-Connection-Method .option-content").animate({ "margin-left": "2.162em" },
                            //     300
                            // );
                            $(".Wifi-Connection-Method").hide(00);
                            $(".hi-light-copy").hide();
                            $(".Top-shade, .Bottom-shade").hide();
                            $(".back-btn").addClass("disabledbutton");
                            $(".back-btn").css('opacity', '0');
                            historyActiveScreen();

                            $(".processing_screen").show();
                            var printvalue = document.getElementById("printprocesstext");
                            document.getElementById("printprocesstext").value = '';
                            setTimeout(greet1, 100);

                            function greet1() {
                                printvalue.value = 'Changing to ' + $this.val() + '';
                                setTimeout(greet2, 4000);
                            }
                            function greet2() {
                                $settingwifisection.removeClass("anim-txt");
                                $("#conn_method").css({ opacity: '0' });
                                setTimeout(function () {
                                    $(".processing_screen").hide();
                                    $settingwifisection.show(00).css('opacity', '1');
                                    $(".back-btn").css('opacity', '1');
                                    $(".Settings-wifi-Section").animate({ "margin-left": "0px" }, 300);
                                    // $(".Settings-wifi-Section").css("margin-left", "0px");
                                    // $settingwifisection.addClass('anim-txt').show(00).css('opacity', '1');
                                    // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
                                    // $(".Settings-network-Section").addClass('anim-disappear').hide(100).removeClass('anim-txt');
                                    $("#wifislider").css({ opacity: '1', right: '60px' });
                                    $(".hi-light-copy").show();
                                    $(".Top-shade, .Bottom-shade").show();
                                    $(".back-btn").removeClass("disabledbutton");
                                    setTimeout(function () {
                                        $("#conn_method").css({ opacity: '1' });
                                    }, 300);
                                }, 200);
                            }
                        }, 300);
                    }, 500);
                }
            }
        });
    });
    /**** Option page Checkbox Click event Ends here */

});
var $colorink = $(".colorink-section");
var $colorinksectionlanding = $(".colorink-section-landing");
var $colorinkmegsectionlanding = $(".colorink-meg-section-landing");
var $colorinksectionsecondlanding = $(".colorink-section-second-landing");
var $example1 = $(".example1");
var $Notificationwithicon = $(".Notification-with-icon");
var $processingscreen = $(".processing_screen");
var $example2 = $(".example2");
var $example3 = $(".example3");
var $faxSection = $(".Fax-Section");
var $settingwifisection = $(".Settings-wifi-Section");
var $menuSection = $(".Menu-Section");
var $SettingsSection = $(".Settings-Section");
var $SettingsNetworkSection = $(".Settings-network-Section");
var $SettingswificonfirmSection = $(".Settings-wifi-confirm-Section");
var $optionLandingScanmode = $(".option-landing-scanmode");
var $optionLandingSides = $(".option-landing-sides");
var $optionLandingColor = $(".option-landing-color");
var $optionLandingResize = $(".option-landing-resize");
var $optionLandingBright = $(".option-landing-bright");
var $faxKeyboardSection = $(".fax-keyboard-section");
var $faxContentConfirm = $(".Fax-content-confirm");
var $faxContentAddRecipient = $(".Fax-content-add-recipient");
var $faxKeyboardConfirmSection = $(".fax-keyboard-confirm-section");
var $sendToContact = $(".Send-to-contact");
var $faxAnimation = $(".fax-animation");
var $hiLightCopy = $(".hi-light-copy");
var $scrollspy = $(".scrollspy");
var $topShade = $(".Top-shade");
var $bottomShade = $(".Bottom-shade");
var $cancelBtn = $(".Cancel-btn");
var $backBtn = $(".back-btn");

$(document).ready(function () {
    $(".Print_btn_processing_screen").hide();
    $(".Help_nottificationmethod_screen").hide();
    $(".Received-Fax-Section").hide();
    $(".Notification-with-button").hide();
    $(".Received_stored_fax").hide();
    $(".icon-round").hide();
    $(".second-Row").hide();
    $(".third-Row").hide();
    $(".copy-frame").hide();
    $(".Copy-Section").hide();
    $(".Scan-Section").hide();
    $(".icon-rt ").hide();
    $(".example4").hide();
    $(".Dot-Section1").hide();
    $(".Dot-Section").hide();
    $(".loading-c").hide();
    $(".done-button").hide();
    $(".done-but-tick1").hide();
    $(".Copy-child-Section").hide();
    $(".Main-content").hide();
    $(".Print-content-color").hide();
    $(".Print-content-color .example3").hide();
    $(".Send-to-contact .Copy-Content").hide();
    $(".Dot-Section .Cancel-copy").hide();
    $(".option-landing").css("display", "none");
    $(".option-landing-firstpage").hide();
    $(".optionli-child2").hide();
    $(".optionli-child3").hide();
    $(".done-but-round").hide();
    $(".show .show-line").hide();
    $(".Settings-Section ").hide();
    $(".icon-cancel .Cancel-btn").css("opacity", "0");
    $(".Wifi-Connection-Method").hide();
    $(".Settings-network-Section").hide();
    $(".Settings-wifi-Section").hide();
    $(".ink-level-section").hide();
    $colorink.hide();
    $colorinksectionlanding.hide();
    $colorinkmegsectionlanding.hide();
    $colorinksectionsecondlanding.hide();
    $faxContentAddRecipient.hide();
    $processingscreen.hide();
    $Notificationwithicon.hide();
    $faxKeyboardConfirmSection.hide();
    $sendToContact.hide();
    $settingwifisection.hide();
    $faxAnimation.hide();
    $optionLandingScanmode.hide();
    $optionLandingSides.hide();
    $optionLandingColor.hide();
    $optionLandingResize.hide();
    $optionLandingBright.hide();
    $example3.hide();
    $example2.hide();
    $faxSection.hide();
    $menuSection.hide();
    $SettingsSection.hide();
    $SettingsNetworkSection.hide();
    $SettingswificonfirmSection.hide();
    $faxKeyboardSection.hide();
    $faxContentConfirm.hide();
    /*Add Recipient click button event starts here*/

    $(".Wifi-Connection-Method ul li, .Settings-wifi-Section ul li, .Settings-network-Section ul li, .Settings-Section ul li, .Menu-Section ul li").mouseover(function () {
        $hiLightCopy.css("border", "8px solid #FFFFFF");
    });
    $(".Wifi-Connection-Method ul li, .Settings-wifi-Section ul li, .Settings-network-Section ul li, .Settings-Section ul li, .Menu-Section ul li").mouseleave(function () {
        $hiLightCopy.css("border", "4px solid #FFFFFF");
    });

    $(".add-receipient").click(function () {
        history_details.push("showFaxaddreceipient()");
        activScreen_history.push(".Fax-content-add-recipient");
        $(".send-but").hide(0);
        $scrollspy.css("width", "600px");
        $hiLightCopy.animate({ width: "658px" }, 600);
        $(".Fax-content-add-recipient .fax-check-child0").css("margin-top", "0px");
        $(".Fax-content-add-recipient ul li").removeClass("active");
        $(".Fax-content-add-recipient .fax-check-child0").addClass("active");
        $faxContentConfirm.css("width", "696px;").removeClass("anim-txt").addClass("anim-disappear").hide(600);
        $faxContentConfirm.css("width", "696px");
        setTimeout(function () {
            $faxContentAddRecipient.css({ display: "block", left: '0' }).removeClass('anim-reappear-left-right').addClass("anim-txt").show(200);
            setTimeout(function () {
                historyActiveScreen("");
            }, 100);
        }, 300);
        let marquee = document.getElementById('multiSendMarq');
        marquee.stop();
    });
    /*Add Recipient click button event ends here*/
    $(".viewdetails").click(function () {
        if (history_details.indexOf("viewdetailsMode()") === -1) {
            history_details.push("viewdetailsMode()");
        }
        if (activScreen_history.indexOf(".Notification-with-icon") === -1) {
            activScreen_history.push(".Notification-with-icon");
        }
        activeScreen_help = 'viewDetailsHelp';
        // $(".Settings-wifi-Section").addClass("transitionLR-reload").hide(200);
        // $(".hi-light-copy").hide();
        // $(".Notification-with-icon").show();
        // $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '550px');
        // $(".down2").hide();
        // $(".help_icon_container").css('opacity', '1');
        setTimeout(function () {
            $(".Settings-wifi-Section").animate({ "margin-left": "-2.162em" }, 300);
            $(".notificationbuttoncontainer").css('opacity', '0');
            setTimeout(function () {
                $(".Settings-wifi-Section").hide();
                $(".hi-light-copy").hide();
                $(".Notification-with-icon").show();
                $(".notificationbuttoncontainer").css('opacity', '1');
                $(".viewdetails-content").addClass('anim-appear');

                $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '550px');
                $(".down2").hide();
                $(".help_icon_container").css({ opacity: '1', cursor: 'pointer' }).removeClass("disabledbutton");
            }, 300);
        }, 300);
    });
    $(".notification_yes_but").click(function () {
        $(".back-btn").css('opacity', '0');
        document.getElementById("processtext").value = '';
        printProcessing("on");
    });
    $(".notification_no_but").click(function () {
        // $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '696px');
        // $(".down2").show();
        // $(".back-btn").css('opacity', '0');
        // document.getElementById("processtext").value = '';
        // $("#wifiselect").removeAttr('checked');
        // printProcessing("off");
        activScreen_history.pop();
        sliderMode();
    });

    function printProcessing(status) {
        $(".Notification-with-button").hide();
        $(".back-btn").addClass("disabledbutton");
        setTimeout(function () {
            $(".Print_btn_processing_screen").show();
        }, 300);
        $(".copying-txt,.copying-txt1").hide();
        $(".Top-shade, .Bottom-shade").hide();
        setTimeout(function () {
            var printvalue = document.getElementById("processtext");
            printvalue.value = "Wi-Fi Direct is turning " + status;
            setTimeout(greet1, 2000);
        }, 1000)

    }

    function greet1() {
        // printvalue.value = "Printing completed successfully."
        setTimeout(greet2, 5000);
    }
    function greet2() {
        hidePrintProcessing();
    }

    function hidePrintProcessing() {

        setTimeout(function () {
            $(".menu-txt-head").css('opacity', '1');
            $("#wifislider").addClass('opacity-view').css('opacity', '1');
            $(".back-btn").show();
            $backBtn.css("opacity", "1");
        }, 300);
        // setTimeout(function () {
        //     $(".hi-light-copy").css('opacity', '0');
        //     $(".Settings-wifi-Section").hide().removeClass("anim-txt");
        //     $(".Notification-with-button").show(200);
        //     setTimeout(function () {
        //         $(".notification_content_left").addClass("anim-txt no-txt-wrap");
        //     }, 300);
        // }, 600);
        setTimeout(function () {
            $(".menu-txt-head").animate({ "margin-left": "0px" }, 300);
        }, 400);
        $(".back-btn").removeClass("disabledbutton");
        $(".copying-txt1").hide();
        $(".Print_btn_processing_screen").hide();
        $(".Notification-with-button").hide();
        $(".Settings-wifi-Section").css('opacity', '1').show();
        $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '696px');
        $(".Bottom-shade, .Top-shade, .hi-light-copy").show();
        $(".hi-light-copy").css('opacity', '1');
        history_details.pop();
        activScreen_history.pop();
    }

    $(".Cancel-btn").click(function () {

        clearTimeout(greet11);
        clearTimeout(greet22);
        if (activScreen_history[activScreen_history.length - 2] == '.Settings-wifi-Section') {

            $(".cancel_icon_container, .Cancel-btn").css({
                opacity: '0'
            }).addClass("disabledbutton");
            $(".processing_screen").show();
            document.getElementById("printprocesstext").value = '';
            var printvalue = document.getElementById("printprocesstext");

            setTimeout(greet, 100);
            function greet() {
                printvalue.value = "Cancelling..."
                setTimeout(greet2, 2000);
            }

            function greet2() {
                backtowifiscreen();
            }
        }
    });


    $(".Help-btn").click(function () {
        $(".help_icon_container").css('opacity', '0').addClass("disabledbutton");
        $(".Help_nottificationmethod_screen").hide();
        if (activeScreen_help == 'viewDetailsHelp') {

            $(".Help_nottificationmethod_screen").notificationconnection_method(help_notifications.viewDetailsHelp);
            $(".back-btn").addClass("disabledbutton");
            $(".back-btn").css('opacity', '.1');
            $(".Help_nottificationmethod_screen").show();
            $(".help_process_content").addClass('anim-appear');
            $(activScreen_history[activScreen_history.length - 1]).hide();
            $(".hi-light-copy").hide();
        } else if (activeScreen_help == 'connectionMethodHelp') {
            $(".Help_nottificationmethod_screen").notificationconnection_method(help_notifications.connectionMethodHelp);
            $(".back-btn").addClass("disabledbutton");
            $(".back-btn").css('opacity', '.1');
            $(".Help_nottificationmethod_screen").show();
            $(".help_process_content").addClass('anim-appear');
            $(activScreen_history[activScreen_history.length - 1]).hide();
            $(".hi-light-copy").hide();
        }


        // var printvalue = document.getElementById("notificationmethod");

        // setTimeout(greet2, 1000);


        // function greet2() {
        //     connectionmethod();
        // }
        // history_details.pop();
        // activScreen_history.pop();
    });
    function connectionmethod() {
        $(".Help_nottificationmethod_screen").hide();
        $(".Wifi-Connection-Method").show();
        $(".Bottom-shade, .Top-shade, .hi-light-copy").show();
    }

    var greet11;
    var greet22;
    $(".notification_img_print").click(function () {
        $(".back-btn").addClass("disabledbutton");
        $(".Notification-with-icon").hide();
        $(".help_icon_container, .back-btn").css('opacity', '0').addClass("disabledbutton");
        $(".cancel_icon_container, .Cancel-btn").css({
            opacity: '1', cursor: 'pointer'
        }).removeClass("disabledbutton");
        $(".processing_screen").show();

        $(".processing_screen").processingscreen([{
            "iclass": "process_img",
            "aclass": "process_content",
            "content1": "Printing...",
            "content2": "Printing completed successfully.",
            "url1": "./images/Gif-images/connectivity_globalprinting_animation.gif" + "?a=" + Math.random(),
            "id": "processing_screen"
        }]);
        document.getElementById("printprocesstext").value = '';
        var printvalue = document.getElementById("printprocesstext");
        $(".Bottom-shade, .Top-shade").hide();
        setTimeout(greet, 100);
        function greet() {
            printvalue.value = "Printing..."
            greet11 = setTimeout(greet1, 8000);
        }
        function greet1() {
            $(".cancel_icon_container, .Cancel-btn").addClass('disabledbutton').css({ opacity: '0', cursor: 'default' });
            printvalue.value = "Printing completed successfully."
            greet22 = setTimeout(greet2, 4500);
        }
        function greet2() {
            backtowifiscreen();
        }
        // history_details.pop();
        // activScreen_history.pop();
        // setTimeout(() => {
        //     var index = 0;
        //     var total = $("wifiprocess").size() - 1;
        //     setInterval(function () {
        //         var wifiprocess = $("wifiprocess:eq(" + index + ")");
        //         $("p.processtext").html(wifiprocess.text()).fadeIn("slow");
        //         if (index == total) {
        //             index = 0;
        //         } else {
        //             index++;
        //         }
        //     }, 1000);
        //     backtowifiscreen();
        // }, 3000);
    });

    function backtowifiscreen() {
        $(".back-btn").removeClass("disabledbutton");
        $(".Bottom-shade, .Top-shade").show();
        $(".cancel_icon_container, .Cancel-btn").css({ opacity: '0' }).addClass("disabledbutton");;
        $(".help_icon_container, .back-btn").css({ opacity: '1', cursor: 'pointer' }).removeClass("disabledbutton");
        $(".Notification-with-icon").show();
        $(".processing_screen").hide();
        // $(".cancel_icon_container, .Cancel-btn").css({ opacity: '0', cursor: 'pointer' });
    }
    $(".notification_img_setting").click(function () {
        $(".Settings-wifi-Section ul li").removeClass("active");
        $(".Settings-wifi-Section .child1").addClass("active");
        $(".Settings-wifi-Section .child1").css("margin-top", "0px");
        $(".Notification-with-icon").hide();
        $(".help_icon_container").css('opacity', '0').addClass("disabledbutton");
        // $(".Settings-wifi-Section").show();
        $settingwifisection.removeClass("anim-txt");
        $("#wifislider").css('opacity', '0');
        setTimeout(function () {
            $settingwifisection.show(00).css('opacity', '1');
            $(".Settings-wifi-Section").animate({ "margin-left": "0px" }, 300);
            setTimeout(function () {
                $("#wifislider").css('opacity', '1');
            }, 300);
            // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
            // $(".Settings-network-Section").addClass('anim-disappear').hide(100).removeClass('anim-txt');
            // $("#wifislider").css({ opacity: '1', right: '60px' });
        }, 300);
        $(".Bottom-shade, .Top-shade, .hi-light-copy").show();
        $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '696px');
        $(".down2").show();
        history_details.pop();
        activScreen_history.pop();
    });


    $("#backspace").click(function () {
        let marquee = document.getElementById('multiSendMarq');
        marquee.stop();
        history_details.push("showFaxbackspace()");
        if (activScreen_history.indexOf(".Fax-content-confirm") === -1) {
            activScreen_history.push(".Fax-content-confirm");
        }
        $(".Side-shade").show();
        var faxtxt = $(".display").val();
        var faxtext = $(".display").val();

        var multiFax = '';
        var multiplFax = '';
        $("#multiFax > span").each(function () {
            multiFax = multiFax + '<span class="fax-txt">' + $(this).text() + ' </span> ';
            multiplFax = multiplFax + '<span class="fax-txt1">' + $(this).text() + ' </span> ';
        });
        if ($("#display").val() != "") {
            var faxtxt = $("#display").val();
            if (faxtxt.charAt(0) === "+") {
                var faxFormat = faxtxt.substring(0, 4) + '-' + faxtxt.substring(3);
            } else {
                var faxFormat = faxtxt.substring(0, 3) + '-' + faxtxt.substring(3);
            }
            multiFax = multiFax + '<span class="fax-txt">' + faxFormat + ' </span> <span class="fax-txt">; </span>';
            multiplFax = multiplFax + '<span class="fax-txt1">' + faxFormat + ' </span> <span class="fax-txt1">; </span> ';
        }
        $faxKeyboardSection.removeClass("transitionBU").animate({ marginTop: "250px", opacity: "0", width: '696px' }, 300).hide(300);

        $hiLightCopy.animate({ width: "395px", marginTop: "74px", opacity: "1" }).addClass("anim-show-top-bot").show(00);
        $(".send-but").show(100);
        setTimeout(function () {
            $faxContentConfirm.css("display", "flex").show(600);
            $(".icon-rt").delay(100).css("display", "block");
            $(".icon-rt .done-but, .fax-send-count").css("display", "none");
            $scrollspy.css("width", "410px").show(600);
            $(".icon-rt .but-text").css("visibility", "visible");
            $faxContentConfirm.css({ width: "696px", display: "block" });
            $topShade.show();
            $bottomShade.show();
            $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
            $(".Fax-content-confirm .fax-txt-head-bind").html(multiFax);
            $(".fax-animation-count, .fax-animation-dialing").html(multiplFax);
            if ($('.Fax-content-confirm .fax-txt-head-bind > span').last().text().trim() === ';') {
                $('.Fax-content-confirm .fax-txt-head-bind > span').last().remove();
            }
            if ($('.fax-animation-count > span').last().text().trim() === ';') {
                $('.fax-animation-count > span').last().remove();
            }
            if ($('.fax-animation-dialing > span').last().text().trim() === ';') {
                $('.fax-animation-dialing > span').last().remove();
            }
            setTimeout(function () {
                historyActiveScreen("");
            }, 200);
            $("#multiFax").css({ "left": "0px" });
            setTimeout("document.getElementById('multiSendMarq').style.display = 'inline';", 400);

        }, 1000);


        setTimeout(function () {
            marquee.stop();
            marquee.start();
            setTimeout(function () {
                document.getElementById('multiSendMarq').style.display = 'block';
            }, 2200);
        }, 2000);



    });

    /*Send to contact click button event*/
    $(".send-to-cont1").click(function () {
        history_details.push("showFaxsendtocont()");
        $(".icon-rt .send-but").css("display", "none");
        $(".icon-rt .done-but").css("display", "none");
        $(".icon-rt .done-button").css("display", "none");
        $(".count-checkboxes-wrapper").css("opacity", "1");
        $faxContentConfirm.removeClass("anim-disappear");
        $sendToContact.removeClass("anim-disappear");
        $sendToContact.css("margin-top", "0px");
        $topShade.css("width", "500px");
        $(".Send-to-contact .Send-check-child1").css("margin-top", "0px");
        $(".Fax-Section .Fax-content").hide();
        $faxContentAddRecipient.addClass("anim-disappear").hide(300);
        $sendToContact.css("width", "485px");
        $faxContentConfirm.hide();
        $sendToContact.css("display", "block").addClass("anim-appear");
        $(".Send-to-contact .done-but").hide();
        $sendToContact.css("width", "696px");
        $hiLightCopy.animate({ width: "395px" }, 300);
    });

    $(".set-tick").click(function () {

        history_details.push("set_tick()");
        activScreen_history.push(".Fax-content-confirm");
        $hiLightCopy.animate({ width: "395px" }, 300);
        $scrollspy.css({ width: "410px" });
        $(".count-checkboxes-wrapper").css("opacity", "0");
        $faxContentConfirm.removeClass("anim-disappear");
        $faxContentAddRecipient.removeClass("anim-disappear");
        $(".Fax-content-confirm ul li").removeClass("active");
        $(".Fax-content-confirm .fax-check-child1").addClass("active");
        $(".fax-txt-head-bind .fax-txt").hide();
        setTimeout(function () {
            $faxContentConfirm.css({ display: "block", width: "380px" }).addClass("anim-txt");
        }, 600)
        $faxContentConfirm.css("display", "block").addClass("anim-txt");
        $sendToContact.removeClass("anim-txt").addClass("anim-disappear").hide(300);
        $(".fax-send-count").css("display", "block");
        $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
        $(".icon-rt .send-but, .icon-rt").css({ display: "block", width: "240px" }).addClass('opacity-view');
        $(".icon-rt .done-but").css("display", "none");
        $(".icon-rt .done-button").css("display", "none");
        setTimeout(function () {
            historyActiveScreen("");
        }, 400);
        let marquee = document.getElementById('multiSendMarq');
        marquee.stop();
        setTimeout("document.getElementById('multiSendMarq').style.display = 'inline';", 400);
        setTimeout(function () {
            marquee.stop();
            marquee.start();
            setTimeout(function () {
                document.getElementById('multiSendMarq').style.display = 'block';
            }, 1000);
        }, 1300);
    });

    $(".icon-rt .send-but").click(function () {
        $(".icon-rt, .hi-light-copy ").hide();
        $topShade.hide();
        $bottomShade.hide();
        $backBtn.css("opacity", "0");
        $(".cancel_icon_container").css({ opacity: "1" }).removeClass("disabledbutton");
        $cancelBtn.css({ opacity: "1", cursor: "pointer" }).removeClass("disabledbutton");
        $faxAnimation.show(500);
        $faxAnimation.css("overflow", "inherit");
        $faxKeyboardConfirmSection.css("width", "696px");

        function msgdisplay1() {
            $(".Dialing-txt").css({ display: "block", opacity: "1" });
        }

        function msgdisplay2() {
            $(".Dialing-txt").css({ display: "none", opacity: "0" });
            $(".Connecting-txt").css("display", "block");
        }

        function msgdisplay3() {
            $(".Connecting-txt").css("display", "none");
            $(".Dialing-txt").css("display", "none");
            $(".Scanning").css("display", "block");
        }

        function msgdisplay4() {
            $(".Connecting-txt").css("display", "none");
            $(".Dialing-txt").css("display", "none");
            $(".Scanning").css("display", "none");
            $(".Faxing-page").css("display", "block");

        }

        function msgdisplay5() {
            $(".Connecting-txt").css("display", "none");
            $(".Dialing-txt").css("display", "none");
            $(".Scanning").css("display", "none");
            $(".Faxing-page").css("display", "none");
            $(".Faxing-pagenext").css("display", "block");
        }


        function msgdisplay6() {
            $(".Connecting-txt").css("display", "none");
            $(".Dialing-txt").css("display", "none");
            $(".Scanning").css("display", "none");
            $(".Faxing-page").css("display", "none");
            $(".Faxing-pagenext").css("display", "none");
            $(".Fax-sent").css("display", "block");
        }
        setTimeout(msgdisplay1, 1000);
        setTimeout(msgdisplay2, 3000);
        setTimeout(msgdisplay3, 6000);
        setTimeout(msgdisplay4, 8000);
        setTimeout(msgdisplay5, 9000);
        setTimeout(msgdisplay6, 11000);

        $faxContentConfirm.hide();
        $(".icon-cancel .Cancel-btn").click(function () {
            $cancelBtn.css("opacity", "0").addClass("disabledbutton");
            $(".cancel_icon_container").css({ opacity: '0', cursor: 'auto' });
            $(".fax-animation .show").hide();
            $(".fax-animation-content .cancel-fax").css("display", "block").show(2000);
            setTimeout(function () {
                $(".Print-content-landing").css("display", "block");
                $(".fax-gif-anim").hide();
            }, 4000);
            setTimeout(function () {
                $(".Main-content").hide();
                location.reload();
            }, 2000);

        });

        setTimeout(faxanimation, 12500);
    });

    function faxanimation() {
        $(".fax-gif-anim").hide();
        $cancelBtn.css("opacity", "0").addClass("disabledbutton");;
        $(".cancel_icon_container").css({ opacity: '0', cursor: 'auto' });
        $(".fax-animation, .Print-content-container").hide();
        location.reload();

    }

    $(".fax-keyboard-confirm-section .done-but").click(function () {
        $(".fax-keyboard-confirm-section .hi-light-copy").hide();
        $(".fax-keyboard-confirm-section .done-but").hide();
        $topShade.hide();
        $bottomShade.hide();
        $faxContentConfirm.hide();
        $faxAnimation.show();
        setTimeout(faxlanding, 12700);
    });

    function faxlanding() {
        $hiLightCopy.css("width", "660px");
        $(".done-but").hide();
        $faxAnimation.hide();
        $faxSection.show();
        $(".fax-keyboard-confirm-section .hi-light-copy").show();
        $(".fax-keyboard-confirm-section .done-but").show();
        $faxKeyboardConfirmSection.hide();
        $topShade.show();
        $bottomShade.show();
        $faxContentConfirm.hide();
    }

    $(".send-contact").click(function () {
        history_details.push("send_contact()");
        if (activScreen_history.indexOf(".Send-to-contact") === -1) {
            activScreen_history.push(".Send-to-contact");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        $('.Fax-Section').animate({ left: '-80px', opacity: '0' }, 300, function () { }).hide(300);
        $hiLightCopy.animate({ width: '545px' });
        $topShade.css("width", "600px");
        setTimeout(function () {
            $sendToContact.removeClass('anim-txt-reverse');
            $sendToContact.addClass('anim-txt').show(0);
            $(".count-checkboxes-wrapper").addClass('opac-view').show(300);
            historyActiveScreen("");

            $(".fax-keyboard-confirm-section .done-but").animate({ opacity: '1' }).show(300);
        }, 100);
    });
    $(".Supplies").click(function () {
        history_details.push("supplies_his()");
        if (activScreen_history.indexOf(".colorink-section") === -1) {
            activScreen_history.push(".colorink-section");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        $(".colorink-section").addClass('anim-top-bottom').removeClass('anim-bot-top').show();
        $(".Menu-Section").removeClass('anim-txt').hide(00);
        $hiLightCopy.hide(00);
        $(".Top-shade ,.Bottom-shade").hide();
    });

    $(".tickimg").click(function () {
        history_details.push("tickimg_his()");
        if (activScreen_history.indexOf(".colorink-section-second-landing") === -1) {
            activScreen_history.push(".colorink-section-second-landing");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        $(".colorink-section").addClass('anim-top-bottom').removeClass('anim-bot-top').show();

        $(".colorink-section-second-landing").hide();
        $hiLightCopy.hide(00);
        $(".Top-shade ,.Bottom-shade").hide();
    });
    $(".cimg").click(function () {
        history_details.push("cimg_his()");
        if (activScreen_history.indexOf(".colorink-section-landing") === -1) {
            activScreen_history.push(".colorink-section-landing");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        $(".colorink-section").removeClass('anim-top-bottom').hide(100);
        $(".colorink-section-landing").show();
        $(".colorink-section-landing-content, #colorink-section-landing").hide();
        setTimeout(function () {
            $(".colorink-section-landing-content").addClass('opacity-view').show();
        }, 300);
        setTimeout(function () {
            $("#colorink-section-landing").addClass('anim-txt').show();
        }, 300);
        $hiLightCopy.hide(00);
        $(".Top-shade ,.Bottom-shade").hide();
    });

    $(".mimg").click(function () {
        history_details.push("mimg_his()");
        if (activScreen_history.indexOf(".colorink-section") === -1) {
            activScreen_history.push(".colorink-section");
        }
        $(".colorink-section").removeClass('anim-top-bottom').hide(100);
        $(".colorink-meg-section-landing").show();
        $(".colorink-meg-section-landing-content, #colorink-meg-section-landing-content").hide();
        setTimeout(function () {
            $(".colorink-meg-section-landing-content").addClass('opacity-view').show();
        }, 300);
        setTimeout(function () {
            $("#colorink-meg-section-landing").addClass('anim-txt').show();
        }, 300);
        $hiLightCopy.hide(00);
        $(".Top-shade ,.Bottom-shade").hide();
    });

    $(".colorinktickimg").click(function () {
        history_details.push("colorinktickimghis()");
        if (activScreen_history.indexOf(".colorink-section-landing") === -1) {
            activScreen_history.push(".colorink-section-landing");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        setTimeout(function () {
            $(".colorink-section-landing-content").removeClass('opacity-view').hide(300);
        }, 300);
        setTimeout(function () {
            $(".colorink-section-landing").hide(100);
            $(".colorink-section-second-landing").show(100);
        }, 300);
        $hiLightCopy.hide(00);
        $(".Top-shade ,.Bottom-shade").hide();
    });
    $(".send-to-cont").click(function () {
        history_details.push("showFaxsendtocont()");
        activScreen_history.push(".Send-to-contact");
        $faxContentAddRecipient.addClass("anim-disappear").animate({ left: '-80px' }, { opacity: '0' }).hide(00);
        $hiLightCopy.css("width", "545px");
        $faxSection.addClass("anim-disappear").hide(300);
        $topShade.css("width", "500px");
        setTimeout(function () {
            $sendToContact.removeClass("anim-disappear").show(300);
        }, 300);
        $(".count-checkboxes-wrapper").css("opacity", "1").addClass('opacity-view');
        $(".fax-keyboard-confirm-section .done-but").show();
        $(".count-checkboxes-wrapper").show(300);
        setTimeout(function () {
            historyActiveScreen("");
        }, 100);
    });

    $(".menu-num li").click(function () {
        var selText = $(this).text();
        $(".copy-num").css("margin-top", "-8px");
        $(this).addClass("active");
        $example1.find(".copy-num").html('<span class="copy-left-side"><img class="copy-icon" src="./images/Icons_SVG/Mask Group 2.svg"><span class="copy-txt">Copies</span></span><span class="copy-right-side">' + selText + '</span>');
    });

    function onScreenEntryOptions() {
        $(".option-content").animate({ marginLeft: "0px" }, 600);

        setTimeout(function () {

            $(".option-content").css({ opacity: "1", visibility: "visible" });

        }, 600);
        setTimeout(function () {

            $(".option-function").show(300);
            $(".option-function").css({ opacity: "1", visibility: "visible" }, 400);

        }, 600);
    }
    /*Option landing page list click button event Starts here*/
    $(".option-landing ul .option-scan").click(function (event) {
        if (history_details.indexOf("delayScanMode2()") === -1) {
            history_details.push("delayScanMode2()");
        }
        if (activScreen_history.indexOf(".option-landing-scanmode") === -1) {
            activScreen_history.push(".option-landing-scanmode");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function () {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(10);
            setTimeout(function () {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-scanmode .optionli-scan-child1").css("margin-top", "-100px");
        $optionLandingScanmode.css({ opacity: "0.3", position: "fixed" });
        setTimeout(function () {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing .option-function").removeClass('transitionLR-reload');
            $(".option-landing-scanmode .option-function").removeClass('transitionLR-reload');
            $optionLandingScanmode.css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function () {
            $optionLandingScanmode.show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
            historyActiveScreen("");
        }, 900);
        setTimeout(function () {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-scanmode .option-content").addClass('anim-appear');
            setTimeout(function () {
                $optionLandingScanmode.css({ opacity: "1" });
            }, 600);
        }, 900);
        if ($("#scan span").text() === "Document") {
            $(".optionli-scan-child1").css('margin-top', '-100px');
            $("#trigger-scan1").css("checkbox", "checked");
        } else if ($("#scan span").text() === "Photo") {
            $(".optionli-scan-child1").css("margin-top", "-190px");
        } else if ($("#scan span").text() === "ID Card") {
            $(".optionli-scan-child1").css("margin-top", "-280px");
        }
    });

    $(".option-landing ul .option-sides").click(function (event) {
        if (history_details.indexOf("delayScanMode2()") === -1) {
            history_details.push("delayScanMode2()");
        }
        if (activScreen_history.indexOf(".option-landing-sides") === -1) {
            activScreen_history.push(".option-landing-sides");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function () {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide();
            setTimeout(function () {
                $(".option-landing").css({ "margin-left": "-82.162em" });
            }, 300);
        }, 600);

        $(".option-landing-sides .optionli-land-child1").css("margin-top", "-21px");
        $optionLandingSides.css({ opacity: "0.3", position: "fixed" });
        $(".option-landing-sides .option-function").css({ visibility: "hidden" });
        setTimeout(function () {
            $(".option-content").css({ "margin-left": "2.162em" });
            $optionLandingSides.css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function () {
            $optionLandingSides.show();
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function () {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-sides .option-content").addClass('anim-appear');
            setTimeout(function () {
                $(".option-landing-sides .option-function").css({
                    visibility: "visible"
                });
                historyActiveScreen("");
                $optionLandingSides.css({ opacity: "1" });
            }, 600);
        }, 900);

        if ($("#sides span").text() === "1 to 1-Sided") {
            $(".optionli-land-child1").css("margin-top", "-21px");
        } else if ($("#sides span").text() === "1 to 2-Sided") {
            $(".optionli-land-child1").css("margin-top", "-109px");
        }
    });

    $(".option-landing ul .option-color").click(function (event) {
        if (history_details.indexOf("delayScanMode2()") === -1) {
            history_details.push("delayScanMode2()");
        }
        if (activScreen_history.indexOf(".option-landing-color") === -1) {
            activScreen_history.push(".option-landing-color");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function () {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" },
                600
            );
            $(".option-landing .option-function").hide();
            setTimeout(function () {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-color .optionli-scan-child1").css("margin-top", "-24px");
        $optionLandingColor.css({ opacity: "1", position: "fixed" });
        setTimeout(function () {
            $(".option-content").css({ "margin-left": "2.162em" });
            $optionLandingColor.css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function () {
            $optionLandingColor.show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function () {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-color .option-content").addClass('anim-appear');
            setTimeout(function () {
                $optionLandingColor.css({ opacity: "1" });
                historyActiveScreen("");
            }, 600);
        }, 900);

        if ($("#color span").text() === "Automatic") {
            $(".optionli-color-child1").css("margin-top", "-22px");
        } else if ($("#color span").text() === "Color") {
            $(".optionli-color-child1").css("margin-top", "-112px");
        } else if ($("#color span").text() === "Grayscale") {
            $(".optionli-color-child1").css("margin-top", "-202px");
        }
    });

    $(".option-landing ul .option-resize").click(function (event) {
        if (history_details.indexOf("delayScanMode2()") === -1) {
            history_details.push("delayScanMode2()");
        }
        if (activScreen_history.indexOf(".option-landing-resize") === -1) {
            activScreen_history.push(".option-landing-resize");
        }
        $(".option-landing").css({ opacity: "1" });
        setTimeout(function () {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide();
            setTimeout(function () {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-resize .optionli-resize-child1").css("margin-top", "0px");
        $optionLandingResize.css({ opacity: "1", position: "fixed" });
        setTimeout(function () {
            $(".option-content").css({ "margin-left": "2.162em" });
            $optionLandingResize.css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function () {
            $optionLandingResize.show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function () {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-resize .option-content").addClass('anim-appear');
            setTimeout(function () {
                $optionLandingResize.css({ opacity: "1" });
                historyActiveScreen("");
            }, 600);
        }, 900);

        if ($("#resize span").text() === "None") {
            $(".optionli-resize-child1").css("margin-top", "0px");
        } else if ($("#resize span").text() === "Custom") {
            $(".optionli-resize-child1").css("margin-top", "-90px");
        } else if ($("#resize span").text() === "Fit to Page") {
            $(".optionli-resize-child1").css("margin-top", "-180px");
        }
    });

    $(".option-landing ul .option-bright").click(function () {
        if (history_details.indexOf("setBright()") === -1) {
            history_details.push("setBright()");
        }
        if (activScreen_history.indexOf(".option-landing-bright") === -1) {
            activScreen_history.push(".option-landing-bright");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function () {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function () {
                $(".option-landing").css({ "margin-left": "-42.162em" });
                $("#bright-icon-txt").css('opacity', 0.5);
            }, 300);
        }, 600);


        setTimeout(function () {

            $hiLightCopy.css({ "background-color": "#ccc", "border": "1px solid #ccc" })
            $hiLightCopy.animate({ width: "395px", marginLeft: "145px", }, 400);

            $topShade.css('background', 'unset');
            setTimeout(function () {
                $optionLandingBright.css({ opacity: "1", position: "fixed" });
                $optionLandingBright.css({ "margin-left": "0px" });
                $optionLandingBright.show();
                $hiLightCopy.hide();
                $(".copy-drag-content").show();
                $("#bright-icon").attr("src", "./images/Icons_SVG/base-01.svg");
                if (!$(".thumb").hasClass("active")) {
                    $(".thumb").css({ 'height': '30px', 'width': '30px', 'top': '-30px', 'margin-left': '-7px', 'left': '160px' })
                    $(".thumb .value").text($("#brightCount").val());
                    $(".thumb").addClass("active");
                }

            }, 500);
            historyActiveScreen("");
        }, 600);

    });
    /*Option landing page list click button event ends here*/
    $("#brightCount").on('input', function () {
        if (parseInt($("#brightCount").val()) < 10 && parseInt($("#brightCount").val()) > 0) {
            $("#bright-icon-txt").css('opacity', 0 + "." + parseInt($("#brightCount").val()));
        } else if (parseInt($("#brightCount").val()) === 10) {
            $("#bright-icon-txt").css('opacity', 1);
        } else if (parseInt($("#brightCount").val()) === 0) {
            $("#bright-icon-txt").css('opacity', 0.1);
        }
    });

    $(".carousel-item.scan-icon").click(function () {
        $(".Landing-Page").hide(0);
        $(".Copy-Section").hide(50);
        $(".Scan-Section").show(10);
    });

    /**** Copy Mouse Event */
    $('.copy-page').on('mouseup mouseout', function () {
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_l.svg')");
    });

    $('.copy-page').mousedown(function () {
        if ($(this).hasClass("active")) {
            $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_pressed_l.svg')");
        };

    });
    /**** End Copy Mouse Event */

    /**** ID Mouse Event */
    $('.ID-Page').on('mouseup mouseout', function () {
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_l.svg')");
    });

    $('.ID-Page').mousedown(function () {
        if ($(this).hasClass("active")) {
            $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_pressed_l.svg')");
        };

    });

    /**** End ID Mouse Event */

    /**** Smarttask-Page Mouse Event */

    // $('.Smarttask-Page').on('mouseup mousedown mouseout', function () {
    //     $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    // });
    /**** End Smarttask-Page Mouse Event */

    /**** Menu Mouse Event */
    $('.Menu-Page').on('mouseup mouseout', function () {
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_l.svg')");

    });

    $('.Menu-Page').mousedown(function () {
        if ($(this).hasClass("active")) {
            $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_pressed_l.svg')");
        };

    });
    /**** End Menu Mouse Event */

    /**** Scan Mouse Event */
    $('.Scan-Page').on('mouseup mouseout', function () {
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_l.svg')");
    });

    $('.Scan-Page').mousedown(function () {
        if ($(this).hasClass("active")) {
            $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_pressed_l.svg')");
        };

    });
    /**** End Scan Mouse Event */

    /**** FAX Mouse Event */
    $('.Fax-Page').on('mouseup mouseout', function () {
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_l.svg')");

    });

    $('.Fax-Page').mousedown(function () {

        if ($(this).hasClass("active")) {
            $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_pressed_l.svg')");
        };
    });
    /**** End FAX Mouse Event */

    /**** FAX ADD Button Mouse Event */
    $('.fax-add-key img').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    $('.fax-add-key').on('mouseup mouseout', function () {
        $(".fax-add-key").css('background-color', '#555557');
        $('.fax-add-key').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    });

    $('.fax-add-key').mousedown(function () {
        $('.fax-add-key').css('background-color', "#fff")
        $('.fax-add-key').css('background-image', "url('./images/Icons_SVG/add_s_hover.svg')");
    });
    /**** End FAX ADD Button Mouse Event */

    /**** FAX Back Button Mouse Event */
    $('.fax-back-key').on('mouseup mouseout', function () {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });

    $('.fax-back-key').mousedown(function () {
        $('.fax-back-key').css('background-color', "#fff")
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s_hover.svg')");
    });
    /**** End FAX Back Button Mouse Event */

    $('.done-but-tick1').on('mouseup mouseout', function () {
        $('.done-but-tick1').attr('src', "./images/Icons_SVG/done_m.svg");
    });

    $('.copy-button .done-but-tick1').mousedown(function () {
        $('.copy-button .done-but-tick1').attr('src', "./images/Icons_SVG/done_m_hover.svg");
    });
    /**** End FAX Back Button Mouse Event */

    /**** Bright tick Button Mouse Event */
    $('.tick-btn').on('mouseup mouseout', function () {
        $('.tick-btn').attr('src', "./images/Icons_SVG/done_m.svg");
    });

    $('.tick-btn').mousedown(function () {
        $('.tick-btn').attr('src', "./images/Icons_SVG/done_m_hover.svg");
    });
    /**** Bright tick Button Mouse Event */


    /**** Copies tick Button Mouse Event */
    $('.fax-back-key').on('mouseup mouseout', function () {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });

    $('.fax-back-key').mousedown(function () {
        $('.fax-back-key').css('background-color', "#fff")
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s_hover.svg')");
    });
    /**** End Copies tick Button Mouse Event */


    /**** FAX next Button Mouse Event */
    $('.backbtn').on('mouseup mouseout', function () {
        $('.backbtn').css('background-image', "url('./images/Icons_SVG/send_s_hover.svg')");
        $(".backbtn").css('background-color', '#fff');
    });

    $('.backbtn').mousedown(function () {
        $('.backbtn').css('background-color', "#555557")
        $('.backbtn').css('background-image', "url('./images/Icons_SVG/send_s.svg')");
    });
    /**** End FAX Next Button Mouse Event */

    /**** FAX Add popup Mouse Event */
    $('.add_pop').on('mouseup mouseout', function () {
        $('.add_pop').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
        $(".add_pop").css('background-color', '#fff');
    });

    $('.add_pop').mousedown(function () {
        $('.add_pop').css('background-color', "#000")
        $('.add_pop').css('background-image', "url('./images/Icons_SVG/add_m_hover.svg')");
    });
    $('.number-new-num .add_pop').mouseover(function () {
        $('.number-new-num').css('background-color', "#ff0")
        $('.number-new-num .add_pop').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    });
    /**** End add_pop Button Mouse Event */

    /**** Backspace key Button Mouse Event start here */
    $('.backspance-keyb').mouseout(function () {
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_m.svg') left center");
    })
    $('.backspance-keyb').mousedown(function () {
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_pressed_m.svg') left center");
    });
    /**** Backspace key Button Mouse Event ends here */


    /**** Fax keypad Number Mouse Event start here */
    $('.number').css({ backgroundcolor: "#333333", color: '#fff' });
    $('.number').mouseout(function () {
        $(this).css('background-color', "#333333");
        $(this).css('color', "#fff");
        $('.fax-keys').css('color', "#8C8C8E");
    })
    $('.number').mousedown(function () {
        $(this).css('background-color', "#fff");
        $(this).css('color', "#000");
    });
    /**** Fax keypad Number Mouse Event ends here */
    $(".dummy_home").click(function (e) {
        $(".dummy_home").css('pointer-events', 'none');
        e.preventDefault();
    });
    /**** Landing page Copy page  Click event start here */
    $("#introduction .copy-page").click(function () {
        if (history_details.indexOf("showCopyLandingPage()") === -1) {
            history_details.push("showCopyLandingPage()");
        }
        if (activScreen_history.indexOf(".example1") === -1) {
            activScreen_history.push(".example1");
        }
        if ($(this).hasClass("active")) {
            $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_pressed_l.svg')");
            $scrollspy.css('width', '410px');
            $backBtn.css("opacity", "1");
            $backBtn.css("cursor", "pointer");
            $(".Smarttask-Page").animate({ zoom: ".3", opacity: ".1" }).hide(100);
            $(".Menu-Page").animate({ zoom: ".3", opacity: ".1" }).hide(100);
            $(".ID-Page").animate({ zoom: ".3", opacity: ".1" }).hide(100);
            $(".Scan-Page").animate({ zoom: ".3", opacity: ".1" }).hide(100);
            $(".indicators").removeClass("active");
            $(".indicators").animate({ zoom: ".5", opacity: ".1", left: "-250px" }).hide(100);
            $(".copy-page").animate({ opacity: "0", left: "-250px" }).hide(100);
            $(".Print-content-landing").hide(300);
            $(".Copy-Content .example1").css({ "margin-left": "2.162em" });
            $(".Copy-Content .example1").animate({ opacity: 1, left: "0px" }).hide(100);
            $(".copy-button .done-but").css({ width: "240px", height: "90px" });
            setTimeout(function () {
                $(".Landing-Page .Main-content").show(00);
                $(".Copy-Content .example1").show(00);
                $hiLightCopy.show(000);
                $(".icon-rt").css("display", "block");
                $(".send-but").css("display", "none");
            }, 400);
            setTimeout(function () {
                $(".Copy-Content .example1").animate({ "margin-left": "0px" }, 200);
                $(".Landing-Page .example1").css({ "visibility": "visible" });
                historyActiveScreen("");
                $(".icon-rt .but-text").css("visibility", "visible");
                $(".Landing-Page .example1 ul").animate({ "margin": "0px 40px" }, 200);
            }, 600);
        }
    });
    /**** Landing page Copy page  Click event Ends here */

    /**** Landing page Copy page Number Click event start here */
    $(".copy-num").click(function () {
        if (history_details.indexOf("showCopies1()") === -1) {
            history_details.push("showCopies1()");
        }
        if (activScreen_history.indexOf(".example2") === -1) {
            activScreen_history.push(".example2");
        }
        $('.swapMe-down .down1').css('pointer-events', 'none');
        $('.swapMe-up .up1').css('pointer-events', 'none');
        $hiLightCopy.animate({ width: "545px" }, 300);
        $scrollspy.css({ width: "534px" });
        $(".copy-button .done-but").animate({ width: "80px", height: "90px" }, 100);
        $(".copy-button .done-but").hide();
        $(".done-but-tick1").css('cursor', 'pointer');
        $(".Copy-Content .example1").addClass('anim-disappear').hide(300);
        $(".Copy-Content .example1").animate({ opacity: "0" }).hide(100);
        $(".copy-button .done-but-tick1").addClass('opacity-view').show(100);
        $(".copy-button .but-text").hide();
        $(".options").hide();
        $(".no-row").hide();
        $example3.hide();
        $example2.delay(1500).css('opacity', '1').addClass('anim-appear').show();
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
        setTimeout(function () {
            historyActiveScreen("");
        }, 1050);
    });
    /**** Landing page Copy page Number Click event Ends here */

    /**** Landing page Copy page Number select Click event start here */
    $(".Print-content-container .done-but-tick1").click(function () {

        $('.swapMe-down .down1').removeAttr("style");
        $('.swapMe-up .up1').removeAttr("style");
        $('.done-but').addClass('opacity-view').show();
        var selectedCopiea = $('.menu-num li.active').text();
        $(".Copy-Content .example1").removeClass('anim-disappear').show(300);
        $example1.find(".copy-num").html('<span class="copy-left-side"><img class="copy-icon" src="./images/Icons_SVG/Mask Group 2.svg"><span class="copy-txt">Copies</span></span><span class="copy-right-side">' + selectedCopiea + '</span>');
        doneButTick1();
        $("#Landing-copy-page").css({ left: "0px" });
        $scrollspy.css({ width: "410px" });
        history_details.pop();
        setTimeout(function () {
            activScreen_history = activScreen_history.slice(0, -1);
        }, 100);

    });
    /**** Landing page Copy page Number select Click event Ends here */

    /**** Landing page Copy page Number select Click event start here */
    function doneButTick1() {
        $hiLightCopy.animate({ width: "395px" }, 100);
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".copy-button .done-but").animate({ width: "240px", height: "90px" }, 100);
        $(".copy-num").css({ marginTop: '0px' })
        $(".copy-button .but-text").show(100);
        $(".copy-button .done-but-tick1").hide(0);
        $(".options").show();
        $(".copy-button .done-but").removeClass("move-me-2");
        $(".copy-button").show(10);
        $(".Print-content-container .example2").hide(100);
        $(".Print-content-container .example1").show(300);
        $(".Copy-Content .example1").animate({ opacity: "1" }).show(600);
        setTimeout(function () {
            historyActiveScreen("");
        }, 700);
    }
    /**** Landing page Copy page Number select Click event start here */

    /**** Landing page Menu page Click event start here */
    $(".Menu-Page").click(function () {
        if (history_details.indexOf("showMenuLandingPage()") === -1) {
            history_details.push("showMenuLandingPage()");
        }
        if (activScreen_history.indexOf(".Menu-Section") === -1) {
            activScreen_history.push(".Menu-Section");
        }
        $(".carousel-item .back-btn").css("cursor", "pointer");
        if ($(this).hasClass("active")) {
            $backBtn.css("opacity", "1");
            $(".Menu-Page").animate({ left: '-180px' }, { opacity: '0' }).hide(300);
            $(".Smarttask-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            $(".copy-page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            setTimeout(function () {
                $hiLightCopy.animate({ width: "658px" }, 600);
                $(".Main-content .Menu-Section").css("display", "block").addClass("anim-txt");
                $(".Landing-Page").show(10);
                $example1.css("display", "none");
                $(".Landing-Page .Main-content").show();
                $(".Main-content .Print-content-container").show();
                $(".Landing-Page .Print-content-landing").hide();
                setTimeout(menutxtlanding, 100);
            }, 300);
        }
    });

    function menutxtlanding() {
        historyActiveScreen("");
    }

    /**** Landing page Menu page Click event ends here */

    $(".menu-settings").click(function () {
        if (history_details.indexOf("settings_page()") === -1) {
            history_details.push("settings_page()");
        }
        if (activScreen_history.indexOf(".Settings-Section") === -1) {
            activScreen_history.push(".Settings-Section");
        }
        $(".Settings-Section .child1").addClass("active").css("margin-top", "0px");
        $SettingsSection.addClass('anim-txt').show(00).css('opacity', '1');
        // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
        $(".Menu-Section").removeClass('anim-txt').addClass('anim-re-left-right').hide(100);
        historyActiveScreen();
    });

    $(".menu-settings-network").click(function () {
        if (history_details.indexOf("settings_network_page()") === -1) {
            history_details.push("settings_network_page()");
        }
        if (activScreen_history.indexOf(".Settings-network-Section") === -1) {
            activScreen_history.push(".Settings-network-Section");
        }
        $(".Settings-network-Section .child1").addClass("active").css("margin-top", "0px");
        $SettingsNetworkSection.addClass('anim-txt').show(00).css('opacity', '1');
        // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
        $SettingsSection.removeClass('anim-txt').addClass('anim-re-left-right').hide(100);
        historyActiveScreen();
    });

    $(".wifiDirect").click(function () {
        $(".Settings-wifi-Section .child1").addClass("active").css("margin-top", "0px");
        if (history_details.indexOf("Settings_wifi_page()") === -1) {
            history_details.push("Settings_wifi_page()");
        }
        if (activScreen_history.indexOf(".Settings-wifi-Section") === -1) {
            activScreen_history.push(".Settings-wifi-Section");
        }
        $("#wifislider").css('opacity', '1').hide();
        $(".Settings-wifi-Section .menu-txt-head").css({ "margin-left": "2.162em" });
        $(".Settings-network-Section").addClass('anim-disappear').hide().removeClass('anim-txt');
        $settingwifisection.removeClass('anim-appear');

        $settingwifisection.css('opacity', '1').show(300);
        setTimeout(function () { $("#wifislider").show(); }, 300);
        $(".menu-txt-head").animate({ "margin-left": "0" }, 600);

        historyActiveScreen();
    });

    $('.WifiConnectMethod').click(function () {
        if (history_details.indexOf("connectionMethod()") === -1) {
            history_details.push("connectionMethod()");
        }
        if (activScreen_history.indexOf(".Wifi-Connection-Method") === -1) {
            activScreen_history.push(".Wifi-Connection-Method");
        }
        activeScreen_help = 'connectionMethodHelp';
        // $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function () {
            $(".Settings-wifi-Section").animate({ "margin-left": "-2.162em" }, 300);
            setTimeout(function () { $(".Settings-wifi-Section").hide(); }, 300);
        }, 300);
        $(".Wifi-Connection-Method .child1").css("margin-top", "-24px");
        $(".Wifi-Connection-Method").css({ opacity: "1", position: "fixed" });
        setTimeout(function () {
            $(".Wifi-Connection-Method .option-content").css({ "margin-left": "2.162em" });
            $(".Wifi-Connection-Method").css({ "margin-left": "0px" });
        }, 400);
        setTimeout(function () {
            $(".Wifi-Connection-Method").show();
            $(".Wifi-Connection-Method .option-function").css({ opacity: "1", visibility: "visible" });
        }, 700);
        setTimeout(function () {
            $(".Wifi-Connection-Method .option-content").animate({ "margin-left": "1px" }, 300);
            $(".Wifi-Connection-Method .option-content").addClass('anim-appear');
            $(".Wifi-Connection-Method .option-function").show();
            setTimeout(function () {
                $(".Wifi-Connection-Method").css({ opacity: "1" });
                $(".help_icon_container").css({ opacity: '1', cursor: 'pointer' }).removeClass("disabledbutton");
                historyActiveScreen("");
            }, 300);
        }, 400);

        if ($("#conn_method span").text() === "Automatic") {
            $(".Wifi-Connection-Method .child1").css("margin-top", "-22px");
        } else if ($("#conn_method span").text() === "Manual") {
            $(".Wifi-Connection-Method .child1").css("margin-top", "-112px");
        }
    });
    $("#wifiselect, .switch-2-sided").css('cursor', 'pointer');
    $('input[name="wifiselect"]').click(function () {
        if (history_details.indexOf("sliderMode()") === -1) {
            history_details.push("sliderMode()");
        }
        if (activScreen_history.indexOf(".Notification-with-button") === -1) {
            activScreen_history.push(".Notification-with-button");
        }
        $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '550px');
        $(".down2").hide();

        if ($("#wifiselect").prop("checked")) {

            let cscreen = activScreen_history[activScreen_history.length - 1];
            $(".menu-txt-head").animate({ "margin-left": "-2.162em" }, 300);
            setTimeout(function () {
                $(".menu-txt-head").css('opacity', '0');
                $("#wifislider").removeClass('opacity-view').css('opacity', '0');
            }, 300);
            setTimeout(function () {
                $(".hi-light-copy").animate({ opacity: '0' });
                $(".Settings-wifi-Section").hide().removeClass("anim-txt");
                $(".Notification-with-button").show(200);
                $("" + cscreen + " .notification_content_left, .notificationimgcontainer").css('opacity', '0');
                setTimeout(function () {
                    $("" + cscreen + " .notification_content_left").addClass("anim-appear6s breake-word").css('opacity', '1');
                    $(".notificationimgcontainer").css('opacity', '1');
                }, 300);
            }, 600);

        } else {
            $("#wifiselect").removeAttr('checked');
            $(".menu-txt-head").animate({ "margin-left": "-2.162em" }, 300);
            $backBtn.css("opacity", "0");
            setTimeout(function () {
                $(".menu-txt-head").css('opacity', '0');
                $("#wifislider").removeClass('opacity-view').css('opacity', '0');
            }, 300);
            setTimeout(function () {
                $(".hi-light-copy").animate({ opacity: '0' });
                $(".Settings-wifi-Section").hide().removeClass("anim-txt");
                // $(".Notification-with-button").show(200);
                // $(".notification_content_left").css('opacity', '0');
                // setTimeout(function () {
                //     $(".notification_content_left").addClass("anim-appear no-txt-wrap").css('opacity', '1');
                // }, 300);
            }, 100);
            // $settingwifisection.addClass('anim-txt').show(00).css('opacity', '0');
            // $(".Settings-wifi-Section").hide();
            // $(".hi-light-copy").hide();
            // $(".Top-shade, .Bottom-shade").hide();
            document.getElementById("processtext").value = '';
            printProcessing("off");
        }

    });

    /**** Landing page FAX page Click event start here */
    $(".Fax-Page").click(function () {

        if (history_details.indexOf("showFaxLandingPage()") === -1) {
            history_details.push("showFaxLandingPage()");
        }
        if (activScreen_history.indexOf(".Fax-content") === -1) {
            activScreen_history.push(".Fax-content");
        }
        $(".carousel-item .back-btn").css("cursor", "pointer");
        if ($(this).hasClass("active")) {
            $backBtn.css("opacity", "1");
            $(".Fax-Page").animate({ left: '-180px' }, { opacity: '0' }).hide(300);
            $(".Scan-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            $(".ID-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            setTimeout(function () {
                $hiLightCopy.animate({ width: "658px" }, 600);
                $(".Main-content .Fax-Section").css("display", "block").addClass("anim-txt");
                $(".Landing-Page").show(10);
                $example1.css("display", "none");
                $(".Landing-Page .Main-content").show();
                $(".Main-content .Print-content-container").show();
                $(".Landing-Page .Print-content-landing").hide();
                setTimeout(faxtxtlanding, 100);
            }, 300);
        }
    });
    /**** Landing page FAX page Click event ends here */

    function faxtxtlanding() {
        historyActiveScreen("");
    }

    /**** Landing page FAX KEy Pad Click event start here */
    $(".fax-number").click(function () {
        history_details.push("showFirstLandingPage()");
        activScreen_history.push(".fax-keyboard-section");
        $faxContentConfirm.removeClass('anim-disappear');
        $faxSection.removeClass('anim-reappear-left-right');
        $faxSection.addClass("anim-disappear");
        $scrollspy.css("width", "696px");
        $faxSection.hide();
        $topShade.hide();
        setTimeout(function () {
            $bottomShade.hide();
            $(".Side-shade").hide();
            $hiLightCopy.animate({ marginTop: "-80px", opacity: "0" }).hide(50);
        }, 300);

        setTimeout(faxkeyboard, 1000);
    });

    function faxkeyboard() {
        $hiLightCopy.animate({ marginTop: "-80px", opacity: "0" }).hide(50);
        $faxKeyboardSection.addClass("anim-appear-bot-top");
        $faxKeyboardSection.css({ opacity: "1", marginTop: "0px" }).show(100);
        $(".fax-keyboard-confirm-section .Fax-content-add-recipient").hide();
        $("#display").focus();
        let marquee = document.getElementById('multiSendMarq');
        marquee.stop();

    }
    /**** Landing page FAX KEy Pad Click event ends here */

    /**** Second Landing page Option Click event starts here */
    $(".options").click(function () {
        history_details.push("showOption()");

        if (activScreen_history.indexOf(".option-landing") === -1) {
            activScreen_history.push(".option-landing");
        }

        $(".done-but").hide();
        $example1.addClass("transitionLR");

        setTimeout(hideexample1, 600);
        $hiLightCopy.animate({ width: "658px" }, 600);
        setTimeout(hidebut, 700);
    });

    function hideexample1() {
        $example1.hide();
        $(".Print-content-container .option-landing").show();
        $(".option-landing").removeClass('transitionLR-reload');
        $(".option-landing .option-content").removeClass('transitionLR-reload');
        $(".option-landing .option-content").addClass('anim-txt').show(300);
        $(".option-landing .option-function").addClass('opacity-view').show(300);
        historyActiveScreen("");
        onScreenEntryOptions();
        $scrollspy.css({ width: "696px" });
    }

    function hidebut() {
        $(".icon-rt").hide(10);
    }
    /**** Second Landing page Option Click event ends here */

    /**** Cancel copy page Click event Starts here */
    $(".cancel_icon_container, .Cancel-btn").css({ opacity: '0' }).addClass("disabledbutton");;
    $(".copy-button .done-but").click(function () {
        $(".Print-content-container").hide(10);
        $topShade.hide(10);
        $bottomShade.hide(10);
        $cancelBtn.css({ opacity: "1", cursor: "pointer" }).removeClass("disabledbutton");
        $(".cancel_icon_container").css({ opacity: '1', cursor: 'pointer' }).removeClass("disabledbutton");
        $backBtn.css("opacity", "0");
        $(".Dot-Section").show();
        $(".show .show-line").hide();

        var rec_0 = $("rec:eq(" + 0 + ")");
        $("p.show-line").html(rec_0.text()).fadeIn("slow");
        var index = 0;
        var total = $("rec").size() - 1;
        setInterval(function () {
            var rec = $("rec:eq(" + index + ")");
            $("p.show-line").html(rec.text()).fadeIn("slow");
            if (index == total) {
                index = 0;
            } else {
                index++;
            }
        }, 4800);

        $cancelBtn.css("opacity", "1").click(function () {

            setTimeout(cancelcopying, 10);
        });

        setTimeout(explode, 14800);
    });

    function cancelcopying() {
        $(".Dot-Section .show").hide(00);
        $(".cancel_icon_container").css('opacity', '0');
        // $(".Dot-Section").hide(00);
        $(".Dot-Section .copy-gif-anim").hide(00);
        setTimeout(function () {
            $(".Cancel-copy").show();
        }, 200);
        $cancelBtn.css({ opacity: "0" }).addClass("disabledbutton");;
        $(".cancel_icon_container").css({ opacity: '0', cursor: 'auto' });
        setTimeout(nextscreen, 2000);
    }

    function explode() {
        $(".loading").hide();
        setTimeout(nextscreen, 2000);
    }

    function nextscreen() {
        location.reload();
        $bottomShade.hide();
        $(".Dot-Section").hide();
        $(".cancel_icon_container, .Cancel-btn").css({ opacity: '0' }).addClass("disabledbutton");
        $(".Print-content-container").hide();
    }
    /**** Cancel copy page Click event ends here */
    $("#return").click(function () {
        window.history.back();
    });

    $(".example3 .copy-color-2 li").click(function () {
        $example3.hide(100);
        $(".example4").show();
    });


    $(".Send-checkbox-faxlist li").click(function (event) {
        if ($(this).find('input[type=checkbox]').prop("checked")) {
            $(this).find('input[type=checkbox]:checked').removeAttr('checked');
        } else {
            $(this).find('input[type=checkbox]').attr("checked", "checked");
        }
        var $checkboxes = $('.Send-checkbox-faxlist input[name="set-input"]');
        var contactpersion = $checkboxes.filter(":checked").length;
        if ($("input.faxcheckbox").prop("checked")) {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            var countCheckedCheckboxess = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            var countCheckedCheckboxes1 = $checkboxes.filter(":checked").length;
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            if (contactpersion === 1) {
                $("#count-checked-checkboxes").hide();
                $("#Recipient-count").text($checkboxes.filter(":checked").val());
            } else if (contactpersion === 0) {
                $("#count-checked-checkboxes").show();
                $("#Recipient-count").text('');
            } else {
                $("#count-checked-checkboxes").show();
                $("#Recipient-count").text('Recipients');
            }
        } else {
            if (contactpersion === 1) {
                $("#count-checked-checkboxes").hide();
                $("#Recipient-count").text($checkboxes.filter(":checked").val());
            } else if (contactpersion === 0) {
                $("#count-checked-checkboxes").show();
                $("#Recipient-count").text('');
            } else {
                $("#count-checked-checkboxes").show();
                $("#Recipient-count").text('Recipients');
            }
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);

            var countCheckedCheckboxess = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            var countCheckedCheckboxes1 = $checkboxes.filter(":checked").length;
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            if (contactpersion === 0) { $("#count-checked-checkboxess").text(""); }
        }
        $checkboxes.change(function () {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            $("#edit-count-checked-checkboxes").val(countCheckedCheckboxes);
        });

    });


    /**** Swape Click event Starts here */
    $(".swapMe-up .up1").click(function () {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-container .scrollspy " + activeScreen + " .copy-num").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .no-first-row .num-first").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-scan-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + "  .Section-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child0").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .child1 ").animate({ 'marginTop': "-=90px" }); // Common
    });

    $(".swapMe-down .down1").click(function () {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-container .scrollspy " + activeScreen + " .no-first-row .num-first").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-scan-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + "  .fax-check-child0").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .child1 ").animate({ 'marginTop': "+=90px" }); // Common
    });
    $(".swapMe-up .up2").click(function () {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-container .scrollspy " + activeScreen + " .no-second-row .num-second").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + "  .fax-check-child0").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .child1 ").animate({ 'marginTop': "-=90px" }); // Common
    });
    $(".swapMe-down .down2").click(function () {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-container .scrollspy " + activeScreen + " .no-second-row .num-second").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-container .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child0").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .child1 ").animate({ 'marginTop': "+=90px" }); // Common
    });

    $(".swapMe-down").click(function () {
        $(".Print-content-container .scrollspy .copy-num").animate({ marginTop: "+=90px" });
    });

    $("span.up").click(function () {
        $(this).parent().insertBefore($(this).parent().prev());
    });

    $("span.down").click(function () {
        $(this).parent().insertAfter($(this).parent().next());
    });
    /**** Swape Click event Ends here */

    /**** Landing Page text event Starts here */
    $(".indicators .indicator-item").eq(1).text("Smart Tasks");
    $(".indicators .indicator-item").eq(0).text("Menu");
    $(".indicators .indicator-item").eq(2).text("Copy");
    $(".indicators .indicator-item").css({ width: "250px" });
    $(".indicators .indicator-item").eq(3).text("ID Copy");
    $(".indicators .indicator-item").eq(4).text("Scan");
    $(".indicators .indicator-item").eq(5).text("Fax");
    /**** Landing Page text event Ends here */
});

$(function () {
    height = $("#carousel .carousel-item").length + 1;

    width = $("#carousel .carousel-item").length;

    $.each($("#carousel .carousel-item"), function (key, value) {
        $(this).attr("id", key);
    });
});

$("#Landing-copy-page ul li, .option-landing ul li , .option-landing-scanmode ul li, .option-landing-sides ul li, .option-landing-color ul li,.option-landing-resize ul li").mouseover(function () {
    $hiLightCopy.css("border", "8px solid #FFFFFF");
});
$("#Landing-copy-page ul li, .option-landing ul li, .option-landing-scanmode ul li, .option-landing-sides ul li, .option-landing-color ul li,.option-landing-resize ul li").mouseleave(function () {
    $hiLightCopy.css("border", "4px solid #FFFFFF");
});

$(".done-but").mouseover(function () {
    if (!$(this).hasClass("move-me-2")) {
        $(".done-but").css({ "background-color": "#FFFFFF", color: "#000" });
    }
});
$(".done-but").mouseleave(function () {
    if (!$(this).hasClass("move-me-2")) {
        $(".done-but").css({ "background-color": "transparent", color: "#FFFFFF" });
    }
});

function load_faxpage() {
    setTimeout(function () {
        var carousel_items = document.querySelectorAll(".carousel-item").length;
        var middle_slide = 5;
        window.next = function () {
            var el = document.querySelector(".carousel");
            var l = M.Carousel.getInstance(el);
            l.next(1);
        };
        var elem = document.querySelector(".carousel");
        var instance = M.Carousel.getInstance(elem);
        instance.set(middle_slide);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var carousel_items = document.querySelectorAll(".carousel-item").length;
        var middle_slide = Math.round(carousel_items / 5);
        window.next = function () {
            var el = document.querySelector(".carousel");
            var l = M.Carousel.getInstance(el);
            l.next(1);
        };
        var elem = document.querySelector(".carousel");
        var instance = M.Carousel.getInstance(elem);
        instance.set(0);
    }, 1000);
});

$(".Fax-content ul li:hover").click(function () {
    $(".hi-light-copy hover").css("border", "8px solid #ffffff");
});


$(".Fax-content ul li, .Fax-content-confirm ul li, .Fax-content-add-recipient ul li, .Send-to-contact ul li").mouseover(function () {
    $(this).css("cursor", "pointer");
    $hiLightCopy.css("border", "8px solid #ffffff");

});
$(".Fax-content ul li, .Fax-content-confirm ul li, .Fax-content-add-recipient ul li, .Send-to-contact ul li").mouseout(function () {
    $(this).css("cursor", "pointer");
    $hiLightCopy.css("border", "4px solid #ffffff");
});




$('.swapMe-up').click(function () {

    if ($(activScreen_history[activScreen_history.length - 1]).css('display') == 'block' ||
        $(activScreen_history[activScreen_history.length - 1]).css('display') == 'flex') {

        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()) != "") {
            $(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().addClass("active").prev().removeClass("active");
        }
        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()) === "") {
            $('.swapMe-up').css('pointer-events', 'none');
        }
        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()) != "") {
            $('.swapMe-down').css('pointer-events', 'auto');
        }
    }
});
$('.swapMe-down').click(function () {

    if ($(activScreen_history[activScreen_history.length - 1]).css('display') == 'block' ||
        $(activScreen_history[activScreen_history.length - 1]).css('display') == 'flex') {

        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()) != "") {
            $(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().addClass("active").next().removeClass("active");
        }
        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()) === "") {
            $('.swapMe-down').css('pointer-events', 'none');
        }
        if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()) != "") {
            $('.swapMe-up').css('pointer-events', 'auto');
        }
    }

});

function helpcheck_icon() {
    // $("#helpcheck_icon").click(function () {
    $(".back-btn").removeClass("disabledbutton");
    $(".back-btn").css('opacity', '1');;
    $(".Help_nottificationmethod_screen").hide();
    $(activScreen_history[activScreen_history.length - 1]).animate({ "margin-left": ".1em" }, 600).show();
    if (activeScreen_help == 'connectionMethodHelp') {
        $(".Bottom-shade, .Top-shade, .hi-light-copy").show();
    }

    $(".help_icon_container").css({ opacity: '1', cursor: 'pointer' }).removeClass("disabledbutton");
    // });
}