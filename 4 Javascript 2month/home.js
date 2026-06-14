// let a = [1,2,3,4,5,6,7,8,[1,2,3,4]];
// let b = [...a]
// a[8][0]=99
// a[a.length-1][1]=100
// console.log(a)                              // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 99, 100, 3, 4 ] ]
// console.log(b)                             // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 99, 100, 3, 4 ] ]
// console.log(a.length);                    // 9
// console.log(a.length-1)                   // 8
// console.log(a[a.length - 1]);            // [1,2,3,4] 
// console.log(a[a.length - 1].length-1);     // 4
// console.log(a[a.length - 1][0]);         // 1
// console.log(a[a.length - 1][3]=200);         // 4


const a = [1, 2, 3, [1, 2, 3, 4]];
a.push(100)
a.unshift(200)
const b = [...a] // shaallow copy
b.shift(1)
b.pop(2)

a[3][0]=5000
a[a.length-1]
console.log(a)
console.log(b)


