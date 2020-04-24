var history_details = [];
var activScreen_history = [];

$(".back-btn").click(function() {
    // console.log(history_details, history_details.length - 1);
    eval(history_details[history_details.length - 1]);

    activateOptionLanding();
    setTimeout(function() {
        activScreen_history = activScreen_history.slice(0, -1);
        historyActiveScreen('back');
    }, 100);

});

function historyActiveScreen(back) {
    console.log('historyActiveScreen', activScreen_history[activScreen_history.length - 1]);


    if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()) === "") {
        $('.swapMe-down').css('pointer-events', 'none');
        console.log($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').prev().text()));
    } else {
        $('.swapMe-down').css('pointer-events', 'auto');
    }
    if ($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()) === "") {

        $('.swapMe-up').css('pointer-events', 'none');
    } else {
        $('.swapMe-up').css('pointer-events', 'auto');
        console.log($.trim($(activScreen_history[activScreen_history.length - 1] + ' ul li.active').next().text()));
    }
    $('.swapMe-down .down1').css('pointer-events', 'inherit');
    $('.swapMe-up .up1').css('pointer-events', 'inherit');
}

function activateOptionLanding() {

    if (activScreen_history[activScreen_history.length - 1] === ".example1") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".option-landing") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".example2") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Send-to-contact") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Fax-content-add-recipient") {

    } else if (activScreen_history[activScreen_history.length - 1] === ".Fax-content-confirm") {

    } else {

        console.log('activateOptionLanding::::' + activScreen_history[activScreen_history.length - 1]);
        $(activScreen_history[activScreen_history.length - 1] + ' ul li').removeClass("active");
        $(activScreen_history[activScreen_history.length - 1] + ' ul li input[type=checkbox]').each(function() {

            var $this = $(this);
            if ($this.is(':checked')) {
                $(this).closest('li').addClass("active");
            }
        });
    }



}

function showCopyLandingPage() {
    history_details.pop();
    location.reload(false);
    // $(".back-btn").css("cursor", "pointer");
    // console.log("-----------", $(document.body.copypage).attr('id'));
    // var elem = document.querySelector(".carousel");
    // console.log("===================", elem);
    // var instance = M.Carousel.getInstance(elem);
    // console.log("instance + ", instance);
    // instance.set(5);


    // $(".Main-content").hide();
    // $(".Print-content-main").css('width','696px').delay(100).show(100);
    // $(".Smarttask-Page").animate({zoom: "1", opacity: ".2" }).show(100);
    // $(".Menu-Page").animate({ zoom: "1", opacity: ".2" }).show(100);
    // $(".ID-Page").animate({  zoom: "1", opacity: ".2" }).show(100);
    // $(".Scan-Page").animate({ zoom: "1", opacity: ".2" }).show(100);
    // $(".indicators").animate({ zoom: "1", opacity: "1", left: "0px" }).show(100);
    // $(".copy-page").animate({ zoom: "1", opacity: "1", left: "0px" }).show(200);
    // // $(".carousel-item").css({"transform":"translateX(150px)"});
    // $(".Print-content-main").show(200);
    // $(".hi-light-copy").hide();
    // $(".Copy-Content .example1").animate({ opacity: 1, left: "0px" }).hide(100);
    // $(".back-btn").css('opacity','0');
    // setTimeout(function() {
    //     $(".Landing-Page .example1").css({"visibility":"hidden"});
    //     $(".icon-rt .but-text").css("visibility", "hidden");
    //     $(".Landing-Page .example1 ul").animate({"margin":"0px 100px"},200);
    // },100);
}

