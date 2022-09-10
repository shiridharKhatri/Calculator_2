let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
var clickEffect = new Audio("click.mp3")
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log("You clicked button "+buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }else if(buttonText=='AC'){
            screenValue="";
            screen.value=screenValue;
        }else if(buttonText=='='){
            screenValue=eval(screenValue);
            screen.value=screenValue;
        }else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        clickEffect.play();
    })
}