const date=new Date;
let curTime=`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
console.log(curTime);
const h1=document.querySelector('h1');
const h3=document.querySelector('h3');
h1.classList.add('h1Style');
h3.innerHTML=curTime;
h3.style.textAlign="right";
h3.style.margin="0.5rem";

