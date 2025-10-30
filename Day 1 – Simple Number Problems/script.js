// question 1 : print numbers from 1 to N
// input 5
// output 1 2 3 4 5

// solution

// let result = document.querySelector('.result');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     let num = document.querySelector('#num').value;
//     num = parseInt(num); // string ko number mein convert karein

//     let output = "";
//     for (let i = 1; i <= num; i++) {
//         output += i + " ";
//     }

//     result.innerHTML = output.trim(); // final output dikhayein
// });








//  question 2 : print numbers from N to 1 (use q1 loop don't use new loop)
// input 5
// output 5 4 3 2 1

// solution

// btn.addEventListener('click', () => {
//     let num = document.querySelector('#num').value;
//     num = parseInt(num); // string ko number mein convert karein
//     // let output = []; // using array
//     let output = ""; // using string

//     // use q1 loop
//     for (let i = 1; i <= num; i++) {
//         // output[num - i] = i; // using array
//         // console.log(num -i +1);
        
//         output =output+ (num-i+1) + " " ; // using string
//     }
//     result.innerHTML = output;
// });







// question 3 : Print All Even Numbers from 1 to N

// const num = 50;
// let res = ""
// for (let i = 1; i <= num; i++){
//     if (i % 2 === 0) res = res + i + " ";

    
// }

// console.log(res);






// question 4 : Print All Odd Numbers from 1 to N

// const num = 50;
// let res = ""
// for (let i = 1; i <= num; i++){
//      if (i % 2 === 1) res = res + i + " ";

    
//  }

//  console.log(res);








// question 5 : Sum of First N Natural Numbers

// formula : n(n+1)/2
// const num = 50;
// // let sum = num * (num + 1) / 2; // using formula


// // using loop
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum += i;
// }

// console.log(sum);







// question 6 : Product (Factorial) of N

// const num = 5;
// let product = 1;
// for (let i = 1; i <= num; i++) {
//     product *= i;
// }

// console.log(product);







// question 7 : sum of all even number

// formula : n/2 * (n/2 + 1) if n is even
// formula : (n-1)/2 * ((n-1)/2 + 1) if n is odd
// formula : n(n+1) ;       n = count even numbers

// const num = 11;
// let countEven = Math.floor(num / 2);
// let sumEven = countEven * (countEven + 1);
// console.log(sumEven);











// question 8 Print square of Number from 1 to N

// const num = 5;
// let outpu =""
// for (let i = 1; i <= num; i++){
//     outpu = outpu + (i * i) + " ";
    
// }

// console.log(outpu);













