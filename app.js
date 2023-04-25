//Functions 


                                                        //First Example 


//Create a function called "Adder"
//This function is going to take three arguments 

function adder(x,y,z){ //Created function "adder" with parameters x, y, and z

    return x + y + z; 
}

function multiply (a, b, c){ //Created function "multiply" which returns the variables mulitiplied by each other 

    return a * b * c;
}

console.log(adder(1, 2, 3));
console.log(multiply(10, 20, 30));




                                                        //Second Example 


//Create a function called "isString" that takes three arguments (x,y,z)

function isString(x,y,z){
    //ifString checks if each argument is a string using Typeof

    //If each argument is a string, the console log 

    if (typeof x === "string" && typeof y === "string" && typeof z === "string"){
    console.log("fa sho");
    }else{
        console.log("nah cuh")
    }
    //If any of them is not a string, the console log will note that
}

//Below we are calling the function 

isString("Osiel", "Miguel", "Aubrey");

isString(10, "Red Ventures", "street");

//       X          Y           Z



                                                        //Third Example 

//Vowel Checker - This function will check to see if the string contains vowels

function vowelChecker (x){
    var firstChar = x.toLowerCase().charAt(0) //Will grab the first letter/character, searches for lowercase, .charAt(0) initializes the vowel counter 

    //Now check to see if that first letter is a vowel 
    if(
        firstChar === "a" || 
        firstChar === "e" || 
        firstChar === "i" || 
        firstChar === "o" || 
        firstChar === "u"){
        console.log("First letter is a vowel");
    } else {
        console.log("No vowel, leave now")
    }

}

vowelChecker("Nah");
vowelChecker("Osiel");