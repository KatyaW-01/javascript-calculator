calculatorHistory = []

function add(a,b){
  if(typeof(a)=== 'number' && typeof(b)==='number'){ //accounts for edge case of invalid arguments
    const result = a + b
    addToHistory(a,b,'+',result)
    return result
  }
  else{
    return "Error: arguments must be numbers"
  }
}

function subtract(a,b){
  if(typeof(a)=== 'number' && typeof(b)==='number'){ 
    const result = a - b
    addToHistory(a,b,'-',result)
    return result
  }
  else{
    return "Error: arguments must be numbers"
  }
}

function multiply(a,b){
  if(typeof(a)=== 'number' && typeof(b)==='number'){ 
    const result = a * b
    addToHistory(a,b,'*',result)
    return result
  }
  else{
     return "Error: arguments must be numbers"
  }
}

function divide(a,b){
  if(b === 0){ //accounts for edge case of dividing by zero
    return "Error: cannot divide by zero"
  } 
  else if(typeof(a)=== 'number' && typeof(b)==='number'){
    const result = a/b
    addToHistory(a,b,'/',result)
    return result
  } 
  else{
    return "Error: arguments must be numbers"
  }
}

//helper function that creates objects of the results and pushes to the calculator history array
function addToHistory(num1,num2,operator,result){
  const calculationObject = {
    Operand1: num1,
    Operand2: num2,
    Operator: operator,
    Result: result,
  }
  calculatorHistory.push(calculationObject)
}

//function to display the calculation history
function displayHistory(array){
  if(array.length === 0){
    return "You have no stored calculations"
  }
  else{
    let history = ""
    for(i=0; i < array.length; i++){
      let element = array[i]
      history += `${element.Operand1} ${element.Operator} ${element.Operand2} = ${element.Result}\n`
    }
    return `Calculation History:\n${history}`
  }
  
}

console.log(displayHistory(calculatorHistory))

