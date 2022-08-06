//const display = document.querySelector("#display");
var screen=document.querySelector('#screen');

var btn=document.querySelectorAll("button");

/*============ For getting the value of btn, Here we use for loop ============*/

for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText.toString();

        if (item.id == "backspace") {
            let string = screen.innerText.toString();
            screen.innerText = string.substr(0, string.length - 1);
          } 

        if(btntext =='×')
        {
            btntext= '*';
        }

       if(btntext =='C')
        {
            btntext= '';
        } 
        
        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}




function sin()
{
    screen.value=Math.sin(screen.value.toString());
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}
function powx()
{
    x=display.innerText.toString();
    screen.value=Math.pow(screen.value,x);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value= 3.14159265359;
}

function e()
{
    screen.value=2.71828182846;
}

function fact()
{
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc()
    {
        screen.value = screen.value.slice(0, screen.value.length -1);
    }
    
function equal(){
       return screen.value =eval(screen.value);
        }
    
const themeToggleBtn =document.querySelector('.theme-toggler');
const calculator =document.querySelector('.calculator');
const toggleIcon = document.querySelector('toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}



const btntextExpand = document.querySelector('.btn-expand');
const items = document.querySelector('items');

let state = false;
function expand(){
    if(state==false){
        document.getElementById('items').style.transform='scaleX(1)';
        document.getElementById('btn-expand').style.transform='rotate(45deg)';
        state=true;

    }else{
        document.getElementById('items').style.transform='scaleX(0)';
        document.getElementById('btn-expand').style.transform='rotate(0)';
        state=false;
    }

}











