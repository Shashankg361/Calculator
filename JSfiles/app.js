class calculator{
    constructor(){
        this.pervVal 
        this.currVal 
        this.operator 
        this.experssion= " " ;
    }

    displayLower(currVal){
        lower.setAttribute("value",currVal);
        this.currVal=currVal
    }

    displayUpper(pervVal,operator){
        this.experssion += pervVal+operator ;
        document.getElementById('upperDisplay').setAttribute("value",this.experssion);
        this.pervVal = pervVal
        this.operator = operator
        this.displayLower(this.operator)
    }

    division(){
            let splittedExpression =this.experssion.split(' ');
            let counter = 0;
            splittedExpression.map((splittedVal,index)=>{
                if(splittedVal === '/'){
                    counter++;
                }
            });
            for(let i= 0 ; i< counter ; i++ ){
                splittedExpression.map((splittedVal,index)=>{
                    if(splittedVal === '/'){
                        splittedExpression[index-1] = parseInt(splittedExpression[index-1]) / parseInt(splittedExpression[index+1]);
                        splittedExpression[index] = null;
                        splittedExpression[index+1] = null;
                    }
                })
                splittedExpression = splittedExpression.filter((Value)=>{
                    return Value != null;
                })
            }
            this.experssion = splittedExpression;
            console.log(splittedExpression);
            console.log(this.experssion);
    }

    multiplication(){

    }

}




    /*calculation(){
        

}*/


/*class calcu extends calculator{

}*/