function showFaxLandingPage() {
    $(".Fax-Section").hide(100);
    $(".hi-light-copy").animate({ marginTop: "72px", opacity: "0" }, 100).hide();

    $(".back-btn").css("opacity", "0");
    location.reload();
    //    $(".Main-content").hide();

    //    $(".Smarttask-Page").css({'transform' : 'translateX(280px)'}).show(100);
    //    $(".ID-Page").css({'transform' : 'translateX(280px)'}).show(100);
    //    $(".Scan-Page").css({'transform' : 'translateX(280px)'}).show(100);
    //    $(".Fax-Page").css({'transform' : 'translateX(280px)'}).show(100);

    // $(".Print-content-main").css('width','696px').delay(100).show(100);
    // $(".Smarttask-Page").animate({zoom: "1", opacity: ".2" }).show(100);
    // $(".Menu-Page").animate({ zoom: "1", opacity: ".2" }).show(100);
    // $(".ID-Page").animate({  zoom: "1", opacity: ".2" }).show(100);
    // $(".Scan-Page").animate({ zoom: "1", opacity: ".2"}).show(100);
    // $(".indicators").animate({ opacity: "1", left: "0px" }).show(100);
    // $(".Fax-Page").animate({ zoom: "1", opacity: "1" }).show(100);

    // $(".Print-content-main").show(400);
    // $(".hi-light-copy").hide();
    // // $(".Copy-Content .example1").delay(300).show(500);
    // $(".Copy-Content .example1").animate({ opacity: 1, left: "0px" }).hide(100);
    // $(".back-btn").css('opacity','0');
    // history_details.pop();
    // console.log(history_details, history_details.length - 1);
}

function showFirstLandingPage() {
    $(".fax-keyboard-section").removeClass("transitionBU").animate({ marginTop: "250px", opacity: "0" }, 600).hide(600);
    $(".Fax-Section").removeClass("anim-txt");
    $(".hi-light-copy").delay(100).animate({ marginTop: "70px", opacity: "1", width: "658px" }, 300).show(300);
    $(".scrollspy").css("width", "600px");
    $(".Top-shade,.Bottom-shade").show();
    $(".Fax-Section").delay(1000).removeClass("anim-disappear").addClass("anim-reappear-left-right").show(300);
    history_details.pop();
}

function send_contact() {
    // $(".Fax-content-add-recipient").removeClass("anim-disappear").addClass("anim-reappear-left-right").show(600);
    $(".Send-to-contact").removeClass("anim-disappear").hide(600);
    // $('.Send-to-contact').animate({ right: '0px', opacity: '0' }, 1000, function() {
    //     console.log("fax section hide")
    // }).hide(600);
    $(".fax-keyboard-confirm-section .done-but").hide(600);
    history_details.pop();
    setTimeout(function() {
        $(".hi-light-copy").css("width", "658px");
        // $(".Fax-Section").removeClass("anim-disappear").addClass("anim-reappear-left-right").show();
        $('.Fax-Section').animate({ left: '0px', opacity: '1' }).show();
        $(".Top-shade").css("width", "600px");
    }, 600);
}

function set_tick() {
    $(".hi-light-copy").animate({ width: "545px" }, 300);
    $(".scrollspy").css({ width: "500px" });
    $(".count-checkboxes-wrapper").css("opacity", "1");
    $(".Fax-content-confirm ul li:first-child").css("height", "70px");
    $(".Fax-content-confirm").addClass("anim-disappear");
    $(".Fax-content-add-recipient").addClass("anim-disappear");
    $(".fax-txt-head-bind .fax-txt").show();
    $(".Fax-content-confirm").hide();
    $(".Send-to-contact").removeClass('anim-disappear').show(300);
    $(".Fax-content-confirm").hide();
    $(".fax-send-count").css("display", "none");
    // $(".Fax-content-confirm .fax-check-child1").css("margin-top", "0px");
    $(".icon-rt .send-but, .icon-rt").css({ display: "none", width: "240px" });
    $(".icon-rt .done-but").css("display", "none");
    $(".icon-rt .done-button").css("display", "none");
    history_details.pop();
}

