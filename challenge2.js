//Declaring my variables 
var beanArr = [-5, 10, -15, 20, -25, 30, -35, -40];
var z = beanArr.filter(testFunction);

//Declaring my function 

function testFunction(values){
    return values < 0;
}

//Displaying the resulting negative numbers as an array 
console.log("Negative Numbers Array:", z);

