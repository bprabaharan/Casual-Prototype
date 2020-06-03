var emailAlphabetsKey = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", ".com", "@", "._-", "123#"];
var emailNumbersKey = ["1", "2", "3", "4", "5", "6", "7", "8", "abc", "9", "0", "!@#"];
var emailHostnameKey = [".com", ".net", ".edu", ".org", ".biz", ".gov"];
var emailSpecialKey = [",*#", "%&~", "()!?", "';:", "/\\+=", "[]#", "!?", "#L$", "abc", "@", "._-", "123"];
var faxAddNumbers = [{ "img": "<img class='keyboard-icon-pop add_pop' src='./images/Icons_SVG/add_s_hover.svg'>", "name": "addNum" },
    { "img": "<img class='keyboard-icon-pop add_cont_pop' src='./images/Icons_SVG/add_contact_m.svg'>", "name": "addCont" }
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
        if ($display.val() != 0 && $display.val().length < 12) {
            $display.val($display.val() + $(this).val());
        } else if ($display.val() == 0){
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
        myFunction(data);
    }
}

function addNumbers() {
    $('.alphabat-num').css({ 'visibility': 'hidden' });

    $.each(faxAddNumbers, function(index, data) {
        var i = index + 1;
        $('#showLetter' + i).css({ 'visibility': 'visible' });
        $('#chooseLetter' + i).val(data.name);
        $('#chooseLetter' + i).html(data.img);
    });
    modal.style.display = "block";
}

function myFunction(data) {
    $("#display").focus();
    $('#display').removeAttr('placeholder');
    modal.style.display = "none";
    var $display = $('#display');
    $display.val();
    var value = $(data).attr('value');
    if (value === "addNum") {
        if($("#display").val() === ""){
            $("#display").val("+")
        }

    } else if (value === "addCont") {

        addMultiFax();

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
    if(faxtxt.charAt(0) === "+"){
        var faxFormat = faxtxt.substring(0, 4) + '-' + faxtxt.substring(3);
    }else{
        var faxFormat = faxtxt.substring(0, 3) + '-' + faxtxt.substring(3);
    }
   
    if (faxtxt != '') {
        $("#multiFax").append("<span class='ei_box ei_valid'>" + faxFormat + "</span><span class='ei_comma'> ; <span>");
        $("#display").val('');
        //set the style and append to head
        
    }

}