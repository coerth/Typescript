function calculate (x, y, operation)
{
   return operation(x, y)
}

function add(x, y)
{
    return x + y
}

let result = calculate(3, 5, add)
console.log(result)

function subtraction(x, y)
{
    return x - y
}

function multiplication(x, y)
{
    return x * y
}

function division(x, y)
{
    return x / y
}

result = calculate(3, 5, subtraction)
console.log(result)

result = calculate(3, 5, multiplication)
console.log(result)

result = calculate(3, 5, division)
console.log(result)

