/* let name = "Hari";      
var age = 26;
const height = "1.72" ;   /* no option to change it */
/* console.log(name);        /* any thing can be printed using console.log(); */
/* console.log(height);
console.log(age);
console.log(age+2);
console.log(age-2);
console.log(age*2);
console.log(age%2);
console.log(age/2);
age += 3;
age = age+3;
console.log(age);
age -= 3;
console.log(age);
age %= 3;
console.log(age);
age *= 3;
console.log(age);
age /= 3;
console.log(age);
let age1 = "26";
let age2 = 26;
console.log(age2 > age1);
console.log(age2 < age1);
console.log(age2 >= age1);
console.log(age2 <= age1);
console.log(age2 === age1); */

/* if and if else conditions *//*

let food = "hari";
let man = "eat";
let animal = "animal";
let inset = "python";
let code = "java";
if(food == man ){
    console.log("it is done");
}else if(man == animal){
    console.log("no it is not done");
}else if(man == inset){
    console.log("wow");
}else if(food == code){
    console.log("hari it is done");
}else{
    console.log("it is final else part");
}

*/

/* ATM Notes Counting Maching */
/*
let totam = 3500;
let am500 = 0;
let am200 = 0;
let am100 = 0;

if(totam >= 500){
    am500 = totam/500;
    totam = totam%500;
}if(totam >= 200){
    am200 = totam/200;
    totam = totam%200;
}if(totam >= 100){
    am100 = totam/100;
    totam = totam%100;
}

console.log(am500);
console.log(am200);
console.log(am100);
*/

/*for loop*//*
for(let i = 1; i <= 30; ){
    console.log("hello"+i);
}
*/
/*while loop*//*
i = 1;
while(i <= 30){
    console.log(i);
}*/

/*nested if*//*
let username = "hari";
let password = "hari@123";
let user = "kav";
let passwor = "kav@1234";

if(username == "hari"){
    console.log("username");
    if(password = "hari@1234"){
        console.log("it's done hari");
    }
}*/

/*nested for loop*//*
for(let i =1; i <= 10; i++){
    for(let j =1 ; j <= 10 ;j++){
        console.log(i+"X"+j+"="+(j*i));
    }
}
*//*
let gifts = 5;                             the gifts must be in order for the one by one 

let us1 = "hari";
let us2 = "kavya";
let us3 = "arun";
let us4 = "vinay";
let us5 = "visa";

for(let i = 1; i <= 5; i++){
    for()

}*/

/*functions*//*
function cook(){
    console.log("dosa");
    console.log("dosa");
    console.log("dosa");
    console.log("dosa");
    console.log("dosa");
    console.log("dosa"); 
}

cook();

*/

function dishwash(dosa){
    console.log("we had "+dosa+" today ");
}

dishwash(6);

/*example*//*
function num(n){
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}

num(4);
*/



/* function guessing game */
function guess(num1){
    let n = number(prompt("enter the number :"))
    if(guessnum == num){
        console.log("congratilutions you got it ");
    }else if(guessnum < num){
        console.log("guess low number to get it");
        guess(n);
    }else{
        console.log("guess the big number to ge it");
        guess(n);
    }
}
let number=Math.floor(Math.random()*100)+1;
guess(n);


/*

let chocolate= ["melodi","fivestsr","kitkat","kachamango","darkchocolate","kavya"];
let salse = {
    kanna : chocolate[0],
    kavya : chocolate[1],
    arun : chocolate[2],
    vishwa : chocolate[3],
    visa : chocolate[4],
    hari : chocolate[5]
};

console.log(salse);

console.log(salse.hari);

*/