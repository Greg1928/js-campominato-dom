/* Functions */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }




/* Main */
let randomArray = [];
let difficulty;
let max;
do {
   difficulty = Number(prompt("Select Difficulty Level :\nDifficulty 0 => From 1 to 100\nDifficulty 1 => From 1 to 80\nDifficulty 2 => From 1 to 50"));
}while (difficulty<0 || difficulty>2);

if ( difficulty === 0 ){
    while( randomArray.length < 10 ){
        let n = getRndInteger(1, 100);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            max=100;
        }
    }
    alert("Random Number Generated! (from 1 to 100)");
}else if (difficulty === 1){
    while( randomArray.length < 10 ){
        let n = getRndInteger(1, 80);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            max=80;
        }
    }
    alert("Random Number Generated! (from 1 to 80)");
}else if(difficulty=== 2){
    while( randomArray.length < 10 ){
        let n = getRndInteger(1, 50);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            max=50;
        }
    }
    alert("Random Number Generated! (from 1 to 50)");
}

let userNumbers = [];
let x;
let pointsCount = 0;

while (userNumbers.length < 10){
    x = (Number(prompt("enter a number From 1 To " + max + " and One Time: ")));
    if(randomArray.includes(x)===true){
        console.log(x + " ---> " + "You lost!");
        alert(x + " ---> " + "You Lost!\nThese were the Dangerous Numbers: " + randomArray);
        break;
    }else if(x < max && x > 0 && userNumbers.includes(x)===false){
        userNumbers.push(x);
        pointsCount++;
        console.log(x + " ---> Good Choice! You're Safe, for now...");
        alert(x + " ---> Good Choice! You're Safe, for now...");
    }else{
        alert("Number already entered! or Not Valid!");
        console.log("Number already entered! or Not Valid!");
    }
}


console.log(userNumbers);

console.log("Final Score : " + pointsCount);
console.log("These were the Dangerous Numbers: " + randomArray);



