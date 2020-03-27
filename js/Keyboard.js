$(function() {
    $(".clear").hide();
    $(".keys").click(function() {
        $(".clear").show();
    });

    // $(".back_btn").click(function(){
    //     $(".keyboard").hide();
    //     $(".fax_btn").show();
    // });

    var $display = $('#display');
    $display.val();
    $('#clear_btn').click(function() {
        $('.display').val($('.display').val().substring(0, $('.display').val().length - 1));
    });

    $(document).on('click', 'button.number-new', function() {
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
});
// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("one");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    modal.style.display = "none";
}