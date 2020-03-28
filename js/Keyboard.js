var emailAlphabetsKey = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz",".com","@","._-","123#"];
var emailNumbersKey = ["1","2","3","4","5","6","7","8","abc","9","0","!@#"];
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

    // $(document).on('click', 'button.number-new', function() {
    //     if ($display.val() != 0) {
    //         $display.val($display.val() + $(this).val());

    //     } else {
    //         $display.val($(this).val());
    //     }
    // });

    

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

    alphabetsKey(emailAlphabetsKey);
});

function alphabetsKey(data){
    console.log(data);
    $.each(data, function(index, value) {
        var i = index+1;
        $('#key'+i).val(value);
        $('#key'+i).html(value);
          
      });
}

function changeKeyboard(data){
    var value = $(data).attr('value');
    
    if(value === "123#"){
        
        alphabetsKey(emailNumbersKey); 
    }else if (value === "abc"){
        alphabetsKey(emailAlphabetsKey); 
    }

}
// Get the modal
var modal = document.getElementById("myModal");
// var btn = document.getElementById("key1");
// var span = document.getElementsByClassName("close")[0];


// span.onclick = function() {
//     modal.style.display = "none";
// }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function chooseLetters(data) {
   
    var value = $(data).attr('value');
    
    var letters = value.split(''); 
    if(letters.length > 1){
    $.each(letters, function(index, value) {
        var i = index+1;
        $('#chooseLetter'+i).val(value);
        $('#chooseLetter'+i).html(value);    
      });
      modal.style.display = "block";
    }else{
        console.log(value);
        myFunction(data);
    }
}
function myFunction(data) {
    console.log();
    modal.style.display = "none";
    var $display = $('#display');
    $display.val();
    var value = $(data).attr('value');
         if ($display.val() != 0) {
            $display.val($display.val() +value);

        } else {
            $display.val(value);
        }
}