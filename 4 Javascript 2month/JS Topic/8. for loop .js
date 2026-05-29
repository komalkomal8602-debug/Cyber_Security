// for (in; Condition; inc / dec) {

// }

// for loop
// for (let i = 0; i<5000; i++) {
//     console.log(i)
// }


// while loop
// let i=0 

// while(i<5){
//     i++
//     console.log(i)
// }

// do while loop
// let i = 0

// do {
//     console.log(i)
//     i++
// } while (i < 5)



// let n = 5
// let temp = ''
// for (let i = 1; i <= 10; i++) {
//     // temp = temp + i * n + ' '
//     temp += i * n + ' '
// }
// console.log(temp)

let a = "v"
let b = a.toUpperCase() //A

if(a==b){
    console.log('UpperCase')
}
else{
    console.log('LowerCase')
}


// time complexity (n) full loop
                                                                                                                            // time complexity (1) loop run one time 
// time complexity (n2) loop run 2*n
// time complexity (n3) loop run 3*n

{

let allstate =['kaithal', 'delhi', 'karnal', 'noida']
let age = 18
let state = 'kaithal'
let givevote= false

if(!givevote){
    if(age>=18){
        let isstate = false
        for(let i=0; i<allstate.length; i++){
            if(state==allstate[i]){
                isstate=true
                break
            }
        }
        if(isstate){
            console.log('ok')
        }
        else{
            console.log('invalid state')
        }
    }
}

}

// ternury operator

{
let allstate =['kaithal', 'delhi', 'karnal', 'noida']
let age = 16
let state = 'kurukshetra'
let givevote = false

let result =!givevote? age>=18? allstate.includes(state)?"ok"
: 'Invalid state'
: 'invalid age'
: 'not give vote because you are already give vote'
console.log(result)

}
