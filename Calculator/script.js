class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    } 
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }  

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1) ;
    }

    appendNumber(number){
        if(number == '.' && this.currentOperand.includes('.')) return;
        
        this.currentOperand = this.currentOperand.toString() + number.toString();

        
    }

    chooseOperation(operation){
        if(this.currentOperand === '')return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + this.operation;
        this.currentOperand = '';

    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const cur = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(cur))
        return;
        switch(this.operation){
            case "+":
                computation = prev + cur;
                break;
            case "-":
                computation = prev - cur;
                break;
            case "*":
                computation = prev * cur;
                break;
            case "÷":
                computation = prev / cur;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ' ';

    }

    updateDisplay(){
        this.currentOperandTextElement.textContent = this.currentOperand;
        this.previousOperandTextElement.textContent = this.previousOperand;
    }
};

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-prev-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// console.log(numberButtons);
// console.log(operationButtons);
// console.log(equalsButton);
// console.log(previousOperandTextElement.textContent);
// console.log(currentOperandTextElement.textContent);

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);
numberButtons.forEach((number)=>{
    number.addEventListener('click',()=>{
        calculator.appendNumber(number.textContent);
        calculator.updateDisplay();
    });
    
});
operationButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        // calculator.appendNumber(button.textContent);
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    });
    
});
allClearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
});
deleteButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
});

equalsButton.addEventListener('click' ,()=>{
    calculator.compute();
    calculator.updateDisplay();
});
