
$(document).ready(function(){
    $(function() {
        $("#custom-modal").modal('show');
    });
    $('#go').on('click', function(){
        $("#custom-modal").modal('hide');
    });
//variables
var $1;
var $2;
var output;
var operations = [];
var display = $('#display');
var ac = $('#AC');
var ce = $('#CE');
var div = $('#DIV');
var mul = $('#MUL');
var seven = $('#7');
var eight = $('#8');
var nine = $('#9');
var sub = $('#SUB');
var four = $('#4');
var five = $('#5');
var six = $('#6');
var add = $('#ADD');
var one = $('#1');
var two = $('#2');
var three = $('#3');
var zero = $('#0');
var per= $('#PER');
var equals = $('#EQUALS');

//Function declarations
function Add(){
    $1 = parseInt(display.text());
    display.html("");
    operations.unshift(1);
    return $1, operations;
}
function Sub(){
    $1 = parseInt(display.text());
    display.html("");
    operations.unshift(2);
    return $1, operations;
}
function Mul(){
    $1 = parseInt(display.text());
    display.html("");
    operations.unshift(3);
    return $1, operations;
}
function Div(){
    $1 = parseInt(display.text());
    display.html("");
    operations.unshift(4);
    return $1, operations;
}
function Equals(){
    $2 = parseInt(display.text());
    if (operations[0] == 1){
        output = $1 + $2;
    } else if (operations[0] == 2){
        output = $1 - $2;
    } else if (operations[0] == 3){
        output = $1 * $2;
    } else if (operations[0] == 4){
        output = $1 / $2;
    } else{
        alert('You gotta enter numbers for the operation to work!');
    }
    display.html(output);
}
function cancelEntry(){
    if ($2 !== undefined){
        $2;
        display.html("");
    } else if ($1 !== undefined){
        $1;
        display.html("");
    } else {
        alert("Can't clear!");
    }
}
function clearAll(){
    display.html('');
    $2;
    $1;
    return $1, $2;
}
function Zero(){
    display.append(0);
}
function One(){
    display.append(1);

}
function Two(){
    display.append(2);

}
function Three(){
    display.append(3);

}
function Four(){
    display.append(4);

}
function Five(){
    display.append(5);

}
function Six(){
    display.append(6);

}
function Seven(){
    display.append(7);

}
function Eight(){
    display.append(8);

}
function Nine(){
    display.append(9);

}
function Period(){

}
ac.on('click', function(){
    clearAll();
    });
ce.on('click', function(){
    cancelEntry();
    });
div.on('click', function(){
    Div();
    });
mul.on('click', function(){
    Mul();
    });
seven.on('click', function(){
    Seven();
    });
eight.on('click', function(){
    Eight();
    });
nine.on('click', function(){
    Nine();
    });
sub.on('click', function(){
    Sub();
    });
four.on('click', function(){
    Four();
    });
five.on('click', function(){
    Five();
    });
six.on('click', function(){
    Six();
    });
add.on('click', function(){
    Add();
    });
one.on('click', function(){
    One();
    });
two.on('click', function(){
    Two();
    });
three.on('click', function(){
    Three();
    });
zero.on('click', function(){
    Zero();
    });
per.on('click', function(){
    Period();
    });
equals.on('click', function(){
    Equals();
    });

});
