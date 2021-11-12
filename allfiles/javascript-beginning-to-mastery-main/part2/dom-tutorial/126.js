// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })

const body = document.body;
const btn = document.querySelector('button');
const colors = ["green", "yellow", "blue"];
btn.addEventListener("click", (e)=>{
    const red = Math.floor((Math.random() * 256))
    const green = Math.floor((Math.random() * 256))
    const blue = Math.floor((Math.random() * 256))
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
