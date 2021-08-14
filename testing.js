function inputClick(e){
    const event = e || window.event;
    operator = event.target.value;
    document.getElementById("visor").value += operator  
}

function clearUp(e){
    const event = e || window.event;
    document.getElementById("visor").value = "";
}

function result(e){
    const event = e || window.event;
    event.preventDefault();
    const visorValue = document.getElementById("visor").value;
    let regex = new RegExp(/[^0-9]/g);
    regex.lastIndex=0;
    const numbers = visorValue.split(regex).filter((fox)=> fox).map(fox => parseInt(fox,10));
    console.log(numbers);
    regex = new RegExp(/[0-9]/g);
    regex.lastIndex=0;
    const operators = visorValue.split(regex).filter((fox)=> fox);
    console.log(operators);
    const finalResult = operators.reduce((result,operator,index) => {
        let numberOne=numbers.shift();
        let numberTwo=0;
        if(!index){
            numberTwo = numbers.shift();
        }
        console.log(numberOne,numberTwo);
        console.log(operator);
        switch(operator){
            case "+":
                result+=numberOne+numberTwo;
                return result;
            case "-":
                result-=numberOne-numberTwo;
                return result;
            case "*":
                if(!index){
                    result=numberOne*numberTwo
                }
                else{
                    result=result*numberOne
                }
                return result;
            case "/":
                if(!index){
                    result=numberOne/numberTwo;
                }
                else{
                    result=result/numberOne;
                }
                return result;
            default:
                alert("COLOCA O OPERADOR LOKÃO!");
                return result;         
    }},0) 
    document.getElementById("visor").value=finalResult; 
}

//(/\+|-/g)
//\+|-|\*|\/