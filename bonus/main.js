/* Functions */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
  


/* Main */
let randomArray = [];
let form = document.querySelector("#form");
let list = document.querySelector(".list");
let max;
let bomb = [];
var num;
/* do {
   difficulty = Number(prompt("Select Difficulty Level :\nDifficulty 0 => From 1 to 100\nDifficulty 1 => From 1 to 80\nDifficulty 2 => From 1 to 50"));
}while (difficulty<0 || difficulty>2); */
let restart = document.querySelector("#btn-reset");
restart.addEventListener('click', function() {
    location.reload();
});

let btn = document.querySelector("#btn");
btn.addEventListener('click', function(){
if ( form.value === "0"){
    while( randomArray.length < 100 ){
        let n = getRndInteger(1, 100);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            let element = document.createElement("li");
            element.classList.add("item");
            element.id = n;
            element.innerText = n;
            list.append(element);
            max=100;
            
        }
    }
    let item = document.querySelector("ul");
    item.addEventListener('click', function(event) {
        num = ( event.target.id );
        console.log(num);
        
            if(bomb.includes(num)){
                let element = document.getElementsByClassName("item");
                element.classList.add("red");
            }
        });
    while( bomb.length < 16){
        let n = getRndInteger(1, max);
        if(bomb.includes(n)===false){
            bomb.push(n);
        }
    }
    
    console.log("bombs: " + bomb);

}else if (form.value === "1"){
    while( randomArray.length < 80 ){
        let n = getRndInteger(1, 80);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            let element = document.createElement("li");
            element.classList.add("item");
            element.id = n;
            element.innerText = n;
            list.append(element);
            max=80;
        }
    }
    while( bomb.length < 16){
        let n = getRndInteger(1, max);
        if(bomb.includes(n)===false){
            bomb.push(n);
        }
    }
    console.log("bombs: " + bomb);
    
}else if(form.value === "2"){
    while( randomArray.length < 50 ){
        let n = getRndInteger(1, 50);
        if(randomArray.includes(n)===false){
            randomArray.push(n);
            let element = document.createElement("li");
            element.classList.add("item");
            element.id = n;
            element.innerText = n;
            list.append(element);
            max=50;
        }
    }
    while( bomb.length < 16){
        let n = getRndInteger(1, max);
        if(bomb.includes(n)===false){
            bomb.push(n);
        }
    }
    console.log("bombs: " + bomb);
}
},  {once : true})


/* while (userNumbers.length < 10){
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
} */