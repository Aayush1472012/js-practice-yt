// Syntax:
// ----------------
// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }


const month = "feb";

switch(month){
    case "jan":
        console.log("Jan");
        break;
    
    case "feb":
        console.log("Feb");
        break;
        
    case "march":
        console.log("March");
        break;

    default:
        console.log("Invalid month!!!");
}