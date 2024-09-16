let input=document.querySelector(".input");
let ans=document.querySelector(".answer");


//Calculate Button
let btn=document.querySelector(".calculate");
btn.addEventListener("click", () => {
    let answer=eval(input.value);
    ans.innerText=answer;
})


// Clear Button
let btn2=document.querySelector(".clear");
btn2.addEventListener("click", () =>{
    input.value="";
    let ans=document.querySelector(".answer");
    ans.innerText="0";
})


// Input through Button
let num=document.querySelectorAll(".number, .operator");
num.forEach((x) => {
    x.addEventListener("click", () => {
    input.value+=x.innerText;
    });
});


// Enter and Delete through KeyBoard
input.addEventListener("keydown", (event) => {
    if(event.key==="Enter"){
        let answer=eval(input.value);
        ans.innerText=answer;
    }
});


// "X" 
let del=document.querySelector(".delete");
del.addEventListener("click", () => {
    input.value=input.value.slice(0, -1);
});