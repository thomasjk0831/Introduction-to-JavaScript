/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;
if(votingAge > 18)
console.log(true);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var age= 18;
var canVote;

if (age >= 18){
  canVote = true;
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number("1999");




//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a*b
  }




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age){
    return age*7
  }




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age){
    if(age>=1)
    {
      if(weight> 15)
      {
        return .02 * weight;
      }
      else if( weight >= 11)
      {
        return .03 * weight;
      }
      else if( weight >= 6)
      {
        return .04 * weight;
      }
      else
      {
        return .05 * weight;
      }
  
    }
    else
  {
      if(age >= 7/12){
      return .04*weight;
      }
  
      else if (age>= 4/12){
      return .05*weight;
      }
  
      else{
      return .1*weigh;
      }
  }
  
  }




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperScissor(userChoice){
   
    var cpuChoice = Math.floor(Math.random()*3) + 1;
 
    switch (cpuChoice){
      //1 is rock
      case 1:
        cpuChoice = "rock"
        if(userChoice === "rock")
        {
          return "Rock vs Rock. Tie!";
        }
        else if (userChoice === "paper")
        {
          return "Paper vs Rock. You win!";
        }
        else
        {
        return "Scissor vs Rock. You Lose!"
        }
        break;
    //2 is paper
      case 2:
        cpuChoice = "paper"
        if(userChoice === "rock")
        {
          return "Rock vs Paper. You lose!";
        }
        else if (userChoice === "paper")
        {
          return "Paper vs Paper.Tie!";
        }
        else
        {
        return "Scissor vs Paper. You Win!"
        }
        break;
    //3 is scissor
     case 3:
        cpuChoice = "scissor"
        if(userChoice === "rock")
        {
          return "Rock vs Scissor. You Win!";
        }
        else if (userChoice === "paper")
        {
          return "Paper vs Scissor.You Lose!";
        }
        else
        {
        return "Scissor vs Scissor.Tie!"
        }
        break;
 
 }
 
 }
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(km){
    return (km * 1000 * .000621371)
  }
  




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCent(feet){
    return (feet * 12 * 2.54)
  }




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(number){

    if(number === 0){
     console.log( "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
     else{
    console.log( number + " bottles of soda on the wall, "+ number + " bottles of soda, take one down pass it around " + (number-1) +
      " bottles of soda on the wall\n");
    
     annoyingSong(number-1);
    }
    
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function calcGrade(grade){
    if(grade >= 90){
      console.log("You got an A.")
    }
    else if (grade >= 80){
      console.log("You got a B.")
    }
    else if(grade >= 70){
      console.log("You got a C.")
    }
    else if (grade >= 60){
      console.log("You got a D.")
    }
    else{
      console.log("You got a F.")
    }
  }
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





