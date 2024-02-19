let myarray = ['one', 'two', 'three', "four", "five", "six", "seven", "eight", "nine", "ten"]
let mynumbers = [1,2,3,4,5,6,7,8,9,10]

function threeLetters(x){
    return x.length == 3;
}

let filteredArray = myarray.filter(threeLetters)

filteredArray = myarray.filter((x) => x.length == 3)

//you can name the function or you can use a function body

//if you need more than one line of parameters in the function, us the function body method so that it will be much easier
filteredArray = myarray.filter((x) => {return x.length == 3})

htmlarray = filteredArray.map((x) => {return "<li>" + x + "</li>"})
document.getElementById("myLIst").innerHTML = htmlarray.join(" ")

let newnumbers = mynumbers.map((x) => x*x)

console.log(newnumbers)

let total = newnumbers.reduce((accumulator, item) => accumulator + item)

//quick and dirty way to write an if statement, set the parameter, then ? then the result if so
let max = newnumbers.reduce((currentMax, item) => item > currentMax ? item:currentMax)

console.log(total)

//foreach method
let anotherArray = []
let anotherTotal = 0
mynumbers.forEach((x) => {
    anotherArray.push(x*x);
    anotherTotal += x*x;
})

//if you are going to be using map, reduce and all that, use comments is neccesary

console.log(anotherTotal)
console.log(anotherArray)