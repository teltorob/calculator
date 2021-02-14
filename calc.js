
const display= document.getElementById("display");
var display_string="";
var display_number=0;
var operation_type="";
var first_number=0;
var second_number=0;

function press(value)
{
    
    display_string+=value;
    display.innerText=display_string;
    display_number=parseFloat(display_string );
}

function binary_operation(type)
{
    first_number=display_number;
    display_string="";
    operation_type=type;
}
function equals()
{
    second_number=display_number;
    switch(operation_type)
    {
        case "add":
            {
                display_number= parseFloat(add());
                get_ready();
               
                break;
            }
        case "substract":
            {
                display_number=parseFloat(substract());
                get_ready();
                break;
            }
    
        case "divide":
            {
                display_number=parseFloat(divide());
                get_ready();
                break;
            }
        case "multiply":
            {
                display_number=parseFloat(multiply());
                get_ready();
                break;
            }

                            
    }
}
    
function add()
{
     return(first_number+second_number).toFixed(8);
}

function substract()
{
    return (first_number-second_number).toFixed(8);
}

function multiply()
{
    return (first_number*second_number).toFixed(8);
}

function divide()
{
    return (first_number/second_number).toFixed(8);
}

function percent()
{
    display_number=(display_number/100);
    get_ready();

}

function invert()
{
    display_number=(display_number*-1);
    get_ready();
}

function all_clear()
{
    first_number,second_number=0;
    display_number=0;
    get_ready();
}

function get_ready()
{
    display_string=display_number.toString();
    display.innerText=display_string;
    display_string="";
}