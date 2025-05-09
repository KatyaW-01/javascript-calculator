calculatorHistory = []

function add(a,b){
  const result = a + b
  addToHistory(a,b,'+',result)
  return result
}

function subtract(a,b){
  const result = a - b
  addToHistory(a,b,'-',result)
  return result
}

function multiply(a,b){
  const result = a * b
  addToHistory(a,b,'*',result)
  return result
}

function divide(a,b){
  if(b === 0){
    return "Error: cannot divide by zero"
  } else{
    const result = a/b
    addToHistory(a,b,'/',result)
    return result
  }
}

function addToHistory(num1,num2,operator,result){
  const calculationObject = {
    Operand1: num1,
    Operand2: num2,
    Operator: operator,
    Result: result,
  }
  calculatorHistory.push(calculationObject)
}

function displayHistory(array){
  if(array.length === 0){
    return "You have no stored calculations"
  }
  else{
    for(i=0; i < array.length; i++){
      let element = array[i]
      console.log(`${element.Operand1} ${element.Operator} ${element.Operand2} = ${element.Result}`)
    }
  }
}

add(3,4)
subtract(54,23)

console.log(displayHistory(calculatorHistory))

