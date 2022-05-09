/* Functions */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }




/* Main */

let randomArray = [];

while( randomArray.length < 10 ){
    let n = getRndInteger(1, 100);
    if(randomArray.includes(n)===false){
        randomArray.push(n);
    }
}

let userNumbers = [];
let x;
let pointsCount = 0;

while (userNumbers.length < 10){
    x = (Number(prompt("enter a number From 1 To 100 and One Time: ")));
    if(randomArray.includes(x)===true){
        console.log(x + " ---> " + "You lost!");
        break;
    }else if(x < 101 && x > 0 && userNumbers.includes(x)===false){
        userNumbers.push(x);
        pointsCount++;
        console.log(x + " ---> Good Choice! You're Safe, for now...");
    }else{
        alert("Number already entered! or Not Valid!");
        console.log("Number already entered! or Not Valid!");
    }
}


console.log(userNumbers);

console.log("Final Score : " + pointsCount);
console.log("These were the Dangerous Numbers: " + randomArray);


