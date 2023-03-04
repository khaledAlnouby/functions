function compare(x,y)
{
    if(x>y)
    {
        console.log(x)
        // return x ; 
    }
    else if(y>x)
    {
        console.log(y)
        // return y ; 
    }
}
function MaxMin(x,y,z){
    if(x>y && x>z)
    console.log(x)
    else if(y>x && y>z)
    console.log(y)
    else if(z>y && z> x)
    console.log(z)
        else
        console.log("they are equal ")
}
var firstNum = parseInt(prompt("enter the first num" ));
var secNum = parseInt(prompt("enter the sec num" ));
var thirdNum = parseInt(prompt("enter the third num" ));
compare(firstNum,secNum);
MaxMin(firstNum,secNum,thirdNum);



var firstMark = parseInt(prompt("enter the first mark" ));
var secMark = parseInt(prompt("enter the sec mark" ));
var thirdMark = parseInt(prompt("enter the third mark" ));
var fourthMark = parseInt(prompt("enter the fourth mark" ));
var fifthMark = parseInt(prompt("enter the fifth mark" ));

function marks(one,two,three,four,five)
{
    total = one +two +three +four + five
    avg = (one +two +three +four + five)/5;
    console.log("total marks is  " + total )
    console.log("avg marks is  " + avg )
    console.log("percentage is  " + avg )

}
marks(firstMark,secMark,thirdMark,fourthMark,fifthMark);

var word = prompt(" enter a word to swap the case of each character for string");

function swapCase(word)
{ 
    for(var i = 0 ; i<word.length ; i++)
    {
        if (word[i] ==word[i].toLowerCase())
            word[i]=word[i].toUpperCase();  
        else 
        word[i]=word[i].toLowerCase();
    }
console.log(word);
}
swapCase(word);

function factorial(num)
{ var fact =1 ; 
    for(var i=1 ; i<=num ; i++ )
    {
        fact = fact * i ;
    }
    console.log( "factorial of " + num + " is  " + fact);
}
var num = parseInt(prompt("enter a num to find its factorial"));
factorial(num);



