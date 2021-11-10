// alert("HELLO CLASS....")


// var  text = 'Hello world, welcome to the world.'

// console.log(text.indexOf("world"));



// var text = "jaffar aman"

// var indNum = text.lastIndexOf("aman");


// console.log(indNum);


// var name =  '    " jaffar"  '


// var para = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War."

// console.log(para);


// for(var i = 0 ; i<para.length ; i++){

//       if( para.slice(i  ,  i + 12)   === "World War II"  ){
                
//             para = para.slice(0 , i) + "The Second World War"  +  para.slice(i +12) 
//             console.log( "para==>" , para);
      
//         }  

// }


// var firstChar = para.indexOf("World War II")
// console.log(firstChar);

// if(firstChar !== -1){
//     para = para.slice( 0 , firstChar) + "THE SECOND WORLD WAR"  + para.slice(firstChar + 12)
//     console.log("replace " , para)
// }



        ////CHAR AT()////


var  text = 'Hello world, welcome to the world.'

console.log(text.charAt(1))
        
// var firstName = prompt("ENTER YOUR FIRST NAME")

// var num = 2500

// console.log(firstName.charAt(firstName.length -1));


// var isMatch = "no" 
// for(var i = 0 ; i <firstName.length ; i++){

//         if(firstName.charAt(i) === "@" ){
            
//             alert("VALID EMAIL");
//             isMatch = "yes"

//         }

// }



// if(isMatch === "no"){
//     alert("email invalid")
// }


var para = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be World War II."

console.log(para)


para = para.replace(/World War II/g , "THE SECOND WORLD WAR")

console.log( "replace=>>>>" ,para)




// var num = 50.98

// var round = Math.round(num )
// var floor = Math.floor( num )
// var ceil = Math.ceil( num )

// console.log("NUm=>>" , num)
// console.log("ROUND=>>" , round)
// console.log("floor=>>" , floor)
// console.log("ceil=>>" , ceil)


var random = Math.floor( Math.random() * 10 + 1)
console.log(random);



// var headUser = prompt("Enter Your name" , "HEAD USER")
// var tailUser = prompt("Enter Your name" , "TAIL USER")

// var headScore = 0
// var tailScore = 0

// var toss = Math.floor( Math.random()  * 6 + 1  )
// console.log(toss);



// if(toss == 1){
//         alert( headUser + " " +"HEAD USER Win")
//         tailScore += 1
// }else{
//         alert( tailUser + " " +"Tail USER Win")

// }


// document.write("headScore" + headScore + "<br>")
// document.write("headScore" + tailScore)


// var user1 = prompt("Enter Your name" , "HEAD USER")
// var user2 = prompt("Enter Your name" , "tail USER")

// var userScore1 = 0
// var userScore2 = 0

// for(var  i = 0 ; i<10 ; i++){
//          userScore1 = userScore1 + Math.floor(Math.random() * 6 +1)
// }

// for(var  i = 0 ; i<10 ; i++){
//         userScore2 = userScore2 + Math.floor(Math.random() * 6 +1)
// }


// if(userScore1 > userScore2){
//         console.log("user 1 win" + userScore1 + "user2=>" + userScore2)
// }else if(userScore1 < userScore2){
//         console.log("user 2 win" + userScore2 + "user1=>" + userScore1)

// }



var num1 = Number("100") ;


var num2 = 200

console.log(num1 + num2)



