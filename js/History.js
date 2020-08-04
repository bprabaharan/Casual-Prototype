var history_details = [];
var activScreen_history = [];
var activeScreen_help = '';
/**** Common History Back Click event start here */
$(".back-btn").click(function () {
    eval(history_details[history_details.length - 1]);
    activateOptionLanding();
    setTimeout(function () {
        activScreen_history = activScreen_history.slice(0, -1);
        historyActiveScreen('back');
    }, 100);
});
/**** Common History Back Click event end here */

/**** Enable/Disable swapeMe-down/swapeMe-up Click event start here */
function historyActiveScreen(back) {

    if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()) === "") {
        $('.swapMe-down').css('pointer-events', 'none');
    } else {
        $('.swapMe-down').css('pointer-events', 'auto');
    }
    if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()) === "") {

        $('.swapMe-up').css('pointer-events', 'none');
    } else {
        $('.swapMe-up').css('pointer-events', 'auto');
    }
    $('.swapMe-down .down1').css('pointer-events', 'inherit');
    $('.swapMe-up .up1').css('pointer-events', 'inherit');
}

function activateOptionLanding() {

    if (activScreen_history[activScreen_history.length - 1] === ".example1") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".option-landing") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".option-landing-bright") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".example2") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Send-to-contact") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Fax-content-add-recipient") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Fax-content-confirm") {

    } else {

        $(activScreen_history[activScreen_history.length - 1] + ' ul li').removeClass("active");
        $(activScreen_history[activScreen_history.length - 1] + ' ul li input[type=checkbox]').each(function () {

            var $this = $(this);
            if ($this.is(':checked')) {
                $(this).closest('li').addClass("active");
            }
        });
    }
}
/**** Enable/Disable swapeMe-down/swapeMe-up Click event start here */

/**** All the History/Back functions start Here  */
function showCopyLandingPage() {
    history_details.pop();
    location.reload(false);
}

function showFaxLandingPage() {
    $(".Fax-Section").hide(10);
    $(".hi-light-copy").animate({ marginTop: "72px", opacity: "0" }, 100).hide();
    $(".back-btn").css("opacity", "0");
    location.reload();
}

function showMenuLandingPage() {
    $(".Menu-Section").hide(10);
    $(".hi-light-copy").animate({ marginTop: "72px", opacity: "0" }, 100).hide();
    $(".back-btn").css("opacity", "0");
    location.reload();
}
function supplies_his() {
    setTimeout(function () {
        $(".colorink-section").removeClass('anim-top-bottom').hide();
    }, 100);
    setTimeout(function () {
        $(".Menu-Section").addClass('transitionLR-reload').show();
        $hiLightCopy.show(00);
    }, 100)

    $(".Top-shade ,.Bottom-shade").show();
    // // $(".Settings-Section").addClass('anim-appear').hide(100);
    // $(".Settings-Section").removeClass('anim-txt').css('opacity', '0').hide(100);
    // // $(".Menu-Section").addClass('anim-txt').show(100).animate({ left: '0px' });
    // $(".Menu-Section").addClass('transitionLR-reload').removeClass('anim-re-left-right').show(100);
    history_details.pop();
}
function cimg_his() {
    $(".colorink-section").removeClass('anim-top-bottom').show(100);
    $(".colorink-section-landing").hide();
    $(".colorink-section-landing-content, #colorink-section-landing").show();
    setTimeout(function () {
        $(".colorink-section-landing-content").addClass('opacity-view').hide();
    }, 300);
    setTimeout(function () {
        $("#colorink-section-landing").addClass('anim-txt').hide();
    }, 300);
    $hiLightCopy.hide(00);
    $(".Top-shade ,.Bottom-shade").hide();
    history_details.pop();
}

function tickimg_his() {
    $(".colorink-section").addClass('anim-top-bottom').removeClass('anim-bot-top').hide();

    $(".colorink-section-second-landing").show();
    $hiLightCopy.hide(00);
    $(".Top-shade ,.Bottom-shade").hide();
    history_details.pop();
}
function colorinktickimghis() {
    $(".colorink-section-landing-content").addClass('opacity-view').show(100);
    $(".colorink-section-landing").show(100);
    $(".colorink-section-second-landing").hide();
    $hiLightCopy.hide(00);
    $(".Top-shade ,.Bottom-shade").hide();
    history_details.pop();
}


function settings_page() {
    // $(".Settings-Section").addClass('anim-appear').hide(100);
    $(".Settings-Section").removeClass('anim-txt').css('opacity', '0').hide(100);
    // $(".Menu-Section").addClass('anim-txt').show(100).animate({ left: '0px' });
    $(".Menu-Section").addClass('transitionLR-reload').removeClass('anim-re-left-right').show(100);
    history_details.pop();
}

