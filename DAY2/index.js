// let input = prompt("Enter the number of musicians!");
// if(input <= 0){
//     document.write("Not A Group");
// }
// else if(input == 1){
//     document.write("SOLO");
// }
// else if(input == 2){
//     document.write("Duet");
// }
// else if(input == 3){
//     document.write("Trio");
// }
// else if(input == 4){
//     document.write("Quartet");
// }
// else if(input > 4){
//     document.write("This is a1 large group");
// }

// let input = prompt("Check Your Balance!");
// let balance = 5000;
// if(input == "NO"){
//     document.write("Thank you. Have a nice day!");
// }else if(input == "YES"){
//     let accountStatus = prompt("Is account active and balance > 0");
//     if(accountStatus == "YES"){
//         document.write("Your Balance is "+ balance +"<br>");
//     }else if(accountStatus == "NO"){
//         let active = prompt("Is account not active");
//         if(active == "YES"){
//             document.write("Your account us no longer active");
//         }else if(active == "NO"){
//             if(balance == 0){
//                 document.write("Your Account is Empty")
//             }else{
//                 document.write("Your Balance is negative. Please contact bank")
//             }
//         }
//     }
// }

// var choice = prompt("Enter the value in digit.");
// choice = parseInt(choice);
//     switch(choice){
//         case 1: document.write("1 refers to JANUARY");
//                 break;
//         case 2: document.write("2 refers to Feburary");
//                 break;
//         case 3: document.write("3 refers to MARCH");
//                 break;
//         case 4: document.write("4 refers to APRIL");
//                 break;
//         case 5: document.write("5 refers to MAY");
//                 break;
//         case 6: document.write("6 refers to JUNE");
//                 break;
//         case 7: document.write("7 refers to JULY");
//                 break;
//         case 8: document.write("8 refers to AUGUST");
//                 break;
//         case 9: document.write("9 refers to SEPTEMBER");
//                 break;
//         case 10: document.write("10 refers to OCTOBER");
//                 break;
//         case 11: document.write("11 refers to NOVEMBER");
//                 break;
//         case 12: document.write("12 refers to DECEMBER");
//                 break;
//         default: "NOT A VALID NUMBER";
//     }

for(var i = 1; i <= 10; i++){
        for(var j = 1; j <=i; j++){
                document.write("*"); 
        }
        document.write("<br>");
}