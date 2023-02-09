const calculate = async (x, y, operation) => 
{
    return new Promise( (resolve, reject) => {
          
       resolve(operation(x, y))
       .catch(e => {
        reject(e)
       })

    })
}

function add(x, y)
{
    return x + y
}

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

calculate(3, 5, add).then(res => console.log("add  " +res))


result = calculate(3, "g", division).then(res => console.log("division " +res))


result =  calculate(3, 0, division).then(res => console.log("division " +res))


calculate(3, 5, add)
        .then(result => {
            console.log(result)
            calculate(result, 5, multiplication)
            .then(result2 => {
                console.log(result2)
                calculate(result2, 5, division)
                .then(result3 => {
                    console.log(result3)
                    calculate(result3, 5, subtraction).then(res => console.log("subtraction " +res))
                })
            })
        })