function settings_network_page() {
    $(".Settings-network-Section").removeClass('anim-txt').css('opacity', '0').hide(100);
    $(".Settings-Section").removeClass("anim-appear");
    // $(".Menu-Section").addClass('anim-txt').show(100).animate({ left: '0px' });
    $(".Settings-Section").addClass('transitionLR-reload').removeClass('anim-re-left-right').show(100);
    history_details.pop();
}

function Settings_wifi_page() {
    $settingwifisection.removeClass('anim-txt').css('opacity', '0').hide(100);
    $("#wifislider").css({ opacity: '0', right: '60px' });
    $(".Settings-network-Section").removeClass("anim-appear");
    $(".Settings-network-Section").addClass('transitionLR-reload').removeClass('anim-disappear').show(100);
    history_details.pop();
}


function showFirstLandingPage() {
    $("#myModal").hide();
    $(".Side-shade").show();
    $(".Fax-Section").removeClass("anim-disappear");
    $(".fax-keyboard-section").removeClass("transitionBU").animate({ marginTop: "250px", opacity: "0" }, 600).hide(600);
    $(".Fax-Section").removeClass("anim-txt");
    $(".hi-light-copy").addClass('anim-show-top-bot').animate({ marginTop: '70px', opacity: '1', display: 'block', width: '658px' }).show(100);

    $(".scrollspy").css("width", "600px");
    $(".Top-shade,.Bottom-shade").show(300);
    $(".Fax-Section").delay(1000).removeClass("anim-disappear").addClass("anim-reappear-left-right").show(300);
    $("#multiFax").css({ "left": "0px" });
    history_details.pop();
}

function send_contact() {
    $(".count-checkboxes-wrapper").removeClass('opac-view').hide();
    setTimeout(function () {
        $(".Send-to-contact").removeClass('anim-txt').hide(300);
    }, 300)
    setTimeout(function () {
        $('.Fax-Section').removeClass('anim-disappear');
        $(".hi-light-copy").animate({ width: '658px' });
        $('.Fax-Section').animate({ left: '0px', opacity: '1' }).show();

        $(".Top-shade").css("width", "600px");
    }, 1000);
    history_details.pop();
}
function sliderMode() {
    $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '696px');
    $(".down2").show();
    $(".Notification-with-button").hide();
    $("#wifiselect").removeAttr('checked');
    $(".hi-light-copy").css('opacity', '1');
    $(".menu-txt-head").css({ "opacity": "1" });
    // $(".menu-txt-head").css({ "margin-left": "2.162em" });
    $settingwifisection.removeClass("anim-txt");
    // $(".Settings-wifi-Section").show();
    // $("#wifislider").css('opacity', '1').show(300);
    setTimeout(function () {
        $settingwifisection.show(00).css('opacity', '1');
        $(".Settings-wifi-Section").animate({ "margin-left": "0px" }, 300);

        // $(".menu-txt-head").css({ "opacity": "1" });
        // $("#wifislider").css('opacity', '1');
        $(".menu-txt-head").animate({ "margin-left": "0" }, 300);
        setTimeout(function () {
            $("#wifislider").css('opacity', '1');
        }, 300);
    }, 300);
    $(".hi-light-copy").show();
    $(".Top-shade, .Bottom-shade").show();
    history_details.pop();

}
function viewdetailsMode() {
    $(".Top-shade, .Bottom-shade, .swapMe-up, .swapMe-down").css('width', '696px');
    $(".down2").show();
    $(".Settings-wifi-Section").removeClass("transitionLR-reload");
    $(".Settings-wifi-Section").removeClass("anim-appear");
    $(".Notification-with-icon").hide();
    // $(".Settings-wifi-Section").show();
    $settingwifisection.removeClass("anim-txt");

    setTimeout(function () {
        $settingwifisection.show(00).css('opacity', '1');
        $(".Settings-wifi-Section").animate({ "margin-left": "0px" }, 300);

        // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
        // $(".Settings-network-Section").addClass('anim-disappear').hide(100).removeClass('anim-txt');
        // $("#wifislider").css({ opacity: '1', right: '60px' });
    }, 300);
    $(".Bottom-shade, .Top-shade, .hi-light-copy").show();
    $(".help_icon_container").css('opacity', '0').addClass("disabledbutton");
    history_details.pop();
}

