$(document).ready(function() {


    $(".Copying-txt, .Printing-txt, .Complete-txt, .cancel-fax").css("display", "none");
    $(".Dialing-txt,.Connecting-txt,.Scanning,.Faxing-page,.Fax-sent, .Faxing-pagenext").css("display", "none");

    /**** The Send to Recipients marquee pasue and running start */
    $mq = $('.marquee').marquee();
    $(".fax-check-child1").attrchange({
        trackValues: true, // set to true so that the event object is updated with old & new values
        callback: function(evnt) {
            if (evnt.attributeName == "style") { // which attribute you want to watch for changes
                if (evnt.newValue.search(/inline/i) == -1) {
                    if ($(".slidetext-content1").hasClass("active")) {
                        $mq.marquee('resume');
                    } else {
                        $mq.marquee('pause');
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
        $(".option-landing").css({ "margin-left": "80px" });

        setTimeout(function() {
            $(".Top-shade").css("background", "linear-gradient( to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.05) 95%, rgba(0, 0, 0, 0) 100%)");
            $(".option-landing, .option-content").addClass('transitionLR-reload').show();
            $(".option-landing").animate({ "margin-left": "0px" }, 300);
            $(".option-landing").css({ opacity: "1", visibility: "visible" });
            setTimeout(function() {
                $(".option-function").addClass('opacity-view').show();
            }, 200);
        }, 300);
    }

    /**** Option page Setbright Click event Starts here */
    $(".setBright").click(function(event) {
        history_details.pop();
        if ($("#brightCount").val() != "") {
            setTimeout(function() {
                activScreen_history = activScreen_history.slice(0, -1);
            }, 100);
            $("#bright").find("span").text($("#brightCount").val());
            $(".option-landing .optionli").css("margin-top", "-360px");
            $(".hi-light-copy").css({ "background-color": "unset", "border": "4px solid rgb(255, 255, 255)" })
            $(".option-landing .option-content").css({ "margin-left": "0px" });
            setTimeout(function() {
                $(".hi-light-copy").show();
                setTimeout(function() {
                    historyActiveScreen();
                    $(".hi-light-copy").animate({ "width": "658px", "margin-left": "19px" }, 400);
                    setTimeout(delayScanMode, 300);
                }, 300);
            }, 500);
        }
    });
    /**** Option page Setbright Click event Ends here */

    /**** Option page Checkbox Click event Starts here */
    $(".check-box-list li").click(function(event) {
        history_details.pop();
        $(".option-landing-scanmode ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list li input[type=checkbox]").each(function() {
            var $this = $(this);
            if ($this.is(':checked')) {


                if (
                    $(this).val() === "Document" ||
                    $(this).val() === "Photo" ||
                    $(this).val() === "ID Card"
                ) {

                    activateOptionLanding();
                    setTimeout(function() {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);

                    $("#scan").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "0px");
                    $(".option-landing-scanmode").css({ opacity: "1" });
                    setTimeout(function() {
                        $(".option-landing-scanmode .option-function").hide();
                        setTimeout(function() {
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
    $(".check-box-list1 li").click(function(event) {
        history_details.pop();
        $(".option-landing-sides ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list1 li input[type=checkbox]").each(function() {

            var $this = $(this);
            if ($this.is(':checked')) {

                if (
                    $(this).val() === "1 to 1-Sided" ||
                    $(this).val() === "1 to 2-Sided"
                ) {

                    activateOptionLanding();
                    setTimeout(function() {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#sides").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-90px");
                    $(".option-landing-sides").css({ opacity: "1" });
                    setTimeout(function() {
                        $(".option-landing-sides .option-function").hide();
                        setTimeout(function() {
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
    $(".check-box-list2 li").click(function(event) {
        history_details.pop();
        $(".option-landing-color ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list2 li input[type=checkbox]").each(function() {

            var $this = $(this);
            if ($this.is(':checked')) {
                if (
                    $(this).val() === "Automatic" ||
                    $(this).val() === "Color" ||
                    $(this).val() === "Grayscale"
                ) {
                    activateOptionLanding();
                    setTimeout(function() {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#color").find("span").text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-180px");
                    $(".option-landing-color").css({ opacity: "1" });
                    setTimeout(function() {
                        $(".option-landing-color .option-function").hide();
                        setTimeout(function() {
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
    $(".check-box-list3 li").click(function(event) {
        history_details.pop();
        $(".option-landing-resize ul").find('input[type=checkbox]:checked').removeAttr('checked');
        $(this).find('input[type=checkbox]').attr("checked", "checked");
        $(".check-box-list3 li input[type=checkbox]").each(function() {

            var $this = $(this);
            if ($this.is(':checked')) {
                if (
                    $(this).val() === "None" ||
                    $(this).val() === "Custom" ||
                    $(this).val() === "Fit to Page"
                ) {

                    activateOptionLanding();
                    setTimeout(function() {
                        activScreen_history = activScreen_history.slice(0, -1);
                    }, 100);
                    $("#resize")
                        .find("span")
                        .text($(this).val());
                    $(".option-landing .optionli").css("margin-top", "-270px");
                    $(".option-landing-resize").css({ opacity: "1" });
                    setTimeout(function() {
                        $(".option-landing-resize .option-function").hide();
                        setTimeout(function() {
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
    /**** Option page Checkbox Click event Ends here */

});

$(document).ready(function() {
    $(".icon-round").hide();
    $(".second-Row").hide();
    $(".third-Row").hide();
    $(".copy-frame").hide();
    $(".Copy-Section").hide();
    $(".Scan-Section").hide();
    $(".example2").hide();
    $(".icon-rt ").hide();
    $(".example3").hide();
    $(".example4").hide();
    $(".Dot-Section1").hide();
    $(".Dot-Section").hide();
    $(".loading-c").hide();
    $(".Fax-Section").hide();
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
    $(".option-landing-scanmode").hide();
    $(".option-landing-sides").hide();
    $(".option-landing-color").hide();
    $(".option-landing-resize").hide();
    $(".option-landing-bright").hide();
    $(".done-but-round").hide();
    $(".show .show-line").hide();
    $(".fax-keyboard-section").hide();
    $(".Fax-content-confirm").hide();
    $(".Settings-Section ").hide();
    $(".Fax-content-add-recipient").hide();
    $(".fax-keyboard-confirm-section").hide();
    $(".Send-to-contact").hide();
    $(".fax-animation").hide();
    $(".icon-cancel .Cancel-btn").css("opacity", "0");

    /*Add Recipient click button event starts here*/
    $(".add-receipient").click(function() {
        history_details.push("showFaxaddreceipient()");

        if (activScreen_history.indexOf(".Fax-content-add-recipient") === -1) {
            activScreen_history.push(".Fax-content-add-recipient");
        }
        $(".send-but").hide(100);
        $(".scrollspy").css("width", "600px");
        $(".hi-light-copy").animate({ width: "696px" }, 300);
        $(".Fax-content-add-recipient .fax-check-child0").css("margin-top", "0px");
        $(".Fax-content-confirm").css("width", "696px;").addClass("anim-disappear").hide(600);
        $(".Fax-content-confirm").css("width", "696px");
        setTimeout(function() {
            $(".Fax-content-add-recipient").css({ display: "block", left: '0' }).addClass("anim-txt").show(300);
            setTimeout(function() {
                historyActiveScreen("");
            }, 100);
        }, 300);
    });
    /*Add Recipient click button event ends here*/

    $("#backspace").click(function() {
        history_details.push("showFaxbackspace()");
        if (activScreen_history.indexOf(".Fax-content-confirm") === -1) {
            activScreen_history.push(".Fax-content-confirm");
        }
        $(".Side-shade").show();
        $(".Fax-content-confirm ul li:first-child").css("height", "70px");
        var faxtxt = $(".display").val();
        var faxtext = $(".display").val();
        var multiFax = '';
        var multiplFax = '';
        $("#multiFax > span").each(function() {
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
        // $(".fax-keyboard-section").removeClass("transitionBU").removeClass('anim-appear-bot-top');
        // $(".fax-keyboard-section").addClass("transitionUB").hide(300);
        $(".fax-keyboard-section").removeClass("transitionBU").animate({ marginTop: "250px", opacity: "0", width: '696px' }, 300).hide(300);
        // setTimeout(function() {
        //     $(".fax-keyboard-section").removeClass("transitionBU").removeClass('anim-appear-bot-top').hide();
        //     // $(".fax-keyboard-section").addClass("anim-disappear-top-bot").hide(600);
        // }, 1000);
        $(".hi-light-copy").animate({ width: "395px", marginTop: "75px", opacity: "1" }).show(300);
        setTimeout(function() {
            $(".Fax-content-confirm").css("display", "flex").addClass("opacity-view").show(100);
            $(".scrollspy").css("width", "437px");
            $(".icon-rt").delay(100).css("display", "block");
            $(".icon-rt .done-but, .fax-send-count").css("display", "none");
            $(".icon-rt .but-text").css("visibility", "visible");
            $(".Fax-content-confirm").css({ width: "696px", display: "block" });
            $(".Top-shade").show();
            $(".Bottom-shade").show();
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
            setTimeout(function() {
                historyActiveScreen("");
            }, 200);
            var pushLeft = $('#multiSend').width();
            $("#marquSendStyle").remove();
            $('<style id="marquSendStyle">@keyframes marqueemoveSend{from {left:0px;}to {left:-' + pushLeft + 'px;}}</style>').appendTo('head');
        }, 1000);

    });

    /*Send to contact click button event*/
    $(".send-to-cont1").click(function() {
        history_details.push("showFaxsendtocont()");
        $(".icon-rt .send-but").css("display", "none");
        $(".icon-rt .done-but").css("display", "none");
        $(".icon-rt .done-button").css("display", "none");
        $(".count-checkboxes-wrapper").css("opacity", "1");
        $(".Fax-content-confirm").removeClass("anim-disappear");
        $(".Send-to-contact").removeClass("anim-disappear");
        $(".Send-to-contact").css("margin-top", "0px");
        $(".Top-shade").css("width", "500px");
        $(".Send-to-contact .Send-check-child1").css("margin-top", "0px");
        $(".Fax-Section .Fax-content").hide();
        $(".Fax-content-add-recipient").addClass("anim-disappear").hide(300);
        $(".Send-to-contact").css("width", "485px");
        $(".Fax-content-confirm").hide();
        $(".Send-to-contact").css("display", "block").addClass("anim-appear");
        $(".Send-to-contact .done-but").hide();
        $(".Send-to-contact").css("width", "696px");
        $(".hi-light-copy").animate({ width: "395px" }, 300);
    });

    $(".set-tick").click(function() {
        history_details.push("set_tick()");
        activScreen_history.push(".Fax-content-confirm");
        $(".hi-light-copy").animate({ width: "395px" }, 300);
        $(".scrollspy").css({ width: "437px" });
        $(".count-checkboxes-wrapper").css("opacity", "0");
        $(".Fax-content-confirm ul li:first-child").css("height", "70px");
        $(".Fax-content-confirm").removeClass("anim-disappear");
        $(".Fax-content-add-recipient").removeClass("anim-disappear");
        $(".Fax-content-confirm ul li").removeClass("active");
        $(".Fax-content-confirm .fax-check-child1").addClass("active");
        $(".fax-txt-head-bind .fax-txt").hide();
        setTimeout(function() {
            $(".Fax-content-confirm").css({ display: "block", width: "380px" }).addClass("anim-txt");
        }, 600)
        $(".Fax-content-confirm").css("display", "block").addClass("anim-txt");
        $(".Send-to-contact").removeClass("anim-txt").addClass("anim-disappear").hide(300);
        $(".fax-send-count").css("display", "block");
        $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
        $(".icon-rt .send-but, .icon-rt").css({ display: "block", width: "240px" });
        $(".icon-rt .done-but").css("display", "none");
        $(".icon-rt .done-button").css("display", "none");
        setTimeout(function() {
            historyActiveScreen("");
        }, 400);
        var pushLeft = $('#multiSend').width();
        $("#marquSendStyle").remove();
        $('<style id="marquSendStyle">@keyframes marqueemoveSend{from {left:0px;}to {left:-' + pushLeft + 'px;}} @keyframes marqueeRevSend{from {left:0px;} to {left:0px;}}</style>').appendTo('head');
    });

    $(".icon-rt .send-but").click(function() {
        $(".icon-rt, .hi-light-copy ").hide();
        $(".Top-shade").hide();
        $(".Bottom-shade").hide();
        $(".back-btn").css("opacity", "0");
        $(".Cancel-btn").css({ opacity: "1", cursor: "pointer" });
        $(".fax-animation").show(500);
        $(".fax-animation").css("overflow", "inherit");
        $(".fax-keyboard-confirm-section").css("width", "696px");

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

        $(".Fax-content-confirm").hide();
        $(".icon-cancel .Cancel-btn").click(function() {
            $(".Cancel-btn").css("opacity", "0");
            $(".fax-gif-anim").hide();
            $(".fax-animation .show").hide();
            $(".fax-animation-content .cancel-fax").css("display", "block").show(2000);
            setTimeout(function() {
                $(".Print-content-main").css("display", "block");
            }, 4000);
            setTimeout(function() {
                $(".Main-content").hide();
                location.reload();
            }, 2000);
        });

        setTimeout(faxanimation, 12500);
    });

    function faxanimation() {
        $(".fax-gif-anim").hide();
        $(".Cancel-btn").css("opacity", "0");
        $(".fax-animation, .Print-content-copy").hide();
        location.reload();

    }

    $(".fax-keyboard-confirm-section .done-but").click(function() {
        $(".fax-keyboard-confirm-section .hi-light-copy").hide();
        $(".fax-keyboard-confirm-section .done-but").hide();
        $(".Top-shade").hide();
        $(".Bottom-shade").hide();
        $(".Fax-content-confirm").hide();
        $(".fax-animation").show();
        setTimeout(faxlanding, 12700);
    });

    function faxlanding() {
        $(".hi-light-copy").css("width", "660px");
        $(".done-but").hide();
        $(".fax-animation").hide();
        $(".Fax-Section").show();
        $(".fax-keyboard-confirm-section .hi-light-copy").show();
        $(".fax-keyboard-confirm-section .done-but").show();
        $(".fax-keyboard-confirm-section").hide();
        $(".Top-shade").show();
        $(".Bottom-shade").show();
        $(".Fax-content-confirm").hide();
    }

    $(".send-contact").click(function() {
        history_details.push("send_contact()");
        if (activScreen_history.indexOf(".Send-to-contact") === -1) {
            activScreen_history.push(".Send-to-contact");
        }
        if ($('#count-checked-checkboxess').is(':empty')) {
            $("#count-checked-checkboxess").val("");
        }
        $('.Fax-Section').animate({ left: '-80px', opacity: '0' }, 300, function() {}).hide(300);
        $(".hi-light-copy").css("width", "545px");
        $(".Top-shade").css("width", "600px");
        setTimeout(function() {
            $(".Send-to-contact").removeClass('anim-txt-reverse');
            $(".Send-to-contact").addClass('anim-txt').show(0);
            historyActiveScreen("");
            $(".count-checkboxes-wrapper").addClass('opac-view').show(100);
            $(".fax-keyboard-confirm-section .done-but").animate({ opacity: '1' }).show(100);
        }, 300);
    });

    $(".send-to-cont").click(function() {
        history_details.push("showFaxsendtocont()");
        activScreen_history.push(".Send-to-contact");
        $(".Fax-content-add-recipient").addClass("anim-disappear").animate({ left: '-80px' }, { opacity: '0' }).hide(100);
        $(".hi-light-copy").css("width", "545px");
        $(".Fax-Section").addClass("anim-disappear").hide(300);
        $(".Top-shade").css("width", "500px");
        $(".Send-to-contact").removeClass("anim-disappear").show(600);
        $(".count-checkboxes-wrapper").css("opacity", "1");
        $(".fax-keyboard-confirm-section .done-but").show();
        setTimeout(function() {
            historyActiveScreen("");
        }, 100);
    });

    $(".menu-num li").click(function() {
        var selText = $(this).text();
        $(".copy-num").css("margin-top", "-8px");
        $(this).addClass("active");
        $(".example1").find(".copy-num").html('<span class="copy-left-side"><img class="copy-icon" src="./images/Icons_SVG/Mask Group 2.svg"><span class="copy-txt">Copies</span></span><span class="copy-right-side">' + selText + '</span>');
    });

    function onScreenEntryOptions() {
        $(".option-content").animate({ marginLeft: "0px" }, 600);

        setTimeout(function() {

            $(".option-content").css({ opacity: "1", visibility: "visible" });

        }, 600);
        setTimeout(function() {

            $(".option-function").show(300);
            $(".option-function").css({ opacity: "1", visibility: "visible" }, 400);

        }, 600);
    }
    /*Option landing page list click button event Starts here*/
    $(".option-landing ul .option-scan").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        if (activScreen_history.indexOf(".option-landing-scanmode") === -1) {
            activScreen_history.push(".option-landing-scanmode");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(10);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-scanmode .optionli-scan-child1").css("margin-top", "-100px");
        $(".option-landing-scanmode").css({ opacity: "0.3", position: "fixed" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing .option-function").removeClass('transitionLR-reload');
            $(".option-landing-scanmode .option-function").removeClass('transitionLR-reload');
            $(".option-landing-scanmode").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-scanmode").show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
            historyActiveScreen("");
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-scanmode .option-content").addClass('anim-appear');
            setTimeout(function() {
                $(".option-landing-scanmode").css({ opacity: "1" });
            }, 600);
        }, 900);
        if ($("#scan span").text() === "Document" ) {
            $(".optionli-scan-child1").css('margin-top', '-100px');
            $("#trigger-scan1").css("checkbox", "checked");
        } else if ($("#scan span").text() === "Photo") {
            $(".optionli-scan-child1").css("margin-top", "-190px");
        } else if ($("#scan span").text() === "ID Card") {
            $(".optionli-scan-child1").css("margin-top", "-278px");
        }
    });

    $(".option-landing ul .option-sides").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        if (activScreen_history.indexOf(".option-landing-sides") === -1) {
            activScreen_history.push(".option-landing-sides");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-82.162em" });
            }, 300);
        }, 600);

        $(".option-landing-sides .optionli-land-child1").css("margin-top", "-21px");
        $(".option-landing-sides").css({ opacity: "0.3", position: "fixed" });
        $(".option-landing-sides .option-function").css({ visibility: "hidden" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing-sides").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-sides").show();
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-sides .option-content").addClass('anim-appear');
            setTimeout(function() {
                $(".option-landing-sides .option-function").css({
                    visibility: "visible"
                });
                historyActiveScreen("");
                $(".option-landing-sides").css({ opacity: "1" });
            }, 600);
        }, 900);

        if ($("#sides span").text() === "1 to 1-Sided") {
            $(".optionli-land-child1").css("margin-top", "-21px");
        } else if ($("#sides span").text() === "1 to 2-Sided") {
            $(".optionli-land-child1").css("margin-top", "-109px");
        }
    });

    $(".option-landing ul .option-color").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        if (activScreen_history.indexOf(".option-landing-color") === -1) {
            activScreen_history.push(".option-landing-color");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" },
                600
            );
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-color .optionli-scan-child1").css("margin-top", "-24px");
        $(".option-landing-color").css({ opacity: "1", position: "fixed" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing-color").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-color").show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-color .option-content").addClass('anim-appear');
            setTimeout(function() {
                $(".option-landing-color").css({ opacity: "1" });
                historyActiveScreen("");
            }, 600);
        }, 900);

        if ($("#color span").text() === "Automatic") {
            $(".optionli-color-child1").css("margin-top", "-24px");
        } else if ($("#color span").text() === "Color") {
            $(".optionli-color-child1").css("margin-top", "-112px");
        } else if ($("#color span").text() === "Grayscale") {
            $(".optionli-color-child1").css("margin-top", "-200px");
        }
    });
    $(".option-landing-resize .optionli-resize-child li:firstchild").css('height', '65px');
    $(".option-landing ul .option-resize").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        if (activScreen_history.indexOf(".option-landing-resize") === -1) {
            activScreen_history.push(".option-landing-resize");
        }
        $(".option-landing").css({ opacity: "1" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);
        $(".option-landing-resize .optionli-resize-child1").css("margin-top", "0px");
        $(".option-landing-resize").css({ opacity: "1", position: "fixed" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing-resize").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-resize").show();
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "1px" }, 600);
            $(".option-landing-resize .option-content").addClass('anim-appear');
            setTimeout(function() {
                $(".option-landing-resize").css({ opacity: "1" });
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

    $(".option-landing ul .option-bright").click(function() {
        if (history_details.indexOf("setBright()") === -1) {
            history_details.push("setBright()");
        }
        if (activScreen_history.indexOf(".option-landing-bright") === -1) {
            activScreen_history.push(".option-landing-bright");
        }
        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
                $("#bright-icon-txt").css('opacity', 0.5);
            }, 300);
        }, 600);


        setTimeout(function() {
            $(".option-landing-bright").css({ opacity: "1", position: "fixed" });
            $(".option-landing-bright").css({ "margin-left": "0px" });
            $(".option-landing-bright").show();
            $(".hi-light-copy").css({ "background-color": "#ccc", "border": "1px solid #ccc" })
            $(".hi-light-copy").animate({ width: "395px", marginLeft: "145px", }, 400);
            setTimeout(function() {
                $(".hi-light-copy").hide();
                $(".Top-shade").css('background', 'unset');
                $(".copy-drag-content").show();
                $("#bright-icon").attr("src", "./images/Icons_SVG/base-01.svg");
            }, 500);
            historyActiveScreen("");
        }, 600);

    });
    /*Option landing page list click button event ends here*/
    $("#brightCount").on('input', function() {
        if (parseInt($("#brightCount").val()) < 10 && parseInt($("#brightCount").val()) > 0) {
            $("#bright-icon-txt").css('opacity', 0 + "." + parseInt($("#brightCount").val()));
        } else if (parseInt($("#brightCount").val()) === 10) {
            $("#bright-icon-txt").css('opacity', 1);
        } else if (parseInt($("#brightCount").val()) === 0) {
            $("#bright-icon-txt").css('opacity', 0.1);
        }
    });

    //---- Ranjith end ------>
    $(".carousel-item.scan-icon").click(function() {
        $(".Landing-Page").hide(0);
        $(".Copy-Section").hide(50);
        $(".Scan-Section").show(10);
    });

    /**** Copy Mouse Event */
    $('.copy-page').mouseup(function() {
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_l.svg')");
    });
    $('.copy-page').mouseout(function() {
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_l.svg')");
    });
    $('.copy-page').mousedown(function() {
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_pressed_l.svg')");
    });
    /**** End Copy Mouse Event */

    /**** ID Mouse Event */
    $('.ID-Page').mouseup(function() {
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_l.svg')");
    });
    $('.ID-Page').mouseout(function() {
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_l.svg')");
    });
    $('.ID-Page').mousedown(function() {
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_pressed_l.svg')");
    });
    /**** End ID Mouse Event */

    /**** Smarttask-Page Mouse Event */
    $('.Smarttask-Page').mouseup(function() {
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    $('.Smarttask-Page').mouseout(function() {
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    $('.Smarttask-Page').mousedown(function() {
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    /**** End Smarttask-Page Mouse Event */

    /**** Menu Mouse Event */
    $('.Menu-Page').mouseup(function() {
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_l.svg')");
    });
    $('.Menu-Page').mouseout(function() {
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_l.svg')");
    });
    $('.Menu-Page').mousedown(function() {
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_pressed_l.svg')");
    });
    /**** End Menu Mouse Event */

    /**** Scan Mouse Event */
    $('.Scan-Page').mouseup(function() {
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_l.svg')");
    });
    $('.Scan-Page').mouseout(function() {
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_l.svg')");
    });
    $('.Scan-Page').mousedown(function() {
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_pressed_l.svg')");
    });
    /**** End Scan Mouse Event */

    /**** FAX Mouse Event */
    $('.Fax-Page').mouseup(function() {
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_l.svg')");
    });
    $('.Fax-Page').mouseout(function() {
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_l.svg')");
    })
    $('.Fax-Page').mousedown(function() {
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_pressed_l.svg')");
    });
    /**** End FAX Mouse Event */

    /**** FAX ADD Button Mouse Event */
    $('.fax-add-key img').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    $('.fax-add-key').mouseup(function() {
        $(".fax-add-key").css('background-color', '#555557');
        $('.fax-add-key').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    });
    $('.fax-add-key').mouseout(function() {
        $(".fax-add-key").css('background-color', '#555557');
        $('.fax-add-key').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    })
    $('.fax-add-key').mousedown(function() {
        $('.fax-add-key').css('background-color', "#fff")
        $('.fax-add-key').css('background-image', "url('./images/Icons_SVG/add_s_hover.svg')");
    });
    /**** End FAX ADD Button Mouse Event */

    /**** FAX Back Button Mouse Event */
    $('.fax-back-key').mouseup(function() {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });
    $('.fax-back-key').mouseout(function() {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });
    $('.fax-back-key').mousedown(function() {
        $('.fax-back-key').css('background-color', "#fff")
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s_hover.svg')");
    });
    /**** End FAX Back Button Mouse Event */

    $('.done-but-tick1').mouseup(function() {
        $('.done-but-tick1').attr('src', "./images/Icons_SVG/done_m.svg");
    });
    $('.done-but-tick1').mouseout(function() {
        $('.done-but-tick1').attr('src', "./images/Icons_SVG/done_m.svg");
    });
    $('.copy-button .done-but-tick1').mousedown(function() {
        $('.copy-button .done-but-tick1').attr('src', "./images/Icons_SVG/done_m_hover.svg");
    });
    /**** End FAX Back Button Mouse Event */

    /**** Bright tick Button Mouse Event */
    $('.tick-btn').mouseup(function() {
        $('.tick-btn').attr('src', "./images/Icons_SVG/done_m.svg");
    });
    $('.tick-btn').mouseout(function() {
        $('.tick-btn').attr('src', "./images/Icons_SVG/done_m.svg");
    });
    $('.tick-btn').mousedown(function() {
        $('.tick-btn').attr('src', "./images/Icons_SVG/done_m_hover.svg");
    });
    /**** Bright tick Button Mouse Event */


    /**** Copies tick Button Mouse Event */
    $('.fax-back-key').mouseup(function() {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });
    $('.fax-back-key').mouseout(function() {
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s.svg')");
        $(".fax-back-key").css('background-color', '#555557');
    });
    $('.fax-back-key').mousedown(function() {
        $('.fax-back-key').css('background-color', "#fff")
        $('.fax-back-key').css('background-image', "url('./images/Icons_SVG/backspace_s_hover.svg')");
    });
    /**** End Copies tick Button Mouse Event */


    /**** FAX next Button Mouse Event */
    $('.backbtn').mouseup(function() {
        $('.backbtn').css('background-image', "url('./images/Icons_SVG/send_s_hover.svg')");
        $(".backbtn").css('background-color', '#fff');
    });
    $('.backbtn').mouseout(function() {
        $('.backbtn').css('background-image', "url('./images/Icons_SVG/send_s_hover.svg')");
        $(".backbtn").css('background-color', '#fff');
    });
    $('.backbtn').mousedown(function() {
        $('.backbtn').css('background-color', "#555557")
        $('.backbtn').css('background-image', "url('./images/Icons_SVG/send_s.svg')");
    });
    /**** End FAX Next Button Mouse Event */

    /**** FAX Add popup Mouse Event */
    $('.add_pop').mouseup(function() {
        $('.add_pop').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
        $(".add_pop").css('background-color', '#fff');
    });
    $('.add_pop').mouseout(function() {
        $('.add_pop').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
        $(".add_pop").css('background-color', '#fff');
    });
    $('.add_pop').mousedown(function() {
        $('.add_pop').css('background-color', "#000")
        $('.add_pop').css('background-image', "url('./images/Icons_SVG/add_m_hover.svg')");
    });
    $('.number-new-num .add_pop').mouseover(function() {
        $('.number-new-num').css('background-color', "#ff0")
        $('.number-new-num .add_pop').css('background-image', "url('./images/Icons_SVG/add_m.svg')");
    });
    /**** End add_pop Button Mouse Event */

    /**** Backspace key Button Mouse Event start here */
    $('.backspance-keyb').mouseout(function() {
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_m.svg') left center");
    })
    $('.backspance-keyb').mousedown(function() {
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_pressed_m.svg') left center");
    });
    /**** Backspace key Button Mouse Event ends here */


    /**** Fax keypad Number Mouse Event start here */
    $('.number').css({ backgroundcolor: "#333333", color: '#fff' });
    $('.number').mouseout(function() {
        $(this).css('background-color', "#333333");
        $(this).css('color', "#fff");
        $('.fax-keys').css('color', "#8C8C8E");
    })
    $('.number').mousedown(function() {
        $(this).css('background-color', "#fff");
        $(this).css('color', "#000");
    });
    /**** Fax keypad Number Mouse Event ends here */

    /**** Landing page Copy page  Click event start here */
    $("#introduction .copy-page").click(function() {
        history_details.push("showCopyLandingPage()");
        if (activScreen_history.indexOf(".example1") === -1) {
            activScreen_history.push(".example1");
        }
        if ($(this).hasClass("active")) {
            $(".scrollspy").css('width', '432px');
            $(".back-btn").css("opacity", "1");
            $(".back-btn").css("cursor", "pointer");
            $(".Smarttask-Page").animate({ zoom: ".3", opacity: ".2" }).hide(100);
            $(".Menu-Page").animate({ zoom: ".3", opacity: ".2" }).hide(100);
            $(".ID-Page").animate({ zoom: ".3", opacity: ".2" }).hide(100);
            $(".Scan-Page").animate({ zoom: ".3", opacity: ".2" }).hide(100);
            $(".indicators").removeClass("active");
            $(".indicators").animate({ zoom: ".5", opacity: ".2", left: "-250px" }).hide(100);
            $(".copy-page").animate({ opacity: "0", left: "-250px" }).hide(300);
            $(".Print-content-main").hide(300);
            $(".Copy-Content .example1").css({ "margin-left": "2.162em" });
            $(".Copy-Content .example1").animate({ opacity: 1, left: "0px" }).hide(100);
            $(".copy-button .done-but").css({ width: "240px", height: "90px" });
            setTimeout(function() {
                $(".Landing-Page .Main-content").show(00);
                $(".Copy-Content .example1").show(00);
                $(".hi-light-copy").show(000);
                $(".icon-rt").css("display", "block");
                $(".send-but").css("display", "none");
            }, 400);
            setTimeout(function() {
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
    $(".copy-num").click(function() {
        if (history_details.indexOf("showCopies1()") === -1) {
            history_details.push("showCopies1()");
        }
        if (activScreen_history.indexOf(".example2") === -1) {
            activScreen_history.push(".example2");
        }
        $('.swapMe-down .down1').css('pointer-events', 'none');
        $('.swapMe-up .up1').css('pointer-events', 'none');
        $(".hi-light-copy").animate({ width: "545px" }, 300);
        $(".scrollspy").css({ width: "525px" });
        $(".copy-button .done-but").animate({ width: "80px", height: "90px" }, 100);
        $(".copy-button .done-but").hide();
        $(".done-but-tick1").css('cursor', 'pointer');
        $(".Copy-Content .example1").addClass('anim-disappear').hide(500);
        $(".Copy-Content .example1").animate({ opacity: "0" }).hide(100);
        $(".copy-button .done-but-tick1").show(100);
        $(".copy-button .but-text").hide();
        $(".options").hide();
        $(".no-row").hide();
        $(".example3").hide();
        $(".example2").delay(1500).css('opacity', '1').addClass('anim-appear').show();
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
        setTimeout(function() {
            historyActiveScreen("");
        }, 1050);
    });
    /**** Landing page Copy page Number Click event Ends here */

    /**** Landing page Copy page Number select Click event start here */
    $(".Print-content-copy .done-but-tick1").click(function() {
        $(".example1 ul li:first-child").css("height", "84px");
        $('.swapMe-down .down1').removeAttr("style");
        $('.swapMe-up .up1').removeAttr("style");
        $('.done-but').show();
        var selectedCopiea = $('.menu-num li.active').text();
        $(".Copy-Content .example1").removeClass('anim-disappear').show(300);
        $(".example1").find(".copy-num").html('<span class="copy-left-side"><img class="copy-icon" src="./images/Icons_SVG/Mask Group 2.svg"><span class="copy-txt">Copies</span></span><span class="copy-right-side">' + selectedCopiea + '</span>');
        doneButTick1();
        $("#Landing-copy-page").css({ left: "0px" });
        $(".scrollspy").css({ width: "437px" });
        history_details.pop();
        setTimeout(function() {
            activScreen_history = activScreen_history.slice(0, -1);
        }, 100);

    });
    /**** Landing page Copy page Number select Click event Ends here */

    /**** Landing page Copy page Number select Click event start here */
    function doneButTick1() {
        $(".hi-light-copy").animate({ width: "395px" }, 100);
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".copy-button .done-but").animate({ width: "240px", height: "90px" }, 100);
        $(".copy-num").css({ marginTop: '0px' })
        $(".copy-button .but-text").show(100);
        $(".copy-button .done-but-tick1").hide(0);
        $(".options").show();
        $(".copy-button .done-but").removeClass("move-me-2");
        $(".copy-button").show(10);
        $(".Print-content-copy .example2").hide(100);
        $(".Print-content-copy .example1").show(300);
        $(".Copy-Content .example1").animate({ opacity: "1" }).show(600);
        setTimeout(function() {
            historyActiveScreen("");
        }, 700);
    }
    /**** Landing page Copy page Number select Click event start here */

    /**** Landing page FAX page Click event start here */
    $(".Fax-Page").click(function() {

        if (history_details.indexOf("showFaxLandingPage()") === -1) {
            history_details.push("showFaxLandingPage()");
        }
        if (activScreen_history.indexOf(".Fax-content") === -1) {
            activScreen_history.push(".Fax-content");
        }
        $(".carousel-item .back-btn").css("cursor", "pointer");
        if ($(this).hasClass("active")) {
            $(".back-btn").css("opacity", "1");
            $(".Fax-Page").animate({ left: '-180px' }, { opacity: '0' }).hide(300);
            $(".Scan-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            $(".ID-Page").animate({ zoom: '.5' }, { opacity: '0' }).hide(300);
            setTimeout(function() {
                $(".hi-light-copy").animate({ width: "658px" }, 500);
                $(".hi-light-copy").css("margin-left", "19px");
                $(".Landing-Page").show(10);
                $(".example1").css("display", "none");
                $(".Landing-Page .Main-content").show();
                $(".Main-content .Print-content-copy").show();
                $(".Landing-Page .Print-content-main").hide();
                $(".Print-content-copy").show();
                setTimeout(faxtxtlanding, 500);
            }, 300);
        }
    });
    /**** Landing page FAX page Click event ends here */

    function faxtxtlanding() {
        $(".Main-content .Fax-Section").css("display", "block").addClass("anim-txt");
        historyActiveScreen("");
    }

    /**** Landing page FAX KEy Pad Click event start here */
    $(".fax-number").click(function() {
        history_details.push("showFirstLandingPage()");
        activScreen_history.push(".fax-keyboard-section");

        $(".Fax-Section").removeClass('anim-reappear-left-right');
        $(".Fax-Section").addClass("anim-disappear");
        $(".scrollspy").css("width", "696px");
        $(".Fax-Section").hide();
        setTimeout(function() {
            $(".Top-shade").hide();
            $(".Bottom-shade").hide();
            $(".Side-shade").hide();

            $(".hi-light-copy").animate({ marginTop: "-80px", opacity: "0" }).hide(50);
        }, 300);

        setTimeout(faxkeyboard, 1000);
    });

    function faxkeyboard() {
        $(".hi-light-copy").animate({ marginTop: "-80px", opacity: "0" }).hide(50);
        $(".fax-keyboard-section").addClass("anim-appear-bot-top");
        $(".fax-keyboard-section").css({ opacity: "1", marginTop: "0px" }).show(100);
        $(".fax-keyboard-confirm-section .Fax-content-add-recipient").hide();
        $("#display").focus();

    }
    /**** Landing page FAX KEy Pad Click event ends here */

    /**** Second Landing page Option Click event starts here */
    $(".options").click(function() {
        history_details.push("showOption()");

        if (activScreen_history.indexOf(".option-landing") === -1) {
            activScreen_history.push(".option-landing");
        }

        $(".option-landing ul li:first-child").css("height", "75px");
        $(".done-but").hide();
        $(".example1").addClass("transitionLR");

        setTimeout(hideexample1, 600);
        $(".hi-light-copy").animate({ width: "658px" }, 600);
        setTimeout(hidebut, 700);
    });

    function hideexample1() {
        $(".example1").hide();
        $(".Print-content-copy .option-landing").show();
        $(".option-landing").removeClass('transitionLR-reload');
        $(".option-landing .option-content").removeClass('transitionLR-reload');
        $(".option-landing .option-content").addClass('anim-txt').show(300);
        $(".option-landing .option-function").addClass('opacity-view').show(300);
        historyActiveScreen("");
        onScreenEntryOptions();
        $(".scrollspy").css({ width: "696px" });
    }

    function hidebut() {
        $(".icon-rt").hide(10);
    }
    /**** Second Landing page Option Click event ends here */

    /**** Cancel copy page Click event Starts here */
    $(".Cancel-btn").css({ opacity: "0" });
    $(".copy-button .done-but").click(function() {
        $(".Print-content-copy").hide(10);
        $(".Top-shade").hide(10);
        $(".Bottom-shade").hide(10);
        $(".Cancel-btn").css({ opacity: "1", cursor: "pointer" });
        $(".back-btn").css("opacity", "0");
        $(".Dot-Section").show();
        $(".show .show-line").hide();

        var index = 0;
        var total = $("rec").size() - 1;
        setInterval(function() {
            var rec = $("rec:eq(" + index + ")");
            $("p.show-line").html(rec.text()).fadeIn("slow");
            if (index == total) {
                index = 0;
            } else {
                index++;
            }
        }, 4800);

        $(".Cancel-btn").css("opacity", "1").click(function() {

            setTimeout(cancelcopying, 10);
        });

        setTimeout(explode, 14800);
    });

    function cancelcopying() {
        $(".Dot-Section .show").hide(00);
        $(".Dot-Section .copy-gif-anim").hide(00);
        setTimeout(function() {
            $(".Cancel-copy").show();
        }, 600);
        $(".Cancel-btn").css({ opacity: "0" });
        setTimeout(nextscreen, 2000);
    }

    function explode() {
        $(".loading").hide();
        setTimeout(nextscreen, 2000);
    }

    function nextscreen() {
        location.reload();
        $(".Bottom-shade").hide();
        $(".Dot-Section").hide();
        $(".icon-cancel .Cancel-btn").css("opacity", "0");
        $(".Print-content-copy").hide();
    }
    /**** Cancel copy page Click event ends here */
    $("#return").click(function() {
        window.history.back();
    });

    $(".example3 .copy-color-2 li").click(function() {
        $(".example3").hide(100);
        $(".example4").show();
    });


    $(".Send-checkbox-faxlist li").click(function(event) {
        if ($(this).find('input[type=checkbox]').prop("checked")) {
            $(this).find('input[type=checkbox]:checked').removeAttr('checked');
        } else {
            $(this).find('input[type=checkbox]').attr("checked", "checked");
        }
        var $checkboxes = $('.Send-checkbox-faxlist input[name="set-input"]');
        var  contactpersion  =  $checkboxes.filter(":checked").length;                       
        if ($("input.faxcheckbox").prop("checked")) {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            var countCheckedCheckboxess = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            var countCheckedCheckboxes1 = $checkboxes.filter(":checked").length;
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            if (contactpersion === 1) { 
                console.log($checkboxes.filter(":checked").val());
                $("#count-checked-checkboxes").hide();
                $("#Recipient-count").text($checkboxes.filter(":checked").val());
            } else {
                $("#count-checked-checkboxes").show();
                $("#Recipient-count").text('Recipients');
            }
        } else {
            if (contactpersion === 1) {
                $("#count-checked-checkboxes").hide();
                $("#Recipient-count").text($checkboxes.filter(":checked").val());
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
            if  (contactpersion  ===  0)  {                 $("#count-checked-checkboxess").text("");             }
        }
        $checkboxes.change(function() {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            $("#edit-count-checked-checkboxes").val(countCheckedCheckboxes);
        });

    });

    $(document).ready(function() {
        $("#multiEmail").mouseover(function() {
            $(".display").addClass('transcrolltxt');
        });
        $("#multiEmail").mouseout(function() {
            $(".display").removeClass('transcrolltxt').animate({});
        });
    });

    /**** Swape Click event Starts here */
    $(".swapMe-up .up1").click(function() {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-copy .scrollspy " + activeScreen + " .copy-num").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .no-first-row .num-first").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-scan-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + "  .Section-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child0").animate({ 'marginTop': "-=90px" });
    });

    $(".swapMe-down .down1").click(function() {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-copy .scrollspy " + activeScreen + " .no-first-row .num-first").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-scan-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + "  .fax-check-child0").animate({ 'marginTop': "+=90px" });
    });
    $(".swapMe-up .up2").click(function() {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-copy .scrollspy " + activeScreen + " .no-second-row .num-second").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $("" + activeScreen + "  .fax-check-child0").animate({ 'marginTop': "-=90px" });
    });
    $(".swapMe-down .down2").click(function() {
        var activeScreen = activScreen_history[activScreen_history.length - 1];
        $(".Print-content-copy .scrollspy " + activeScreen + " .no-second-row .num-second").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy " + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $("" + activeScreen + " .fax-check-child0").animate({ 'marginTop': "+=90px" });
    });

    $(".swapMe-down").click(function() {
        $(".Print-content-copy .scrollspy .copy-num").animate({ marginTop: "+=90px" });
    });

    $("span.up").click(function() {
        $(this).parent().insertBefore($(this).parent().prev());
    });

    $("span.down").click(function() {
        $(this).parent().insertAfter($(this).parent().next());
    });
    /**** Swape Click event Ends here */

    /**** Landing Page text event Starts here */
    $(".indicators .indicator-item").eq(0).text("Smart Tasks");
    $(".indicators .indicator-item").eq(1).text("Menu");
    $(".indicators .indicator-item").eq(2).text("Copy");
    $(".indicators .indicator-item").css("width", "250px");
    $(".indicators .indicator-item").eq(3).text("ID Copy");
    $(".indicators .indicator-item").eq(4).text("Scan");
    $(".indicators .indicator-item").eq(5).text("Fax");
    /**** Landing Page text event Ends here */
});

$(function() {
    height = $("#carousel .carousel-item").length + 1;

    width = $("#carousel .carousel-item").length;

    $.each($("#carousel .carousel-item"), function(key, value) {
        $(this).attr("id", key);
    });
});

$("#Landing-copy-page ul li, .option-landing ul li , .option-landing-scanmode ul li, .option-landing-sides ul li, .option-landing-color ul li,.option-landing-resize ul li").mouseover(function() {
    $(".hi-light-copy").css("border", "8px solid #FFFFFF");
});
$("#Landing-copy-page ul li, .option-landing ul li, .option-landing-scanmode ul li, .option-landing-sides ul li, .option-landing-color ul li,.option-landing-resize ul li").mouseleave(function() {
    $(".hi-light-copy").css("border", "4px solid #FFFFFF");
});

$(".done-but").mouseover(function() {
    if (!$(this).hasClass("move-me-2")) {
        $(".done-but").css({ "background-color": "#FFFFFF", color: "#000" });
    }
});
$(".done-but").mouseleave(function() {
    if (!$(this).hasClass("move-me-2")) {
        $(".done-but").css({ "background-color": "transparent", color: "#FFFFFF" });
    }
});

function load_faxpage() {
    setTimeout(function() {
        var carousel_items = document.querySelectorAll(".carousel-item").length;
        var middle_slide = 5;
        window.next = function() {
            var el = document.querySelector(".carousel");
            var l = M.Carousel.getInstance(el);
            l.next(1);
        };
        var elem = document.querySelector(".carousel");
        var instance = M.Carousel.getInstance(elem);
        instance.set(middle_slide);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var carousel_items = document.querySelectorAll(".carousel-item").length;
        var middle_slide = Math.round(carousel_items / 5);
        //var middle_slide = 5;
        window.next = function() {
            var el = document.querySelector(".carousel");
            var l = M.Carousel.getInstance(el);
            l.next(1);
        };
        var elem = document.querySelector(".carousel");
        var instance = M.Carousel.getInstance(elem);
        instance.set(middle_slide);
    }, 1000);
});

$(".Fax-content ul li:hover").click(function() {
    $(".hi-light-copy hover").css("border", "8px solid #ffffff");
});

$(".Fax-content ul li, .Fax-content-confirm ul li, .Fax-content-add-recipient ul li, .Send-to-contact ul li").mouseover(function() {
    $(this).css("cursor", "pointer");
    $(".hi-light-copy").css("border", "8px solid #ffffff");
});
$(".Fax-content ul li, .Fax-content-confirm ul li, .Fax-content-add-recipient ul li, .Send-to-contact ul li").mouseout(function() {
    $(this).css("cursor", "pointer");
    $(".hi-light-copy").css("border", "4px solid #ffffff");
});

$('.swapMe-up').click(function() {
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
$('.swapMe-down').click(function() {
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