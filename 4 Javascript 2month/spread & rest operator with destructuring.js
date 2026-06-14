
// spread & rest operator 
// di

// 1. Question:
// {
//     const arr = [100, 200, 300, 400, 500, 600];
//     const [a, b, c, ...r] = arr;

//     console.log(a, b, c); // o/p=> 100 200 300
//     console.log(arr) // o/p=> [ 100, 200, 300, 400, 500, 600 ]
//     console.log(...r) // o/p=> 400 500 600
//     console.log([arr]) // o/p=> [ [ 100, 200, 300, 400, 500, 600 ] ]
//     console.log(...arr) // o/p=> 100 200 300 400 500 600
// }


// 2. Question:
// {
//     const arr = [10, 20, 30, 40];
//     const [a, , b] = arr;

//     console.log(a, b);

// }
// output=> 10 30



// 3. Question:
// {
//     const user = {
//         name: "Komal",
//         age: 22
//     };

//     const { name, age } = user;

//     console.log(name, age);
//     console.log(user)
// }
//output: Komal 22
//output { name: 'Komal', age: 22 }

// 4. Question:
// {
//     const arr1 = [1, 2];
//     const arr2 = [3, 4];

//     const result = [...arr1, ...arr2];

//     console.log(result);
// }
// output=> [ 1, 2, 3, 4 ]

// 5. Question: 
// {
//     const arr = [10, 20, 30];

//     console.log(...arr);
// }
// output: 10 20 30

// 6. Question:
// {
//     const user = {
//         name: "Komal"
//     };

//     const details = {
//         age: 22
//     };

//     const result = {
//         ...user,
//         ...details
//     };

//     console.log(result);
// }
// output:
// { name: 'Komal', age: 22 }


// 7. Question:
// {
//     function demo(...nums) {
//         console.log(...nums);
//         console.log(nums)
//     }

//     demo(1, 2, 3, 4);
// }
//output: 
// 1 2 3 4
// [ 1, 2, 3, 4 ]


// 8.Question:
// {
//     const arr = [10, 20, 30, 40, 50];

//     const [first, ...rest] = arr;

//     console.log(first);
//     console.log(rest);
// }
// output:
// 10
// [ 20, 30, 40, 50 ]

// 9. Question:

// {
//     function show(a, b, ...rest) {
//         console.log(a);
//         console.log(b);
//         console.log(rest);
//     }

//     show(10, 20, 30, 40, 50);
// }

//output:
// 10
// 20
// [ 30, 40, 50 ]

// 10. Question:
// {
//     const numbers = [1, 2, 3, 4, 5];

//     const [a, b, ...rest] = numbers;

//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// output:
// 1
// 2
// [ 3, 4, 5 ]

// 11. Question:
{
    const arr = [1, 2, 3];

    const copy = [...arr];

    console.log(copy);
}
// output: => [ 1, 2, 3 ]


// 12. Question:
// {
//     function demo(...a) {
//         console.log(a);
//     }

//     demo(1, 2, 3);
// }
// output: => [ 1, 2, 3 ]

// 13. Question:
{
    
}


