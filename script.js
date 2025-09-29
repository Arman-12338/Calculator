const display = document.getElementById('display');
const button  = document.querySelectorAll('#btn');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const back= document.getElementById('back');
button.forEach(button=>{
    button.addEventListener('click',()=>{
       //  if (btn.id !== 'clear' && btn.id !== 'equal') {
display.value+=button.textContent;
       //  }
    });
});
clear.addEventListener('click',()=>{
    display.value="";
});
equal.addEventListener('click',()=>{
    try{
        display.value=eval(display.value);
    }
    catch(errorr){
        display.value="Error";
    }
});
back.addEventListener('click',()=>{
    display.value=display.value.slice(0,-1);
});