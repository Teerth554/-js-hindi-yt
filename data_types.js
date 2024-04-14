/*
primitive

7 types=string ,number,boolean,null,undefined,Symbol,BigInt
*/
const id=Symbol('134')
const Sid=Symbol('134')

console.log(id===Sid)

const bigInt =74896868686464487976468798765649974949
console.log(bigInt)

//non primitive =arrays,objects,functions
let myObj=
    {
        name:"teerth",
        age:19,
    }

const myFunction=function(){
    console.log("hello teerth")
} 

//********************************************
    //stack memory(primitive),heap memory(non primitive)
//       copy of variable        referance of variable(changes made only on original values)

      
