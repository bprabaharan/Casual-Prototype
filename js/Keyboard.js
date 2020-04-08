var emailAlphabetsKey = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", ".com", "@", "._-", "123#"];
var emailNumbersKey = ["1", "2", "3", "4", "5", "6", "7", "8", "abc", "9", "0", "!@#"];
var emailHostnameKey = [".com", ".net", ".edu", ".org", ".biz", ".gov"];
var emailSpecialKey = [",*#", "%&~", "()!?", "';:", "/\\+=", "[]#", "!?", "#L$", "abc", "@", "._-", "123"];
var faxAddNumbers = [{ "img": "<img class='keyboard-icon-pop' src='./images/Icons_SVG/add_m.svg'>", "name": "addNum" },
    { "img": "<img class='keyboard-icon-pop' src='./images/Icons_SVG/add_contact_m.svg'>", "name": "addCont" }
];

$(function() {


    $(".clear").show();
    $(".keys").click(function() {
        $(".clear").show();
    });


    var $display = $('#display');
    $display.val();
    $('#clear_btn').click(function() {
        var display = $('#display').val().length;
        var multiEmaail = $("#multiFax > span").length;
        if (display > 0) {
            $('#display').val($('#display').val().substring(0, $('#display').val().length - 1));
        } else if (multiEmaail > 0) {
            $('#multiFax').children().last().remove();
            $('#multiFax').children().last().remove();
        }

    });

    $(document).on("click", "button.number", function() {
        console.log($display.val());
        if ($display.val() != 0) {
            $display.val($display.val() + $(this).val());
        } else {
            $display.val($(this).val());
        }
    });

    function phoneno() {
        $('#display').keypress(function(e) {
            var a = [];
            var k = e.which;

            for (i = 48; i < 58; i++)
                a.push(i);

            if (!(a.indexOf(k) >= 0))
                e.preventDefault();
        });
    }

    // alphabetsKey(emailAlphabetsKey);
});

function alphabetsKey(data) {
    console.log(data);
    $.each(data, function(index, value) {
        var i = index + 1;
        $('#key' + i).val(value);
        $('#key' + i).html(value);

    });
}

function changeKeyboard(data) {
    var value = $(data).attr('value');

    if (value === "123#" || value === "123") {
        alphabetsKey(emailNumbersKey);
    } else if (value === "abc") {
        alphabetsKey(emailAlphabetsKey);
    } else if (value === ".com") {
        chooseLetters(emailHostnameKey);
    } else if (value === "!@#") {
        alphabetsKey(emailSpecialKey);
    }

}
// Get the modal
var modal = document.getElementById("myModal");

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function chooseLetters(data) {
    $('.alphabat-num').css({ 'visibility': 'hidden' });
    console.log(data);
    if ($.isArray(data)) {
        var letters = data;
    } else {
        var value = $(data).attr('value');
        var letters = value.split('');
    }
    if (letters.length > 1) {
        $.each(letters, function(index, value) {
            var i = index + 1;
            $('#showLetter' + i).css({ 'visibility': 'visible' });
            $('#chooseLetter' + i).val(value);
            $('#chooseLetter' + i).html(value);
        });
        modal.style.display = "block";
    } else {
        console.log(value);
        myFunction(data);
    }
}

function addNumbers() {
    $('.alphabat-num').css({ 'visibility': 'hidden' });

    $.each(faxAddNumbers, function(index, data) {
        var i = index + 1;
        console.log(data)
        $('#showLetter' + i).css({ 'visibility': 'visible' });
        $('#chooseLetter' + i).val(data.name);
        $('#chooseLetter' + i).html(data.img);
    });
    modal.style.display = "block";
}

function myFunction(data) {
    console.log(data);
    modal.style.display = "none";
    var $display = $('#display');
    $display.val();
    var value = $(data).attr('value');
    if (value === "addNum") {
        addMultiFax();
    } else if (value === "addCont") {
        if (history_details.indexOf("showFaxbackspace()") === -1) {
            history_details.push("showFaxbackspace()");
        }
        if ($(".display").val() != '') {
            var faxtxt = $(".display").val();
            var faxtext = $(".display").val();
            var multiFax = '';
            var multiplFax = '';
            $("#multiFax > span").each(function() {
                // console.log($(this).text())
                multiFax = multiFax + '<span class="fax-txt">' + $(this).text() + ' </span> ';
                multiplFax = multiplFax + '<span class="fax-txt1">' + $(this).text() + ' </span> ';
            });
            $(".Fax-content-confirm .fax-txt-head-bind").html(multiFax);
            $(".fax-animation-count").html(multiplFax);
        }
        // $(".Fax-content-add-recipient").addClass("anim-disappear").hide();
        $(".fax-keyboard-section").removeClass("transitionBU").addClass("anim-disappear-top-bot").hide(300);
        $(".Top-shade").show();
        $(".Bottom-shade").show();
        $(".hi-light-copy").animate({ width: "545px", marginTop: "75px", opacity: "1" }).show();
        $(".Fax-Section").addClass("anim-disappear").hide(300);
        $(".Top-shade").css("width", "500px");
        $(".Send-to-contact").show();
        $(".fax-keyboard-confirm-section .done-but").show();

    } else if ($display.val() != 0) {
        $display.val($display.val() + value);

    } else {
        $display.val(value);
    }
}

function modelclose() {
    modal.style.display = "none";
}

function addMultiEmail() {
    var email = $("#display").val();
    var email_regex = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email_regex.test(email)) {
        $("#multiEmail").append("<span class='ei_box ei_valid'>" + email + "</span>");
        $("#display").val('');
    }
}

function addMultiFax() {
    var faxtxt = $("#display").val();
    var faxFormat = faxtxt.substring(0, 3) + '-' + faxtxt.substring(3);
    if (faxtxt != '') {
        $("#multiFax").append("<span class='ei_box ei_valid'>" + faxFormat + "</span><span class='ei_comma'> , <span>");
        $("#display").val('');
    }

}