// Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”





// var cities =["karachi","hyderabad","Lahore"]
// for (let i = 0; i < cities.length; i++) {
   
    
//     if(cities[i]==="karachi"){
//         alert(cities[i]+"Welcome to city of lights")
//     }
// }


//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
//  user is female, give the message: Good Morning Ma’am.
 


// var gender = prompt("enter your gender","Male&Female")
// if(gender==="male"){
//     alert("Good Morning Sir")
// }else if(gender==="female"){
//     alert("Good Morning Ma’am")
// }else("put your gender")

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var trafficSignal=prompt("put or traffic color","red green yellow")
// if(trafficSignal==="red"){
//     alert("Must Stop")
// } else if(trafficSignal==="yello"){
//     alert("Ready to move")
// } else if(trafficSignal=="green"){
// alert("Move now")
// }else("put you color")

// 4. Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var car = prompt("remaining fuel in car")
// if(car<=0.25){
// alert("Please refill the fuel in your car")
// }else("full fuel in your car")


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else(alert("given condition for variable b is false"))


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as per following table:

// Take input from user

// var percentage = +prompt("Enter percentage : ");

// if (percentage >= 90) {
//  alert("grade = A+") 
// } else if (percentage >= 80) {
//  alert("grade = A") ;
// } else if (percentage >= 70) {
//   alert("grade = B")
// } else if (percentage >= 60) {
//  alert("grade = c") ;
// } else if (percentage >= 50) {
//   alert("grade = D");
// } else {
//   alert("grade = f");
// }
// document.write(percentage)


// var subject1=+prompt("Enter marks obtained in subject 1")
// var subject2=+prompt("Enter marks obtained in subject 2")
// var subject3=+prompt("Enter marks obtained in subject 3")
// var total=subject1+subject2+subject3
// var percentage = (total/300)*100
// var grad;
// if(percentage>=80 || percentage <= 100 ){
// grad="A+"   
// }
// else if (percentage>=70 || percentage <=80){
//     grad="A"
// }

// else if (percentage>=60 || percentage<=70){
//     grad="b"
// }

// else if (percentage>=50 || percentage<=60){
//     grad="c"
// }
// else if (percentage>=40 || percentage <=50){
//     grad = "D"
// }
// else("Fail")
// document.write("total = "+" "+total+"<br>")
// document.write("percentage = "+percentage+"<br>")
// document.write("Grade"+" "+grad+"<br>")

// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// var secret = Math.floor(Math.random() * 10) + 1
// var number=+prompt("ranging from 1 to 10")
// if(number===secret){
//     alert("Congratulations!")
// }else(alert("Try Again"))

// console.log(secret)

//a. If user guesses the same number, show “Bingo! Correct answer”.

// var secret = Math.floor(Math.random() * 10) + 1
// var number=+prompt("ranging from 1 to 10")
// if(number===secret){
//     alert("Bingo! Correct answer!")
// }else(alert("Try Again"))

//  console.log(secret)
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// is divisible by 3
// var number = prompt("Enter a number")

// if(number%3===0){
// alert("divied by 3")
// }
// else(alert("not divided by 3"))

// Write a program that checks whether the given input is an even number or an odd number.

// var number = prompt("Enter Your Number")
// if (number%2===0) {
//     alert("Even number")

// }
// else(alert("odd number"))

// 10. Write a program that takes temperature as input and shows a message based on following criteria

// var weather=prompt("weather temperature")
// if (weather>40) {
//     alert("It is too hot outside.")
// }else if(weather>30){
//     alert("The Weather today is Normal.")
// }else if(weather>20){
//     alert("The Weather today is cool.")
// }else if(weather>10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)



// var val1= +prompt("put first val")
// var operator = prompt("put operator")
// var val2 =+prompt("put second val")

// if(operator==='+')
// {
//     alert(val1+val2)
// }else if(operator==='-'){
//     alert(val1-val2)
// }else if(operator==='*'){
//     alert(val1*val2)
// }else if(operator==='/'){
//     alert(val1/val2)
// }else if(operator==='%'){
//     alert(val1%val2)
// }

