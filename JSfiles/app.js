class calculator{
    constructor(){
        this.pervVal 
        this.currVal 
        this.operator 
        this.experssion= " " ;
    }

    displayLower(currVal){
        lower.setAttribute("value",currVal);
        this.currVal=currVal;
    }

    displayUpper(pervVal,operator){
        this.experssion += pervVal+operator ;
        document.getElementById('upperDisplay').setAttribute("value",this.experssion);
        this.pervVal = pervVal
        this.operator = operator
        this.displayLower(this.operator);
        
    }

    division(){
            let splittedExpression =this.experssion;
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
    }

    multiplication(){
        let splittedExpression =this.experssion;
            let counter = 0;
            splittedExpression.map((splittedVal,index)=>{
                if(splittedVal === '*'){
                    counter++;
                }
            });
            for(let i= 0 ; i< counter ; i++ ){
                splittedExpression.map((splittedVal,index)=>{
                    if(splittedVal === '*'){
                        splittedExpression[index-1] = parseInt(splittedExpression[index-1]) * parseInt(splittedExpression[index+1]);
                        splittedExpression[index] = null;
                        splittedExpression[index+1] = null;
                    }
                })
                splittedExpression = splittedExpression.filter((Value)=>{
                    return Value != null;
                })
            }
            this.experssion = splittedExpression;
    }

    addition(){
        let splittedExpression =this.experssion;
            let counter = 0;
            splittedExpression.map((splittedVal,index)=>{
                if(splittedVal === '+'){
                    counter++;
                }
            });
            for(let i= 0 ; i< counter ; i++ ){
                splittedExpression.map((splittedVal,index)=>{
                    if(splittedVal === '+'){
                        splittedExpression[index-1] = parseInt(splittedExpression[index-1]) + parseInt(splittedExpression[index+1]);
                        splittedExpression[index] = null;
                        splittedExpression[index+1] = null;
                    }
                })
                splittedExpression = splittedExpression.filter((Value)=>{
                    return Value != null;
                })
            }
            this.experssion = splittedExpression;

    }

    subtraction(){
        let splittedExpression =this.experssion;
            let counter = 0;
            splittedExpression.map((splittedVal,index)=>{
                if(splittedVal === '-'){
                    counter++;
                }
            });
            for(let i= 0 ; i< counter ; i++ ){
                splittedExpression.map((splittedVal,index)=>{
                    if(splittedVal === '-'){
                        splittedExpression[index-1] = parseInt(splittedExpression[index-1]) - parseInt(splittedExpression[index+1]);
                        splittedExpression[index] = null;
                        splittedExpression[index+1] = null;
                    }
                })
                splittedExpression = splittedExpression.filter((Value)=>{
                    return Value != null;
                })
            }
            this.experssion = splittedExpression;
    }

    calculation(){
            this.experssion = this.experssion.split(' ');
            this.experssion = this.experssion.filter((value)=>{
                return value != "";
            })
            this.division();
            this.multiplication();
            this.addition();
            this.subtraction();
            
            lower.setAttribute("value",this.experssion[0]);
            this.experssion = this.experssion[0];
        }

        cleared(){
            this.experssion = " " ;
            this.currVal = " ";
            document.getElementById('upperDisplay').setAttribute("value",this.experssion);
            lower.setAttribute('value',this.currVal);   
        }

        doBackSpace(){
                this.currVal = this.currVal.toString().slice(0,-1);
                currVal = this.currVal
                lower.setAttribute('value',this.currVal);
        }
}
