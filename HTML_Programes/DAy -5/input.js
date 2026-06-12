let greetings = ["Good Mornign", "Good Afternoon", "Good Evening", "Good Night"];
let num = 0;
function greet_morning(){
    let text = document.getElementById("greet");
    text.innerText= greetings[num];
    num+=1;
    if(num>3){
        num = 0;
    }
}

function turn_on(){
    let light = document.getElementById("on");
    light.src = "/HTML_Programes/Files/on.jpeg";
}

function turn_off(){
    let light = document.getElementById("on");
    light.src = "/HTML_Programes/Files/off.jpeg";
}

let isDarkTheme = false;

function change_color(){
    let page = document.getElementById("cap");
    let text1 = document.getElementById("data");
    let text2 = document.getElementById("greet");
    let button = document.getElementById("themeBtn");

    isDarkTheme = !isDarkTheme;

    if(isDarkTheme){
        page.style.backgroundColor = "#111";
        page.style.color = "white";
        text1.style.color = "white";
        text2.style.color = "white";
        button.innerText = "Switch to Light Theme";
    } else {
        page.style.backgroundColor = "white";
        page.style.color = "black";
        text1.style.color = "black";
        text2.style.color = "black";
        button.innerText = "Switch to Dark Theme";
    }
}
/*
function great_afternoon()
{
    let text = document.getElementById("great");
    text.innerText = "Good afternoon";
}

function change_color()
{
    let colour = document.getElementById("cap");
    colour.style.backgroundColor = "black";

    let txt1 = document.getElementById("data");
    txt1.style.backgroundColor = "white";
    txt1.style.color = "black";

    let txt2 = document.getElementById("great");
    txt2.style.backgroundColor = "white";
    txt2.style.color = "black";
}*/