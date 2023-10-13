const prompt=require('prompt-sync')();

// 1. Draw a flowchart to find the sum of the first n natural numbers, where n is any given integer.

// const num=prompt("Enter a Number:");
// let sum=0;
// for (let i=0;i<=num;i++){
//     sum+=i;
// }
// console.log(sum);


// 2. Draw a flowchart to find the sum of the first 15 even natural numbers.

// let i=1;
// let sum=0;
// while (i<=(15*2)){
//     if (i%2==0){
//         sum=sum+i;
//     }
//     i++;
// }
// console.log(sum);



// 3. Construct a flowchart to show how consecutive even numbers starting from 2 are summed up until the sum just exceeds 1000 and then show the sum and the number of even numbers added.

// let i=2;
// let sum=0;
// while (i<=1000){
//     if (i%2==0){
//         sum=sum+i;
//     }
//     i++;
// }
// console.log(sum);




// 4. Construct a flowchart to print the numbers below 100 that are divisible by 7.

// let i=1;
// while (i<100){
//     if (i%7==0){
//         console.log(i);
//     }
//     i++;
// }


// 5. Construct a flowchart to show how to find the product of n natural numbers.

// let i=1;
// let n=15;
// let product=1;
// while (i<=5){
//     product*=i;
//     i++;
// }
// console.log(product);


// 6. Construct a flowchart to find the sum of the squares of the first 9 natural numbers that are divisible by 3.

// let i=1;
// let sum=0;
// while (i<=9){
//     if (i%3==0){
//         sum=sum+(i**2);
//     }
//     i++;
// }
// console.log(sum);


// 7. Draw a flowchart to show how to obtain the HCF and LCM of two numbers. (input two numbers from the user)


// 8. Draw a flowchart to show how the sum of the digits of a given number can be obtained. (Input the number from the user)

// let num=3451;
// let sum=0;
// while (num>0){
//     n=num%10;
//     sum=sum+n;
//     num = Math.floor(num / 10);
// }
// console.log(sum);


// 9. Draw  the logic of obtaining the reversed form of a given whole number. (Input the number from the user)

// let whole_num=234;
// let rev=0;
// while (whole_num!=0){
//     n=(whole_num%10)
//     rev=(rev*10)+n;
//     whole_num=Math.floor(whole_num/10);
// }
// console.log(rev);



// 10.Construct a flowchart to show how the factors of a given number can be obtained. (Input the number from the user)

// let user=14;
// let i=1;
// while (user>0){
//     if (user%i==0){
//         console.log(i);
//     }
//     i++;
// }



// 11. Construct a flowchart to show how to determine whether a given number is a perfect number.  (Input the number from the user)
// Note: A number is said to be a perfect number if the sum of its factors (except itself) equals the number.
// Construct a flowchart to show how you can decide if a given number is prime or not.  (Input the number from  the user)

// let n=6;
// let b=n;
// let i=1;
// let sum=0;
// while (n>0){
//     if (n%i==0){
//         sum=sum+i;
//     }
//     i++;
// }
// if(b==sum){
//     console.log("perfact Number");
// }else{
//     console.log("Not perfact Number");
// }



// 12. Construct a flowchart for obtaining the sum of a given number of terms (n) for a given value of X in the following mathematical series: (Input X and n from the user)
// X+X2/2+X3/3+X4/4  ....upto n terms
// X-X33+X55-X77+X99 ....upto n terms
// X-12X3+12.34X5-12.34.56X7+ .... upto n terms
// X-X33!+X55!-X77!+ .... upto n terms
// Construct a flowchart to find out the sum of first N terms of the following series. 5 + 55 + 555 + 5555 + .......... up to N terms.

// Develop a flowchart to show how to find all the perfect numbers under 10,000.


// Show how to determine all the 3-digit Armstrong numbers. A number is called an Armstrong number if the sum of the values of the digits each raised to the power equal to the number of digits in the number equals the number. For example, 153 is an Armstrong number, because 153 = 13 + 53 + 33.

// let number = 153;
// let sum=0;
// let n=number;
// let count=0
// while (number>0){
//     d=number%10;
//     count+=1;
//     number=Math.floor(number/10);
// }

// let k=n;
// while (n>0){
//     f=n%10;
//     sum=sum+(f**c);
//     n=math.floor(n/10);
// }
// if (k==sum){
//     console.log("Armstrong");
// }else{
//     console.log("not Armstrong");
// }






// Some three-digit numbers show the property that the sum of the factorials of the digits equals the numbers, for example, 145 = 1! + 4! + 5!. Develop a flowchart to show how to determine all such numbers.
// Create a pyramid of numbers consisting of a given number of lines. For example, if the given number is 5, then we should see the following:
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// Construct a flowchart to print the following patterns with flexible dimensions as supplied by the user:
// Note: Use nested loops and not string multiplication to print these patterns.
// N = 5   
// N = 4  


// N = 5    

// N = 4  


// Construct a flowchart to input a positive integer. If the number is even, add up its digits. Otherwise, multiply the individual digits and print the result.
// Construct a flowchart to determine the HCF of n given numbers. Input a value n from the user then input n numbers from the user.
// Construct a flowchart to determine the maximum and the minimum out of n given numbers.
// Construct a flowchart to find the second max of given N numbers.


// Construct a flowchart to find the third max of given N numbers.
// Construct a flowchart to input a number, N, and print first N prime numbers.
// Write a program to find the sum of all prime numbers between 1 to n. (n input from the user)
// Construct a flowchart to print only the prime factors of a given number N.
// Construct a flowchart to show the logic of printing the first N Fibonacci numbers. Fibonacci numbers are obtained from the relationship ti = ti–1 + ti–2, i = 2 to n where t0 = 0, t1 = 1.
// Construct a flowchart to find a series of five consecutive numbers, the sum of the squares of the first three of which is equal to the sum of the squares of the last two. For example,
// (– 2)2 + (– 1)2 + 02 = 12 + 22
// Some two-digit numbers have the property that the sum of the squares of the numbers equals the sum of the squares of the numbers with reversed digits (for example, 482 + 522 + 632= 842 + 252 + 362). Construct a flowchart to show how to determine all such two-digit numbers.










