const IntButton = document.querySelectorAll('.Integer')
const operators = document.querySelectorAll('.operator');
const lower = document.getElementById('lowerDisplay');
const equalTo = document.querySelector('.equalTo');
let currVal='';
let pervVal='';
let operator = '';


IntButton.forEach(button=>{
    button.addEventListener('click',event=>{
    currVal += event.target.innerHTML ;
    //lower.setAttribute("value",currVal);
    calc.displayLower(currVal);
    });
});

operators.forEach(opr =>{
    opr.addEventListener('click',event=>{
        operator = event.target.innerHTML;
        operator = operator.slice(0,1) + ' ';
        //calc.displayLower(currVal);
        pervVal += currVal + ' ';
        calc.displayUpper(pervVal,operator);
        currVal = '';
        pervVal = '';
        operator = '';
        calc.displayLower(currVal);
       
    })
})

equalTo.addEventListener('click',event =>{
    /*operator = event.target.innerHTML;
    operator = operator.slice(0,1) + ' ';*/
    calc.displayUpper(currVal,operator);
    currVal = '';
    calc.displayLower(currVal);
    calc.division();
})

/*const displayUpper = pervVal =>{
    document.getElementById('upperDisplay').setAttribute("value",pervVal)
}*/
const calc = new calculator();




