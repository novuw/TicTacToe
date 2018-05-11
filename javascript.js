
$(document).ready(function(){
    $(function() {
        $("#custom-modal").modal('show');
    });
    $('#x').on('click', function(){
        $("#custom-modal").modal('hide');
        console.log('x');
        var $player2 = 'o';
        //Game logic variables declared,
        var table = document.querySelector('table');
        var turn = 0;
        var checkedSpots = [0];
        //Everything after occurs when you click on a cell in the table
        table.addEventListener('click', function (ev) {
            var serviceID = ev.target.id;
            //winnerCheckLogicX();
            if (checkedSpots.length >= 9){
                $(function() {
                    $("#draw-modal").modal('show');
                });
             }
            //should be checking for a draw
            //Marks selected spot, checks if already used
            if (checkedSpots.includes(parseInt(serviceID))){
                console.log('Already Picked!');
                alert('Already picked!');
                console.log(checkedSpots);
                return;
            } else if(turn % 2 == 0){
                $('#'+serviceID).html('x');
                turn++;
                checkedSpots.push(parseInt(serviceID));
                winnerCheckLogicX();
                return turn;
            } else {
                $('#'+serviceID).html($player2);
                turn++;
                checkedSpots.push(parseInt(serviceID));
                winnerCheckLogicX();
                return turn;
            }
        });
    });
    $('#o').on('click', function(){
        $("#custom-modal").modal('hide');
        console.log('o');
        var $player2 = 'x';
        //Game logic variables declared,
        var table = document.querySelector('table');
        var turn = 0;
        var checkedSpots = [0];
        //Everything after occurs when you click on a cell in the table
        table.addEventListener('click', function (ev) {
            var serviceID = ev.target.id;
            console.log(checkedSpots);
            //winnerCheckLogicO();
            if (checkedSpots.length >= 9){
                $(function() {
                    $("#draw-modal").modal('show');
                });
             }
            //should be checking for a draw
            //Marks selected spot, checks if already used
            if (checkedSpots.includes(parseInt(serviceID))){
                console.log('Already Picked!');
                alert('Already picked!');
                return;
            } else if(turn % 2 == 0){
                $('#'+serviceID).html("o");
                turn++;
                checkedSpots.push(parseInt(serviceID));
                winnerCheckLogicO();
                return turn;
            } else {
                $('#'+serviceID).html("x");
                turn++;
                checkedSpots.push(parseInt(serviceID));
                winnerCheckLogicO();
                return turn;
            }
        });
    });
    /*$('#restart').on('click', function ($team, $gM){
        $('#win-modal').modal('hide');
        $('#1').html("");
        $('#2').html("");
        $('#3').html("");
        $('#4').html("");
        $('#5').html("");
        $('#6').html("");
        $('#7').html("");
        $('#8').html("");
        $('#9').html("");
        gameRules($team, $gM);
    });*/
    //Function for checking winners and updating cells
    function winnerCheck(){
        var $t1 = $('#1').html();
        var $t2 = $('#2').html();
        var $t3 = $('#3').html();
        var $t4 = $('#4').html();
        var $t5 = $('#5').html();
        var $t6 = $('#6').html();
        var $t7 = $('#7').html();
        var $t8 = $('#8').html();
        var $t9 = $('#9').html();
        //Sees if anyone has won with X's
        if ($t1 == $t2 && $t2 == $t3){//($t1 == $t2 == $t3 && $t1, $t2, $t3 !== "")
            return $t1;
        } else if ($t4 == $t5 && $t5 == $t6){
            return $t4;
        } else if ($t7 == $t8 && $t8 == $t9){
            return $t7;
        } else if ($t1 == $t4 && $t4 == $t7){//Good
            return $t1;
        } else if ($t2 == $t5 && $t5 == $t8){//Good
            return $t2;
        } else if ($t3 == $t6 && $t6 == $t9){//Not good
            return $t3;
        } else if ($t1 == $t5 && $t5 == $t9){
            return $t1;
        } else if ($t3 == $t5 && $t5 == $t7){
            return $t3;
        } else {
            return -1;
        }
    }
    function winnerCheckLogicX(){
        if (winnerCheck() != -1 && winnerCheck() != ""){
            if (winnerCheck() == 'x'){
                //alert Player one wins!
                    $('#winEdit').html('X won!');
                    $("#win-modal").modal('show');

              } else{
                      $('winEdit').html('O won!');
                      $("#win-modal").modal('show');
                      table.off();

            }
        }
    }
    function winnerCheckLogicO(){
        if (winnerCheck() != -1 && winnerCheck() != ""){
            if (winnerCheck() == "o"){
                    $('#winEdit').html('O won!');
                    $("#win-modal").modal('show');
            } else{
                    $('#winEdit').html('X won!');
                    $("#win-modal").modal('show');
            }
        }
    }
    //Four combinations for game settings- SP/X, SP/O, TP/X, TP/O
});