function connectionMethod() {
    setTimeout(function () {
        $(".Wifi-Connection-Method .option-function").hide();
        $(".help_icon_container").css({ opacity: "0" }).addClass("disabledbutton");
        setTimeout(function () {
            $(".Wifi-Connection-Method .option-content").animate({ "margin-left": "2.162em" },
                300
            );
            $(".Wifi-Connection-Method").hide(400);
            historyActiveScreen();
            $settingwifisection.removeClass("anim-txt");
            $("#conn_method").css({ opacity: '0' });
            setTimeout(function () {
                $settingwifisection.show(00).css('opacity', '1');
                $(".Settings-wifi-Section").animate({ "margin-left": "0px" }, 300);

                // $(".Menu-Section").animate({ left: '-60px' }, { opacity: '0' }).hide(100);
                // $(".Settings-network-Section").addClass('anim-disappear').hide(100).removeClass('anim-txt');
                $("#wifislider").css({ opacity: '1', right: '60px' });
                setTimeout(function () {
                    $("#conn_method").css({ opacity: '1' });
                }, 300);
            }, 300);
        }, 300);
    }, 500);
    history_details.pop();
}
// function notificationprint() {
//     $(".Notification-with-icon").hide();
//     $(".processing_screen").show();
//     $(".notification_content").hide();
//     $(".Settings-wifi-Section").show();
// }
function set_tick() {
    $(".hi-light-copy").animate({ width: "552px" }, 300);
    $(".scrollspy").css({ width: "580px" });
    $(".count-checkboxes-wrapper").css("opacity", "1");
    $(".Fax-content-confirm").addClass("anim-disappear").removeClass("anim-txt");
    $(".Fax-content-add-recipient").addClass("anim-disappear");
    $(".fax-txt-head-bind .fax-txt").show();
    $(".Fax-content-confirm").hide();
    $(".Send-to-contact").removeClass('anim-disappear').show(300);
    $(".Fax-content-confirm").hide();
    $(".fax-send-count").css("display", "none");
    $(".icon-rt .send-but, .icon-rt").css({ display: "none", width: "240px" });
    $(".icon-rt .done-but").css("display", "none");
    $(".icon-rt .done-button").css("display", "none");
    history_details.pop();
}

function showCopies1() {
    $(".hi-light-copy").animate({ width: "395px" }, 100);
    $(".copy-right-side").css('margin-left', '195px');
    $(".scrollspy").css({ width: "410px" });
    $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: '0', right: "-2.162em" }, 1000).hide();
    $(".example2 .menu-num").delay(150).animate({ opacity: '0' }, 1000).hide();
    $(".copy-button .done-but").animate({ width: "240px", height: "90px" }, 100).show();
    $(".copy-button .but-text").show(100);
    $(".copy-button .done-but-tick1").hide(0);
    $(".options").show();
    $(".copy-button .done-but").removeClass("move-me-2");
    $(".copy-button").show(10);
    $(".Print-content-container .example2").hide(100);
    $(".Print-content-container .example1").removeClass('anim-disappear').show(300);
    $(".Copy-Content .example1")
        .animate({ opacity: "1", left: '0.3em' })
        .show(600);
    history_details.pop();
}

function showFaxbackspace() {
    $(".Side-shade").hide();
    $(".Send-to-contact, .Fax-content-add-recipient").hide();
    $(".fax-keyboard-confirm-section .done-but").hide();
    $(".Top-shade").hide();
    $(".Bottom-shade").hide();
    $(".Fax-content-confirm li").removeClass("active");
    $(".Fax-content-confirm .fax-check-child1").addClass("active");
    $(".fax-keyboard-section").addClass("transitionBU").removeClass("anim-disappear-top-bot").removeClass('transitionUB');
    $(".fax-keyboard-section").animate({ marginTop: "0px", opacity: "1", width: '696px' }, 400).show(300);
    $(".Fax-content-confirm").hide(100);
    $(".hi-light-copy").animate({ marginTop: "-75px", opacity: "0" }).hide(00);
    $(".icon-rt").css("display", "none");
    $(".icon-rt .done-but, .fax-send-count").css("display", "block");
    $(".icon-rt .but-text").css("visibility", "hidden");
    $(".Fax-content-confirm").css({ width: "696px", display: "none" });
    $(".scrollspy").css("width", "696px");
    history_details.pop();
}

function showFaxaddreceipient() {
    setTimeout(function () {
        $(".icon-rt").css("display", "block");
        $(".send-but").addClass('opacity-view').show(100);
    }, 300);
    $(".hi-light-copy").animate({ width: "395px" }, 300);
    $(".scrollspy").css("width", "410px");
    $(".Fax-content-add-recipient .fax-check-child0").css("margin-top", "0px");
    $(".Fax-content-add-recipient").css("display", "block").addClass("anim-txt").hide(100);
    setTimeout(function () {
        $(".Fax-content-confirm").css("width", "460px;").removeClass("anim-disappear").show(100);
    }, 100);
    let marquee = document.getElementById('multiSendMarq');
    marquee.stop();
    $(".fax-send-count").css("display", "block");
    if ($(".fax-check-child1").hasClass("active")) {
        marquee.start();
    }
    history_details.pop();
}

