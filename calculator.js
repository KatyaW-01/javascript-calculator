function add(a,b){
  const result = a + b
  return result
}

function subtract(a,b){
  const result = a - b
  return result
}

function multiply(a,b){
  const result = a * b
  return result
}

function divide(a,b){
  if(b === 0){
    return "Error: cannot divide by zero"
  } else{
    const result = a/b
    return result
  }
}