function showCopies1() {
    console.log("showCopies1");

    $(".hi-light-copy").animate({ width: "420px" }, 100);
    // $(".example2").removeClass('anim-appear').addClass('anim-disappear');
    $(".example2 .copy-ul .copy-num1").delay(150).animate({ opacity: '0', right: "-2.162em" }, 1000).hide();
    $(".example2 .menu-num").delay(150).animate({ opacity: '0' }, 1000).hide();
    $(".copy-button .done-but").animate({ width: "240px", height: "90px" }, 100).show();
    $(".copy-button .but-text").show(100);
    $(".copy-button .done-but-tick1").hide(0);
    $(".options").show();
    $(".copy-button .done-but").removeClass("move-me-2");
    $(".copy-button").show(10);
    $(".Print-content-copy .example2").hide(100);
    $(".Print-content-copy .example1").removeClass('anim-disappear').show(300);
    $(".Copy-Content .example1")
        .animate({ opacity: "1", left: '0.3em' })
        .show(600);
    history_details.pop();
    console.log(history_details);
}

function showFaxbackspace() {
    $(".Send-to-contact, .Fax-content-add-recipient").hide();
    $(".fax-keyboard-confirm-section .done-but").hide();
    $(".Top-shade").hide();
    $(".Bottom-shade").hide();
    $(".fax-keyboard-section").addClass("transitionBU").removeClass("anim-disappear-top-bot").show(600);
    $(".Fax-content-confirm").hide(100);
    $(".hi-light-copy").animate({ marginTop: "-75px", opacity: "0" }).hide(00);
    $(".icon-rt").css("display", "none");
    $(".icon-rt .done-but, .fax-send-count").css("display", "block");
    $(".icon-rt .but-text").css("visibility", "hidden");
    $(".Fax-content-confirm").css({ width: "696px", display: "none" });
    console.log("showbackspace");
    console.log(history_details, history_details.length - 1);
    history_details.pop();
}

function showFaxaddreceipient() {
    $(".send-but").show();
    $(".hi-light-copy").animate({ width: "395px" }, 300);
    $(".Fax-content-add-recipient .fax-check-child0").css("margin-top", "0px");
    $(".Fax-content-add-recipient")
        .css("display", "block")
        .addClass("anim-txt")
        .hide(100);

    setTimeout(function() {
        $(".Fax-content-confirm").css("width", "460px;").removeClass("anim-disappear").show(100);
    }, 0);
    console.log("showFaxaddreceipient");
    console.log(history_details, history_details.length - 1);
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

    // Fax-content-add-recipient
    // $(".Send-to-contact").css('width','485px');
    $(".Fax-content-confirm").hide();
    $(".Send-to-contact").css("display", "none").removeClass("anim-appear");
    $(".Send-to-contact .done-but").show();
    $(".Send-to-contact").css("width", "696px");
    // $(".hi-light-copy").css('width','460px');
    $(".hi-light-copy").animate({ width: "658px" }, 300);
    console.log("showFaxsendtocont");
    console.log(history_details, history_details.length - 1);
    history_details.pop();
}

function showOption() {
    console.log("showOption");
    $(".option-content, .option-function").css({ opacity: "1" });
    $(".option-landing .option-content").animate({ "margin-left": "-2.162em" }, 300);
    $(".option-landing .option-function").hide(200);
    setTimeout(function() {
        $(".option-landing").hide();
        $(".example1").removeClass("transitionLR");
        $(".example1").removeClass("anim-txt");
        $(".example1").hide();
        $(".example1").css({ animation: "floatText .0s ease-in-out" });
        $(".example1").css({ "margin-left": "-2.162em" });
        $(".example1").css({ opacity: "0.3" });
        $(".hi-light-copy").animate({ width: "395px" }, 200);
        $(".scrollspy").animate({ width: "437px" }, 200);
        $(".done-but,.copy-button").show(300);
        $(".icon-rt .but-text").css("visibility", "hidden");
        $(".copy-num").css({ "margin-top": "-90px" });
        setTimeout(function() {
            $(".example1").show();
            $(".example1").animate({ "margin-left": "0em" }, 300);
            setTimeout(function() {
                $(".option-function").hide();
                // $(".option-content, .option-function").css({ opacity: "0.3" });
                $(".example1").css({ opacity: "1" });
                $(".icon-rt .but-text").css("visibility", "visible");
            }, 200);
        }, 300);
    }, 300);

    history_details.pop();
    console.log(history_details, history_details.length - 1);
}

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
    }, 600);

    history_details.pop();
    console.log(history_details, history_details.length - 1);
}