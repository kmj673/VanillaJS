const body=document.querySelector("body");

const IMG_NUM=12;

function paintImage(){
    const img=new Image();
    img.src=`background/${number+1}.jpg`;
    img.classList.add("backgroundImg");
    body.appendChild(img);
}

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber=genRandom();
    paintImage(randomNumber);
}

init();