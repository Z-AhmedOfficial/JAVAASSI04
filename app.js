//CHAPTER#21: //
// 1. Type the characters that are missing from this code.
// userInput = "FIFA"
// var allLower = userInput.toLowerCase();
// console.log(allLower);
// 2.
// var x = "MY STRING"
// var x = x.toLowerCase();
// alert(x);
//3.
// var x = "zain ahmed"
// var x = x.toUpperCase();
// alert(x);
//4.
// var x = "GINOLA"
// var result = x.toLowerCase();
// alert(result);
//5.
// var arr = ["CRIstiano"]
// var result = arr[0].toLowerCase();
// alert(result);
//6.
// var x = "arsenal bottled the league lol"
// var y = x.toUpperCase();
// alert(y);
//7.
// var cityName = "kaRacHi";
// var firstlet = cityName.slice(0,1).toUpperCase();
// var otherwords = cityName.slice(1).toLocaleLowerCase();
// var combwords = firstlet + otherwords;
// alert(combwords);


//CHAPTER#22-25: //
// 1.
// sameWords = "captain";
// var result = sameWords.slice(1,3);
// alert(result);
// 2.
// var str = "Abcdefghi"
// var res = str.length;
// alert(res);
// 3.
// var animal = "elephant";
// var seg = animal.slice(2,6);
// alert(seg);
// 4.
// var str = "Don't give up, keep going"
// var res = str.length;
// alert(res);
// 5.
// var mystr = "Viva Garnacho"
// var res = mystr.length;
// alert(res);
// var sli = mystr.slice(1,10);
// alert(sli);
// 6.
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// alert(indx); //IT IS 3
// 7. 
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// alert(indx); //IT IS 16
// 8.
// text = "Let it go, let it go, can't hold it back anymore"
// indx = text.lastIndexOf("go");
// alert(indx);
// 9.
// var text = "Hello, World!";
// var i = text.indexOf("ld");
// alert(i);
// if (i > -1) {
//     alert("Found");
// } else {
//     alert("There are no words at this index.");
// }
// 10.
// var str = "abcde"
// var res = str.charAt(2);
// alert(res);
// 11.
// var text = "BERNARDOSILVA"
// var cha = text.charAt(10);
// alert(cha);
// 12.
// var str = "HelloWorld"
// var x = str.charAt(9);
// alert(x);
//13.
// var inp = prompt("Enter a word");
// var cha = inp.charAt(5);
// alert(cha);
// 14.
// var str = "Heythere!"
// if(str.charAt(3) == "t"){
//     alert("Its a char");
// }
// else
// {
//     alert("Its not a char");
// }
// 15.   
// var text = "Hello";
// var characters = [];
// for (var i = 0; i < text.length; i++) {

//     characters[i] = text.charAt(i);
// }
// alert(characters);
// var reply = "No ill do it";
// var rrep = reply.replace("No", "yes");
// alert(rrep);
// 16.
// var str = 'Cristiano is number 1 athlete';
// var newstr = str.replace("1","one");
// alert(newstr);
//17.
// var x = "Replace all instances of a with z";
// var y = x.replace(/a/g, "z");
// alert(y);


//CHAPTER#26: //
// 1.
// var x = 1.5;
// var y = Math.round(x);
// alert(y);
// 2.
// var origNum = 3.14;
// var roundNum = Math.ceil(origNum);
// alert(roundNum);
// 3. 
// var origNum = 5.8;
// var roundNum = Math.floor(origNum);
// alert(roundNum);
// 4.
// var x = 22.13;
// var y = Math.round(x);
// alert(y);
// 5.
// var x = 0.5;
// var y = Math.floor(x);
// alert(y);


//CHAPTER#27: //
// 1.
// var x = Math.random();
// var y = Math.ceil(x * 50);
// alert(y);
// 2.
// var a = Math.random();
// var b = a;
// alert(b);
// 3. 
// var x = Math.random()
// var y = Math.ceil(x * 6);
// alert(y);
// 4.
// var x = Math.random()
// var y = Math.ceil(x * 2);
// if(y == 1){
//     alert("Head");
// }
// else{
//     alert("tails")
// }


//CHAPTER#28-29: //
// 1.
// var x = "12"
// var y = parseInt(x);
// alert (typeof y);
// 2.
// var x = "123"
// var y = Number(x);
// alert(typeof y);
// 3. 
// var x = "343.21"
// var y = parseFloat(x);
// alert(typeof y);
// 4. 
// var str = "42";
// var parsedInt = parseInt(str);
// var isConvertibleToInt = !isNaN(parsedInt);
// alert(isConvertibleToInt); // Output: true
// 5.
// var x = 12;
// var y = x.toString();
// alert(typeof y);
// 6.
// function conversion(number){
//     alert(typeof number.toString())
// }
// conversion(42);
// 7.
// var decimalString = "3.14";
// var integerNumber = parseInt(decimalString);
// alert(integerNumber); 


//CHAPTER#30: //
// 1.
// var a = 1.5432;
// var b = Math.round(a).toFixed(4).toString();
// alert(b);
// 2.
// var num = 2.3244;
// var num = Number(num.toFixed(2));
// alert(num);
// 3.
// var num = 1.3554;
// if (num.toFixed(2).toString().length > 4) {
//     alert("more than 4 or 4");
//   }
//   else{
//     alert("less than 4");
//   }
// 4.
// var a = 1.343342445244;
// var b = a.toString();
// alert(a.toFixed(2));
// alert(typeof b);


//CHAPTER#31-34: //
// 1.
// var dObj = new Date();
// 2.
// var a = new Date();
// var dStr = a.toDateString();
// alert(typeof dStr);
// 3.
// var d = new Date();
// var day = d.getDay();
// alert(day);
// 4.
// var a = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var todaysday = date.getDay();
// alert(todaysday);
// alert( dayNames[todaysday]);
// 5.
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1; // Adding 1 since months are zero-based (0 - 11)
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// 6.
// var later = new Date("31-1-2020");
// 14.
// var a = new Date().getTime();
// var b = new Date("02-23-2002").getTime();
// var c = a - b;
// // alert(c);
// var d = c / 1000* 24 * 60 * 60 * 365;
// alert(d);

//CHAPTER#35-37: //
// 1.
// function displayAlert(){}
// 2.
// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
//   }
  
//   var name = askName();
//   alert("User name: " + name);
// 3.
// function callTwoFunctions() {
//     functionOne();
//     functionTwo();
//   }
  
//   function functionOne() {
//     console.log("This is function one.");
//   }
  
//   function functionTwo() {
//     console.log("This is function two.");
//   }
  
//   callTwoFunctions();
// 4. 
// function mname(){
//     var a  =prompt("enter name ");
//     return a;
// }
// var name = mname();
// alert("Name is " + name);
//  5.
// function concat(a, b, c) {
//   }
// 6.
// function ab(a,b){
//     alert(a + b);
// }
// ab("zain", "bro")



//CHAPTER#38: //
// 1.
// function locvar(){
//     alert("the variable that can only be used in main code and cannot be called outside main code is local variables");
// }
// locvar();
//2.
// var a = 23;
// function myf(){
//     alert(a);
// }
// myf()


//CHAPTER#39-40: //
//1.
// var a = "2";
// switch(a){
//     case "1":
//     alert("1")
//     case "2":
    
//     alert("2")
//     break;
// }
// 2.
// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "London":
//     alert("You entered London!");
//     break;
//   case "Paris":
//     alert("You entered Paris!");
//     break;
//   case "New York":
//     alert("You entered New York!");
//     break;
//   default:
//     alert("The city you entered is not recognized.");
// }

