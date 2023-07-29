import chalk from "chalk";
import inquirer from "inquirer";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");


// let answers = await inquirer.prompt([{
//     name: "age",
//         type: "number",
//         message: "Enter your Age:"
//     }
// ]);
// console.log(  chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));












// step04_unions_literals


// let myname  : string| null
// myname = "Umair"
// console.log(myname)

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// myAge = "Dont Know";//narrowing
// console.log(myAge);
// console.log(myAge.toString());



// console.log(myAge.toLowerCase());







// let newAge = Math.random() > 0.6 ? "Khan": 60;
// if(newAge === "Khan"){
//     newAge.toUpperCase()
// }

// if(typeof newAge === "string"){
//     newAge.toUpperCase()
// }

// typeof newAge === "string"
// ? newAge.toUpperCase()
// : newAge.toFixed();
// console.log(newAge)



// let age : number |  "died" | "unknown"

// age = "died"
// age = "unknown"
// age = 80
// console.log(age)




// let zia : "zia"
// zia = "zia"



// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;
// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK
// console.log(yourName)











type RawData = boolean | number | string | null | undefined;

let data : RawData
data = "Umair"
console.log(data)
type Id = number | string;

type IdMaybe = Id | undefined | null;
let name : IdMaybe
name = 32
console.log(name)
