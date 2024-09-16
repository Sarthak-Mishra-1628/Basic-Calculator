let input=document.querySelector(".input");

let ans=document.querySelector(".answer");

let btn=document.querySelector(".calculate");
btn.addEventListener("click", () => {
    let answer=eval(input.value);
    ans.innerText=answer;
})

let btn2=document.querySelector(".clear");
btn2.addEventListener("click", () =>{
    input.value="";
    let ans=document.querySelector(".answer");
    ans.innerText="0";
})


let num=document.querySelectorAll(".number, .operator");

num.forEach((x) => {
    x.addEventListener("click", () => {
    input.value+=x.innerText;
    });
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let answer=eval(input.value);
        ans.innerText=answer;
    }
});


let del=document.querySelector(".delete");
del.addEventListener("click", () => {
    input.value=input.value.slice(0, -1);
});