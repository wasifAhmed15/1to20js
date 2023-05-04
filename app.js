//Declare an empty array using JS literal notation to store
//student names in future.

// var studentNames=[]
// console.log(studentNames)  

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames=[]
// console.log(studentNames)

// 3. Declare and initialize a strings array.

// var string = ["wasif Ahmed Khan"]
// console.log(string)

//4. Declare and initialize a numbers array.

// var numbers=[1,3,4,61]
// console.log(numbers)

//5. Declare and initialize a boolean array.
// var boolean= ["+","-","*","%","/"]
// console.log(boolean)

// var studentbio=["Name = Wasif",
// "father Name = Atif"

// ]
// console.log(studentbio)

//6. Declare and initialize a mixed array.

// var mixed=["wasif",1,"+"]
// console.log(mixed)


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var a = "Qualifications"
// var qualifications= ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"]
// document.write(a+"<br>"+qualifications) 

//Initialize an array with color names. Display the array elements in your browser

// var colors = ["Red","Green","blue"]
// document.write("<ul>")
// for(a=0; a < colors.length; a++){
// document.write("<li>"+colors[a]+ "<li/>")
// }
// document.write("</ul>")

// var colors = ["Red","Green","blue"]
// document.write("<ul>")
// for ( i = 0; i < colors.length; i++) {
//     document.write("<li>"+ colors[i] +"</li>")
//     }
// document.write("</ul>")

//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
// var colores =["red","green","blue"]
// var newColor=prompt("put Your Favorite color")
// colores.unshift(newColor)
// for (let a = 0; a < colores.length; a++) {
//    document.write(colores[a])

    
// }

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
//updated array in your browser.



// var colores =["red","green","blue"]
// var newColor=prompt("put Your Favorite color")
// colores.push(newColor)
// for (let a = 0; a < colores.length; a++) {
//    document.write(colores[a])
// }


//c. Add two more color to the beginning of the array. Display the updated array in your browser

// var colors = ["red","green","blue"]
//  colors.unshift("yellow","pink")
// document.write(colors)

//d. Delete the first color in the array. Display the updated array in your browser.

// var colors = ["red","green","blue"]
// colors.shift()
// document.write(colors)

// e. Delete the last color in the array. Display the updated array in your browser.

// var colors = ["red","green","blue"]
// colors.pop()
// document.write(colors)


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.

// var color =  ["red","green","blue"]
// var indexNumber=+prompt("Enter A index num you put color")
// var colores=prompt("color name")
// color.splice(indexNumber,0,colores)
// document.write(color)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color =  ["red","green","blue","purple"]
// var indexNumber=+prompt("Enter A index num you put color")
// var colores=prompt("color name")
// color.splice(indexNumber,colores)
// console.log(color)


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
// method.

// var studentName=["wasif","Atif","Aqib","raziq","Nawab"]
// studentName.sort()
// document.write(studentName)

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
//array.

// var cityName=["Qutta","Karachi","Hyderabad","Islamabad"]
// var b = cityName.slice(1,3)
// document.write(b) 


// Write a program to create a single string from the
// below mentioned array:


// var arr= ["This ", " is ", " my", "cat"];
// var str = arr.join("")
// document.write(str)


// 13 Create a new array. Store values one by one in such a way that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var arr=[]
// arr.push("first")
// arr.push("second")

// console.log(arr)

// var first =arr.shift()
// var second = arr.shift()
// console.log(arr)

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-
//First Out)

// var newArray=["Wasif","Ahmed","Khan"]
// var reverse=newArray.reverse()
// document.write(reverse)

// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:  

var storePhone=[ "Apple",   "Samsung", "Motorola", "Nokia "," Sony & Haier" ]
document.write("<ul>")
for(a=0; a<storePhone.length; a++){

    document.write("<li>"+storePhone[a]+"</li>")
    document.write("</ul>")
}