function showFaxsendtocont() {
    $(".icon-rt .send-but, .icon-rt .done-but,.icon-rt .done-button ").css("display", "none");
    $(".count-checkboxes-wrapper").css("opacity", "1");
    $(".Fax-content-confirm").removeClass("anim-disappear");
    $(".Send-to-contact").removeClass("anim-disappear");
    $(".Send-to-contact").css("margin-top", "0px");
    $(".Top-shade").css("width", "500px");
    $(".Send-to-contact .Send-check-child1").css("margin-top", "0px");
    $(".Fax-Section .Fax-content").show();
    $(".Fax-content-add-recipient").removeClass("anim-disappear").addClass('anim-reappear-left-right').animate({ left: '0px' }).show(300);
    $(".Fax-content-confirm").hide();
    $(".Send-to-contact").css("display", "none").removeClass("anim-appear");
    $(".Send-to-contact .done-but").show();
    $(".Send-to-contact").css("width", "696px");
    $(".hi-light-copy").animate({ width: "658px" }, 300);
    history_details.pop();
}

function showOption() {
    $(".copy-right-side").css('margin-left', '195px');
    $(".option-content, .option-function").css({ opacity: "1" });
    $(".option-landing .option-content").animate({ "margin-left": "2.162em" }, 300);
    $(".option-landing .option-function").hide(200);
    $(".option-landing .option-content").removeClass('anim-txt').show(300);
    $(".option-landing .option-function").removeClass('opacity-view').show(300);
    setTimeout(function () {
        $(".option-landing").hide();
        $(".example1").removeClass("transitionLR");
        $(".example1").removeClass("anim-txt");
        $(".example1").hide();
        $(".example1").css({ animation: "floatText .0s ease-in-out" });
        $(".example1").css({ "margin-left": "-2.162em" });
        $(".example1").css({ opacity: "0.3" });
        $(".hi-light-copy").animate({ width: "395px" }, 200);
        $(".scrollspy").animate({ width: "410px" }, 200);
        $(".done-but,.copy-button").show(300);
        $(".icon-rt .but-text").css("visibility", "hidden");
        $(".copy-num").css({ "margin-top": "-90px" });
        setTimeout(function () {
            $(".example1").show();
            $(".example1").animate({ "margin-left": "0em" }, 300);
            setTimeout(function () {
                $(".option-function").hide();
                $(".example1").css({ opacity: "1" });
                $(".icon-rt .but-text").css("visibility", "visible");
            }, 200);
        }, 300);
    }, 300);
    history_details.pop();
}

function delayScanMode2() {
    // $(".Settings-wifi-Section").show(300);
    $(".option-landing-scanmode").hide();
    $(".option-landing").hide();
    $(".option-landing-sides").hide();
    $(".option-landing-color").hide();
    $(".option-landing-resize").hide();
    $(".option-landing").css({ "margin-left": "80px" });
    $(".Settings-network-Section").hide();
    $(".Settings-wifi-Section").hide();

    let cscreen = activScreen_history[activScreen_history.length - 2];
    setTimeout(function () {
        $(".option-landing").show();
        $(".option-landing").animate({ "margin-left": "0px" }, 600);
        setTimeout(function () {
            $("" + cscreen + " ul li .option-function").show();
            $(".option-landing").css({ opacity: "1", visibility: "visible" });
        }, 600);
    }, 600);
    history_details.pop();
}

function setBright() {
    history_details.pop();
    $(".option-landing .optionli").css("margin-top", "-360px");
    $(".hi-light-copy").css({ "background-color": "unset", "border": "4px solid rgb(255, 255, 255)" })
    $(".option-landing .option-content").css({ "margin-left": "0px" });
    setTimeout(function () {
        $(".hi-light-copy").show();
        setTimeout(function () {
            historyActiveScreen();
            $(".hi-light-copy").animate({ "width": "658px", "margin-left": "19px" }, 600);
            setTimeout(delayOptions, 300);
        }, 400);
    }, 500);
}

function delayOptions() {
    $(".option-landing-bright").hide();
    $(".option-landing").css({ "margin-left": "80px" });
    $(".Top-shade").css("background", "linear-gradient( to bottom, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.05) 95%, rgba(0, 0, 0, 0) 100%)");
    setTimeout(function () {
        $(".option-landing, .option-content").addClass('transitionLR-reload').show();
        $(".option-landing").animate({ "margin-left": "0px" }, 300);
        $(".option-landing").css({ opacity: "1", visibility: "visible" });
        setTimeout(function () {
            $(".option-function").addClass('opacity-view').show();
        }, 200);
    }, 300);
}
/**** All the History/Back functions ends Here  */