$(document).ready(function() {
    $(".Copying-txt, .Printing-txt, .Complete-txt, .cancel-fax").css(
        "display",
        "none"
    );
    $(".Dialing-txt,.Connecting-txt,.Scanning,.Faxing-page,.Fax-sent").css(
        "display",
        "none"
    );

    function delayScanMode() {
        $(".option-landing-scanmode").hide();
        $(".option-landing").hide();
        $(".option-landing-sides").hide();
        $(".option-landing-color").hide();
        $(".option-landing-resize").hide();
        //  $(".option-landing").removeClass('transitionLR');
        $(".option-landing").css({ "margin-left": "80px" });

        setTimeout(function() {
            $(".option-landing").show();
            $(".option-landing").animate({ "margin-left": "0px" }, 600);
            setTimeout(function() {
                $(".option-function").show();
                $(".option-landing").css({ opacity: "1", visibility: "visible" });
            }, 600);
            // $(".option-function").css({'opacity':'1','visibility': 'visible'});
        }, 300);
    }
    $(".check-box-list input[type=checkbox]").click(function(event) {
        if ($(this).is(":checked")) {
            history_details.pop();
            $(".check-box-list input[type=checkbox]").removeAttr("checked");
            $("#" + this.attributes.id.value).attr("checked", "checked");
            if (
                $(this).val() === "Document" ||
                $(this).val() === "Photo" ||
                $(this).val() === "ID Card"
            ) {
                $("#scan").find("span").text(event.target.value);
                $(".option-landing .optionli").css("margin-top", "0px");
                $(".option-landing-scanmode").css({ opacity: "1" });
                setTimeout(function() {
                    $(".option-landing-scanmode .option-content").animate({ "margin-left": "-2.162em" },
                        600
                    );
                    $(".option-landing-scanmode .option-function").hide(200);
                    // setTimeout( function(){$(".option-landing").css({'margin-left':'-42.162em'});  }, 300 );
                    setTimeout(delayScanMode, 300);
                }, 600);
            }
        }
    });
    $(".check-box-list1 input[type=checkbox]").click(function(event) {
        if ($(this).is(":checked")) {
            history_details.pop();
            $(".check-box-list1 input[type=checkbox]").removeAttr("checked");
            $("#" + this.attributes.id.value).attr("checked", "checked");
            if (
                $(this).val() === "1 to 1-Sided" ||
                $(this).val() === "1 to 2-Sided"
            ) {
                console.log("checked Sided");
                $("#sides").find("span").text(event.target.value);
                $(".option-landing .optionli").css("margin-top", "-97px");
                $(".option-landing-sides").css({ opacity: "1" });
                setTimeout(function() {
                    $(".option-landing-sides .option-content").animate({ "margin-left": "-2.162em" },
                        600
                    );
                    $(".option-landing-sides .option-function").hide(100);
                    // setTimeout( function(){$(".option-landing").css({'margin-left':'-42.162em'});  }, 300 );
                    setTimeout(delayScanMode, 300);
                }, 600);
            }
        }
    });
    $(".check-box-list2 input[type=checkbox]").click(function(event) {
        if ($(this).is(":checked")) {
            history_details.pop();
            $(".check-box-list2 input[type=checkbox]").removeAttr("checked");
            $("#" + this.attributes.id.value).attr("checked", "checked");
            if (
                $(this).val() === "Automatic" ||
                $(this).val() === "Color" ||
                $(this).val() === "Grayscale"
            ) {
                $("#color").find("span").text(event.target.value);
                $(".option-landing .optionli").css("margin-top", "-185px");
                $(".option-landing-color").css({ opacity: "1" });
                setTimeout(function() {
                    $(".option-landing-color .option-content").animate({ "margin-left": "-2.162em" },
                        600
                    );
                    $(".option-landing-color .option-function").hide(200);
                    // setTimeout( function(){$(".option-landing").css({'margin-left':'-42.162em'});  }, 300 );
                    setTimeout(delayScanMode, 300);
                }, 600);
            }
        }
    });
    $(".check-box-list3 input[type=checkbox]").click(function(event) {
        if ($(this).is(":checked")) {
            history_details.pop();
            $(".check-box-list3 input[type=checkbox]").removeAttr("checked");
            $("#" + this.attributes.id.value).attr("checked", "checked");
            if (
                $(this).val() === "None" ||
                $(this).val() === "Custom" ||
                $(this).val() === "Fit to Page"
            ) {
                $(".option-landing #resize")
                    .find("span")
                    .text(event.target.value);
                $(".option-landing .optionli").css("margin-top", "-270px");
                $(".option-landing-resize").css({ opacity: "1" });
                setTimeout(function() {
                    $(".option-landing-resize .option-content").animate({ "margin-left": "-2.162em" },
                        600
                    );
                    $(".option-landing-resize .option-function").hide(200);
                    // setTimeout( function(){$(".option-landing").css({'margin-left':'-42.162em'});  }, 300 );
                    setTimeout(delayScanMode, 300);
                }, 600);
            }
        }
    });
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

    $(".done-but-round").hide();
    $(".show .show-line").hide();
    $(".fax-keyboard-section").hide();
    $(".Fax-content-confirm").hide();
    $(".Settings-Section ").hide();
    $(".Fax-content-add-recipient").hide();
    $(".fax-keyboard-confirm-section").hide();
    $(".Send-to-contact").hide();
    $(".fax-animation").hide();

    $(".icon-cancel .Cancel-btn").css("opacity", "0.3");

    /*Add Recipient click button event*/

    $(".add-receipient").click(function() {
        history_details.push("showFaxaddreceipient()");
        $(".send-but").hide();
        $(".scrollspy").css("width", "600px");
        $(".hi-light-copy").animate({ width: "696px" }, 300);
        $(".Fax-content-add-recipient .fax-check-child1").css("margin-top", "0px");
        $(".Fax-content-confirm").css("width", "696px;").addClass("anim-disappear").hide(600);
        $(".Fax-content-confirm").css("width", "696px");
        setTimeout(function() {
            $(".Fax-content-add-recipient").css("display", "block").addClass("anim-txt").show(300);
        }, 300);
    });

    $("#backspace").click(function() {
        history_details.push("showFaxbackspace()");
        $(".Fax-content-confirm ul li:first-child").css("height", "70px");
        // $(".fax-keyboard-confirm-section").css('width','696px');
        var faxtxt = $(".display").val();
        var faxtext = $(".display").val();
        var multiFax = '';
        var multiplFax = '';
        $("#multiFax > span").each(function(){
            // console.log($(this).text())
            multiFax = multiFax + '<span class="fax-txt">' + $(this).text() + ' </span> ';
            multiplFax = multiplFax + '<span class="fax-txt1">' + $(this).text() + ' </span> ';
        });
        console.log(multiFax);
        $(".fax-keyboard-section").removeClass("transitionBU").addClass("anim-disappear-top-bot").hide(300);

        setTimeout(function() {
            $(".hi-light-copy").animate({ width: "395px", marginTop: "75px", opacity: "1" }).show();
            $(".Fax-content-confirm").show(100).css("display", "flex").addClass("anim-appear");
            $(".scrollspy").css("width", "437px");
            $(".icon-rt").delay(100).css("display", "block");
            $(".icon-rt .done-but, .fax-send-count").css("display", "none");
            $(".icon-rt .but-text").css("visibility", "visible");
            $(".Fax-content-confirm").css({ width: "696px", display: "block" });
            // $(".fax-keyboard-confirm-section").css('width','480px');
            $(".Top-shade").show();
            $(".Bottom-shade").show();
            $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
            $(".Fax-content-confirm .fax-txt-head-bind").html(multiFax);
            $(".fax-animation-count").html(multiplFax);
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
        // $(".hi-light-copy").css('width','460px');
        $(".hi-light-copy").animate({ width: "395px" }, 300);
    });
    $(".set-tick").click(function() {
        history_details.push("set_tick()");
        $(".hi-light-copy").animate({ width: "395px" }, 300);
        $(".scrollspy").css({ width: "437px" });
        $(".count-checkboxes-wrapper").css("opacity", "0");
        $(".Fax-content-confirm ul li:first-child").css("height", "70px");
        $(".Fax-content-confirm").removeClass("anim-disappear");
        $(".Fax-content-add-recipient").removeClass("anim-disappear");
        $(".fax-txt-head-bind .fax-txt").hide();
        $(".Fax-content-confirm").css({ display: "block", width: "380px" }).addClass("anim-txt");
        $(".Fax-content-confirm").css("display", "block").addClass("anim-txt");
        $(".Send-to-contact").removeClass("anim-txt").addClass("anim-disappear").hide(300);
        $(".fax-send-count").css("display", "block");
        $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
        $(".icon-rt .send-but, .icon-rt").css({ display: "block", width: "240px" });
        $(".icon-rt .done-but").css("display", "none");
        $(".icon-rt .done-button").css("display", "none");
    });
    $(".icon-rt .send-but").click(function() {
        $(".icon-rt, .hi-light-copy ").hide();
        $(".Top-shade").hide();
        $(".Bottom-shade").hide();
        $(".back-btn").css("opacity", "0.3");
        $(".Cancel-btn").css({ opacity: "1", cursor: "pointer" });
        $(".fax-animation").addClass("anim-appear").show(500);
        $(".fax-animation").css("overflow", "inherit");
        $(".fax-keyboard-confirm-section").css("width", "696px");
        //msgdisplay();
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
            $(".Fax-sent").css("display", "block");
        }
        setTimeout(msgdisplay1, 0);
        setTimeout(msgdisplay2, 3000);
        setTimeout(msgdisplay3, 6000);
        setTimeout(msgdisplay4, 9000);
        setTimeout(msgdisplay5, 11000);

        $(".Fax-content-confirm").hide();
        $(".icon-cancel .Cancel-btn").click(function() {
            $(".Cancel-btn").css("opacity", "0.3");
            $(".fax-gif-anim").hide();
            $(".fax-animation .show").hide();
            $(".fax-animation-content .cancel-fax")
                .css("display", "block")
                .show(2000);
            setTimeout(function() {
                $(".Print-content-main").css("display", "block");
            }, 4000);
            setTimeout(function() {
                $(".Main-content").hide();
                location.reload();
            }, 4000);
        });

        setTimeout(faxanimation, 12800);
    });

    function faxanimation() {
        console.log("animation end");
        $(".Print-content-main").css("display", "block");
        $(".Cancel-btn").css("opacity", "0.3");
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
        setTimeout(faxlanding, 12800);
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
        console.log("send_contact() clicked")
        $(".Fax-content-add-recipient").addClass("anim-disappear").hide();
        $(".hi-light-copy").css("width", "545px");
        $(".Fax-Section").addClass("anim-disappear").hide(300);
        $(".Top-shade").css("width", "500px");
        $(".Send-to-contact").show();
        $(".fax-keyboard-confirm-section .done-but").show();
    });
    
    $(".send-to-cont").click(function() {
        history_details.push("showFaxsendtocont()");
        console.log("send to content to fax");
        $(".Fax-content-add-recipient").addClass("anim-disappear").hide();
        $(".hi-light-copy").css("width", "545px");
        $(".Fax-Section").addClass("anim-disappear").hide(300);
        $(".Top-shade").css("width", "500px");
        $(".Send-to-contact").removeClass("anim-disappear").show();
        $(".count-checkboxes-wrapper").css("opacity", "1");
        $(".fax-keyboard-confirm-section .done-but").show();
    });

    $(".menu-num li").click(function() {
        var selText = $(this).text();
        $(".copy-num").css("margin-top", "-8px");
        $(this).addClass("active");
        // $(this).parents('.example1').find('.copy-num').html('<li class="copy-num" style="margin-top: -10px;"># Copies'+ selText +'</li>');
        $(".example1").find(".copy-num").html('<img class="copy-icon" src="./images/Icons_SVG/u17.png">&nbsp;&nbsp;Copies <span class="copies-txt">' + selText + "</span>");
    });

    function onScreenEntryOptions() {
        $(".option-content").animate({ marginLeft: "0px" }, 600);

        setTimeout(function() {
            $(".option-function").show();
            $(".option-content").css({ opacity: "1", visibility: "visible" });
            $(".option-function").css({ opacity: "1", visibility: "visible" });
        }, 600);
    }

    $(".option-landing ul .option-scan").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        console.log("option scan clicked", history_details);

        $(".option-landing").css({ opacity: "0.3" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);

        $(".option-landing-scanmode .optionli-scan-child1").css("margin-top", "-10px");
        $(".option-landing-scanmode").css({ opacity: "0.3", position: "fixed" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing-scanmode").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-scanmode").show();
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "10px" }, 600);
            setTimeout(function() {
                $(".option-landing-scanmode").css({ opacity: "1" });
            }, 600);
        }, 900);

        if (event.target.textContent === "Document") {
            //  $(".optionli-scan-child1").css('margin-top','-10px');
            $("#trigger-scan1").css("checkbox", "checked");
        } else if (event.target.textContent === "Photo") {
            $(".optionli-scan-child1").css("margin-top", "-98px");
        } else if (event.target.textContent === "ID Card") {
            $(".optionli-scan-child1").css("margin-top", "-186px");
        }
    });

    $(".option-landing ul .option-sides").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        console.log("option sides clicked", history_details);
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
            // $(".option-function").css('opacity','0');
            // $(".option-content").css({'margin-left':'20%'});
            $(".option-landing-sides").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-sides").show();
            $(".option-content").css({ "margin-left": "2.162em" });
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "10px" }, 600);

            setTimeout(function() {
                $(".option-landing-sides .option-function").css({
                    visibility: "visible"
                });
                $(".option-landing-sides").css({ opacity: "1" });
            }, 600);
        }, 900);

        if (event.target.textContent === "1 to 1-Sided") {
            $(".optionli-land-child1").css("margin-top", "-21px");
        } else if (event.target.textContent === "1 to 2-Sided") {
            $(".optionli-land-child1").css("margin-top", "-109px");
        }
    });

    $(".option-landing ul .option-color").click(function(event) {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        console.log("option color clicked", history_details);
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
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "10px" }, 600);
            setTimeout(function() {
                $(".option-landing-color").css({ opacity: "1" });
            }, 600);
        }, 900);

        if (event.target.textContent === "Automatic") {
            $(".optionli-color-child1").css("margin-top", "-24px");
        } else if (event.target.textContent === "Color") {
            $(".optionli-color-child1").css("margin-top", "-112px");
        } else if (event.target.textContent === "Grayscale") {
            $(".optionli-color-child1").css("margin-top", "-200px");
        }
    });

    $(".option-landing ul .option-resize").click(function() {
        if (history_details.indexOf("delayScanMode()") === -1) {
            history_details.push("delayScanMode()");
        }
        console.log("option resize clicked", history_details);
        $(".option-landing").css({ opacity: "1" });
        setTimeout(function() {
            $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 600);
            $(".option-landing .option-function").hide(200);
            setTimeout(function() {
                $(".option-landing").css({ "margin-left": "-42.162em" });
            }, 300);
        }, 600);

        $(".option-landing-resize .optionli-scan-child1").css(
            "margin-top",
            "-24px"
        );
        $(".option-landing-resize").css({ opacity: "1", position: "fixed" });
        setTimeout(function() {
            $(".option-content").css({ "margin-left": "2.162em" });
            $(".option-landing-resize").css({ "margin-left": "0px" });
        }, 900);
        setTimeout(function() {
            $(".option-landing-resize").show();
        }, 900);
        setTimeout(function() {
            $(".option-content").animate({ "margin-left": "10px" }, 600);
            setTimeout(function() {
                $(".option-landing-resize").css({ opacity: "1" });
            }, 600);
        }, 900);

        if (event.target.textContent === "None") {
            $(".optionli-resize-child1").css("margin-top", "-24px");
        } else if (event.target.textContent === "Custom") {
            $(".optionli-resize-child1").css("margin-top", "-112px");
        } else if (event.target.textContent === "Fit to Page") {
            $(".optionli-resize-child1").css("margin-top", "-200px");
        }
    });
    //---- Ranjith end ------
    $(".carousel-item.scan-icon").click(function() {
        $(".Landing-Page").hide(0);
        $(".Copy-Section").hide(50);
        $(".Scan-Section").show(10);
        //$(".second-Row").addClass('secondrow-push');
    });
    /**** Copy Mouse Event */
    $('.copy-page').mouseup(function() {
        // console.log("testing");
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_l.svg')");
    });
    $('.copy-page').mouseout(function() {
        // console.log("testing");
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_l.svg')");
    });
    $('.copy-page').mousedown(function() {
        $('.copy-page').css('background-image', "url('./images/Icons_SVG/copy_pressed_l.svg')");
    });
    /**** End Copy Mouse Event */

    /**** ID Mouse Event */
    $('.ID-Page').mouseup(function() {
        // console.log("testing");
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_l.svg')");
    });
    $('.ID-Page').mouseout(function() {
        // console.log("testing");
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_l.svg')");
    });
    $('.ID-Page').mousedown(function() {
        $('.ID-Page').css('background-image', "url('./images/Icons_SVG/id_pressed_l.svg')");
    });
    /**** End ID Mouse Event */

    /**** Smarttask-Page Mouse Event */
    $('.Smarttask-Page').mouseup(function() {
        // console.log("testing");
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    $('.Smarttask-Page').mouseout(function() {
        // console.log("testing");
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    $('.Smarttask-Page').mousedown(function() {
        $('.Smarttask-Page').css('background-image', "url('./images/Icons_SVG/smarttask_l.svg')");
    });
    /**** End Smarttask-Page Mouse Event */

    /**** Menu Mouse Event */
    $('.Menu-Page').mouseup(function() {
        // console.log("testing");
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_l.svg')");
    });
    $('.Menu-Page').mouseout(function() {
        // console.log("testing");
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_l.svg')");
    });
    $('.Menu-Page').mousedown(function() {
        $('.Menu-Page').css('background-image', "url('./images/Icons_SVG/menu_pressed_l.svg')");
    });
    /**** End Menu Mouse Event */

    /**** Scan Mouse Event */
    $('.Scan-Page').mouseup(function() {
        // console.log("testing");
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_l.svg')");
    });
    $('.Scan-Page').mouseout(function() {
        // console.log("testing");
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_l.svg')");
    });
    $('.Scan-Page').mousedown(function() {
        $('.Scan-Page').css('background-image', "url('./images/Icons_SVG/scan_pressed_l.svg')");
    });
    /**** End Scan Mouse Event */

    /**** FAX Mouse Event */
    $('.Fax-Page').mouseup(function() {
        // console.log("testing");
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_l.svg')");
    });
    $('.Fax-Page').mouseout(function() {
        // console.log("testing");
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_l.svg')");
    })
    $('.Fax-Page').mousedown(function() {
        $('.Fax-Page').css('background-image', "url('./images/Icons_SVG/fax_pressed_l.svg')");
    });
    /**** End FAX Mouse Event */

    $('.backspance-keyb').mouseout(function() {
        // console.log("testing");
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_m.svg') left center");
    })
    $('.backspance-keyb').mousedown(function() {
        $('.backspance-keyb').css('background-image', "url('./images/Icons_SVG/backspace_pressed_m.svg') left center");
    });

    $('.number').css({ backgroundcolor: "#333333", color: '#fff' });
    $('.number').mouseout(function() {
        $(this).css('background-color', "#333333");
        $(this).css('color', "#fff");
        $('.fax-keys').css('color', "#8C8C8E");
    })
    $('.number').mousedown(function() {
        $(this).css('background-color', "#fff");
        $(this).css('color', "#000");
        // $('.fax-keys').css('color', "#000");
    });

    $("#introduction .copy-page").click(function() {
        history_details.push("showCopyLandingPage()");
        if ($(this).hasClass("active")) {
            $(".back-btn").css("opacity", "1");
            $(".back-btn").css("cursor", "pointer");
            $(".Smarttask-Page").animate({ zoom: ".5", opacity: ".2" }).hide(100);
            $(".Menu-Page").animate({ zoom: ".6", opacity: ".2" }).hide(100);
            $(".ID-Page").animate({ zoom: ".6", opacity: ".2" }).hide(100);
            $(".Scan-Page").animate({ zoom: ".5", opacity: ".2" }).hide(100);
            $(".indicators .active").animate({ zoom: ".9", opacity: ".2", left: "-250px" }).hide(100);
            $(".copy-page").animate({ opacity: ".2", left: "-250px" }).hide(400);
            $(".Print-content-main").hide(400);
            $(".hi-light-copy").hide();
            // $(".Copy-Content .example1").delay(300).show(500);
            $(".Copy-Content .example1").animate({ opacity: 1, left: "0px" }).hide(00);

            setTimeout(function() {
                $(".Landing-Page .Main-content").show(00);
                $(".Copy-Content .example1").show(00);
                $(".hi-light-copy").show(000);
                $(".Landing-Page .example1").css("visibility", "visible");
                $(".icon-rt").css("display", "block");
                $(".send-but").css("display", "none");
                $(".icon-rt .but-text").css("visibility", "visible");
            }, 400);
        }
    });

    $(".copy-num").click(function() {
        if (history_details.indexOf("showCopies1()") === -1) {
            history_details.push("showCopies1()");
        }

        /*$(".hi-light-copy").css({'width':'450px'},{'transition':' width 2s'});*/
        $(".hi-light-copy").animate({ width: "545px" }, 100);
        // $(".hi-light-copy").addClass('move-me-3');
        // $(".icon-round").css('transition','1s');
        // $(".icon-round").show(1000);
        $(".scrollspy").css({ width: "525px" });
        $(".copy-button .done-but").animate({ width: "80px", height: "90px" }, 100);

        $(".copy-button .done-but").addClass("move-me-2");
        // $(".Copy-Content .example1").addClass('First-block-animation').hide(500);
        $(".Copy-Content .example1").animate({ left: "-2.162em" }, 100);
        $(".Copy-Content .example1").animate({ opacity: "0" }).hide(100);
        // $(".Copy-Content .example2").css('opacity','0');
        // $(".Copy-Content .example2").animate({"opacity": "1"}).show(100);

        $(".copy-button .done-but-tick1").show(100);
        $(".copy-button .but-text").hide();
        // $(".copy-button .done-but").hide();
        $(".options").hide();
        $(".no-row").hide();
        $(".example3").hide();
        // $(".Copy-Content .example2").delay(150).animate({ opacity : 1, left : "0px" }, 1000).show();
        // $(".Copy-Content .example2 .menu-num").delay(150).animate({ opacity : 1, left : "0px" }, 1000).show();
        // $(".example2").delay(500).animate({ opacity: 1, left: "0px" }, 1000).show();
        $(".example2").delay(1500).css('opacity', '1').addClass('anim-appear').show();
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "0px" }, 1000).show();
    });

    $(".Print-content-copy .done-but-tick1").click(function() {
        console.log("copy button click");
        doneButTick1();
        $("#Landing-copy-page").css({ left: "0px" });
        $(".scrollspy").css({ width: "437px" });
    });

    function doneButTick1() {
        $(".hi-light-copy").animate({ width: "395px" }, 100);
        $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".example2 .menu-num").delay(150).animate({ opacity: 1, left: "2.162em" }, 1000).hide();
        $(".copy-button .done-but").animate({ width: "240px", height: "90px" }, 100);

        $(".copy-button .but-text").show(100);
        $(".copy-button .done-but-tick1").hide(0);
        $(".options").show();
        $(".copy-button .done-but").removeClass("move-me-2");
        $(".copy-button").show(10);
        $(".Print-content-copy .example2").hide(100);
        $(".Print-content-copy .example1").show(300);
        $(".Copy-Content .example1").animate({ opacity: "1" }).show(600);
    }

    $(".Fax-Page").click(function() {
        history_details.push("showFaxLandingPage()");
        $(".carousel-item .back-btn").css("cursor", "pointer");
        if ($(this).hasClass("active")) {
            $(".back-btn").css("opacity", "1");
            $(".hi-light-copy").animate({ width: "658px" }, 500);
            $(".hi-light-copy").css("margin-left", "19px");
            $(".Landing-Page").show(10);
            $(".example1").css("display", "none");
            $(".Landing-Page .Main-content").show();
            $(".Main-content .Print-content-copy").show();
            $(".Landing-Page .Print-content-main").hide();
            $(".Print-content-copy").show();
            setTimeout(faxtxtlanding, 500);
        }
    });

    function faxtxtlanding() {
        // $(".Main-content .Fax-Section").show(1000);
        $(".Main-content .Fax-Section").css("display", "block").addClass("anim-txt");
    }

    $(".fax-number").click(function() {
        history_details.push("showFirstLandingPage()");
        $(".Fax-Section").addClass("anim-disappear");
        $(".Fax-Section").hide(100);
        $(".scrollspy").css("width", "696px");
        setTimeout(faxkeyboard, 300);
    });

    function faxkeyboard() {
        $(".hi-light-copy").animate({ marginTop: "-80px", opacity: "0" }).hide(50);
        $(".fax-keyboard-section").addClass("anim-appear-bot-top");
        $(".fax-keyboard-section").css({ opacity: "1", marginTop: "0px" }).show(50);
        $(".fax-keyboard-confirm-section .Fax-content-add-recipient").hide();
        $(".Top-shade").hide();
        $(".Bottom-shade").hide();
    }
    
    $(".options").click(function() {
        console.log("click options");
        history_details.push("showOption()");
        $(".option-landing ul li:first-child").css("height", "82px");
        $(".done-but").hide();
        $(".example1").addClass("transitionLR");

        setTimeout(hideexample1, 600);
        $(".hi-light-copy").animate({ width: "658px" }, 600);
        setTimeout(hidebut, 700);
    });

    function hideexample1() {
        $(".example1").hide();
        $(".Print-content-copy .option-landing").show();
        onScreenEntryOptions();
        $(".scrollspy").css({ width: "696px" });
        $(".Print-content-copy .option-landing .optionli").css("margin-top", "-5px");
    }

    function hidebut() {
        $(".icon-rt").hide(10);
    }

    /*Copy button click event*/
    $(".copy-button .but-text").click(function() {
        $(".Print-content-copy").hide(10);
        $(".Top-shade").hide(10);
        $(".Bottom-shade").hide(10);
        $(".icon-cancel .Cancel-btn").css({ opacity: "1", cursor: "pointer" });
        $(".back-btn").css("opacity", "0.3");
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
        }, 3800);

        $(".icon-cancel .Cancel-btn").css("opacity", "1").click(function() {
            $(".Dot-Section .show").hide();
            setTimeout(cancelcopying, 10);
        });

        setTimeout(explode, 3000);

        //  $('.Copying-txt').fadeIn('slow', function(){
        //       $('.Copying-txt').delay(5000).fadeOut();
        //       setTimeout(printcopy, 5500);
        //    });
        //    function printcopy(){
        //       $('.Printing-txt').fadeIn('slow', function(){
        //          $('.Printing-txt').delay(4000).fadeOut();
        //          setTimeout(completecopy, 4500);
        //       });
        //    }
        //    function completecopy(){
        //       $('.Complete-txt').fadeIn('slow', function(){
        //          $('.Complete-txt').delay(4000).fadeOut();
        //       });
        //    }

        //    $(".icon-cancel .Cancel-btn").css('opacity','1').click(function(){
        //       console.log("cancel button click from animation page");
        //       setTimeout(cancelcopying, 10);

        //       // $('.Cancel-copy').fadeIn('slow', function(){
        //       //    $('.Cancel-copy').delay(400).fadeOut();
        //       //    setTimeout(cancelcopying, 500);
        //       // });
        //    });
    });

    function cancelcopying() {
        // $(".Print-content-copy").show(10);
        // $(".Dot-Section").hide();
        // $(".icon-cancel .Cancel-btn").css('opacity','0.3');
        // $(".icon-cancel .Cancel-btn").css('cursor','pointer');
        // $(".Dot-Section .copy-gif-anim").hide(100);
        // $(".Dot-Section .Cancel-copy").show(10);
        $(".Dot-Section .copy-gif-anim").hide();
        $(".Cancel-copy").show(0);
    }

    function explode() {
        $(".loading").hide();
        setTimeout(nextscreen, 2000);
    }

    function nextscreen() {
        $(".Bottom-shade").hide();
        $(".Dot-Section").hide();
        $(".icon-cancel .Cancel-btn").css("opacity", "0.3");
        $(".Print-content-copy").hide();
        $(".Print-content-main").css("display", "block");
        location.reload();
    }

    $("#return").click(function() {
        window.history.back();
    });

    $(".example3 .copy-color-2 li").click(function() {
        $(".example3").hide(100);
        $(".example4").show();
    });

    $(document).ready(function() {
        var $checkboxes = $('.Send-checkbox-faxlist input[name="set-input"]');
        if ($("input.faxcheckbox").prop("checked")) {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            var countCheckedCheckboxess = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            var countCheckedCheckboxes1 = $checkboxes.filter(":checked").length;
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
        }
        $checkboxes.change(function() {
            var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
            $("#count-checked-checkboxes").text(countCheckedCheckboxes);
            $("#count-checked-checkboxess").text(countCheckedCheckboxes);
            $(".count-checked-checkboxes1").text(countCheckedCheckboxes);
            $("#edit-count-checked-checkboxes").val(countCheckedCheckboxes);
        });

        $("#multiEmail").mouseover(function() {
            $(".display").addClass('transcrolltxt');
        });
        $("#multiEmail").mouseout(function() {
            $(".display").removeClass('transcrolltxt').animate({});
        });
    });

    $(".swapMe-up .up1").click(function() {
        $(".Print-content-copy .scrollspy .copy-num").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example2 .no-first-row .num-first").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".option-landing-scanmode .optionli-scan-child1").animate({ 'marginTop': "-=90px" });
        $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $(".Fax-Section .Section-check-child1 ").animate({ 'marginTop': "-=90px" });
        $(".Fax-content-confirm .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $(".Send-to-contact .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $(".Fax-content-add-recipient .fax-check-child1").animate({ 'marginTop': "-=90px" });
    });
    $(".swapMe-down .down1").click(function() {
        $(".Print-content-copy .scrollspy .example2 .no-first-row .num-first").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-1 .copy-color-1-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".option-landing-scanmode .optionli-scan-child1").animate({ 'marginTop': "+=90px" });
        $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $(".Fax-Section .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $(".Fax-content-confirm .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $(".Send-to-contact .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $(".Fax-content-add-recipient .fax-check-child1").animate({ 'marginTop': "+=90px" });
    });
    $(".swapMe-up .up2").click(function() {
        $(".Print-content-copy .scrollspy .example2 .no-second-row .num-second").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({ 'marginTop': "-=90px" });
        $(".option-landing-scanmode .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "-=90px" });
        $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({ 'marginTop': "-=90px" });
        $(".Fax-Section .Section-check-child1").animate({ 'marginTop': "-=90px" });
        $(".Fax-content-confirm .fax-check-child1 ").animate({ 'marginTop': "-=90px" });
        $(".Send-to-contact .Send-check-child1 ").animate({ 'marginTop': "-=90px" });
        $(".Fax-content-add-recipient .fax-check-child1").animate({ 'marginTop': "-=90px" });
    });
    $(".swapMe-down .down2").click(function() {
        $(".Print-content-copy .scrollspy .example2 .no-second-row .num-second").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example3 .copy-color-2 .copy-color-2-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .example4 .copy-color-3 .copy-color-3-1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing .option1 .optionli").animate({ 'marginTop': "+=90px" });
        $(".option-landing-scanmode .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $(".option-landing-sides .optionli-land-child .optionli-land-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing-color .optionli-color-child .optionli-color-child1").animate({ 'marginTop': "+=90px" });
        $(".Print-content-copy .scrollspy .option-landing-resize .optionli-resize-child1").animate({ 'marginTop': "+=90px" });
        $(".Fax-Section .Section-check-child1").animate({ 'marginTop': "+=90px" });
        $(".Fax-content-confirm .fax-check-child1 ").animate({ 'marginTop': "+=90px" });
        $(".Send-to-contact .Send-check-child1 ").animate({ 'marginTop': "+=90px" });
        $(".Fax-content-add-recipient .fax-check-child1").animate({ 'marginTop': "+=90px" });
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

    $(".indicators .indicator-item").eq(0).text("Smart Tasks");
    $(".indicators .indicator-item").eq(1).text("Menu");
    $(".indicators .indicator-item").eq(2).text("Copy");
    $(".indicators .indicator-item").css("width", "250px");
    $(".indicators .indicator-item").eq(3).text("ID Copy");
    $(".indicators .indicator-item").eq(4).text("Scan");
    $(".indicators .indicator-item").eq(5).text("Fax");

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
// document.addEventListener('DOMContentLoaded', function() {
//    //find wich slide is the middle one
//    var carousel_items = document.querySelectorAll('.carousel-item').length;
//    var middle_slide = Math.round(carousel_items / 2);
//    console.log("middle slide", middle_slide );
//    console.log('The slide in the middle is the ' + middle_slide + ' out of ' + carousel_items);

//    //Carousel initialization
//    var options = {};
//    var elems = document.querySelectorAll('.carousel');
//    var instances = M.Carousel.init(elems, options);

//    //Set the carousel to show the middle slide first
//    var elem = document.querySelector('.carousel');
//    var instance = M.Carousel.getInstance(elem);
//    instance.set(middle_slide);
//  })
// var pages = document.querySelectorAll(".carousel-item");

// for(var i=0; i<pages.length;i++) {
//     pages[i].addEventListener("click", function(e){
//       e.stopPropagation();
//     });
// }

document.addEventListener("DOMContentLoaded", function() {
    //   var elems = document.querySelectorAll(".carousel");
    setTimeout(function() {
        var carousel_items = document.querySelectorAll(".carousel-item").length;
        var middle_slide = Math.round(carousel_items / 5);
        //   var instances = M.Carousel.init(elems);

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
$(document).on("click", "ul li:not(:last-child)", function(e) {
    console.log('clicked');
})