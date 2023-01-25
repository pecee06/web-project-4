let displayString = '';
let display = document.getElementById('screen');

let buttons = document.getElementsByClassName('btn');

Array.from(buttons).forEach(element => {
    element.addEventListener('click',(x)=>{
        displayString = x.target.innerHTML;
        if (displayString == 'X'){
            displayString = '*';
            display.value += displayString;
        }
        else if(displayString == 'sin'){
            displayString = 'Math.sin(';
            display.value += displayString;
        }
        else if(displayString == 'cos'){
            displayString = 'Math.cos(';
            display.value += displayString;
        }
        else if(displayString == 'e'){
            displayString = 'Math.E';
            display.value += displayString;
        }
        else if(displayString == 'π'){
            displayString = 'Math.PI';
            display.value += displayString;
        }
        else if(displayString == 'log'){
            displayString = 'Math.log10(';
            display.value += displayString;
        }
        else if(displayString == '√x'){
            display.value = (display.value)**0.5;
        }
        else if(displayString == 'x²'){
            display.value = (display.value)**2;
        }
        else if(displayString == '«'){
            let s = display.value;
            let len = display.value.length;
            let lastChar = s.substr(len-1);
            s = s.replace(lastChar,'');
            display.value = s;
        }
        else if(displayString == 'C'){
            display.value = '';
        }
        else if(displayString == '='){
            display.value = eval(display.value);
        }
        else{
            display.value += displayString;
        }
    })
});