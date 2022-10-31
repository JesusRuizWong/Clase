const documentReady= ()=>{
    const calculadora=document.getElementById('calculadora') ;

    const calculate = (e)=> {
        e.preventDefault();
        const n1=+document.getElementById('n1').value ;
        const n2=+document.getElementById('n2').value ;
        const op=document.getElementById('op').value;
        const r=document.getElementById('r')

        let operationresult= 0 ; 

        switch(op){
            case '+' : 
            operationresult=n1+n2 ; 
            break;
            case '-': 
            operationresult=n1-n2;
             break; 
            case '*':
                 operationresult=n1*n2; 
            break ;
            case '/': 
            operationresult=n1/n2; break;

            default:      break ;
        }
        r.innerHTML = operationresult ;
    } ;

    calculadora.addEventListener('submit', calculate)
}

document.addEventListener('DOMContentLoaded', documentReady)

console.log( operationresult)