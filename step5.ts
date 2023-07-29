// let teacher = {
//     name : "zeeshan",
//     experience : "10"

import NumberPrompt from "inquirer/lib/prompts/number.js"

// }
// console.log(teacher.name)
// console.log(teacher["experience"])

// Type Declaration
// let std :{
//     name : string,
//     exp : number
// }
// std = {
//     name :"Umair",
//     exp : 32
// }
// console.log(std.exp)
// console.log(std["name"])




// let comp : {
//     emp : string,
//     sal : number
// }

// comp =  {
// emp : "Umair",
// sal : 32
// }

// console.log(comp.emp)
// console.log(comp["sal"])




// anonymous





// let teacher :{ name : string  , exp : number} ={
//     name : "Umair",
//     exp : 21
// }

// console.log(teacher)


// aliased  Object type


// type   = {
//     name : string,
//     age? :number
// }
// let student : student ={
//     name : "Umair" ,
//     age : 30
// }

// console.log(student["name"]);
// console.log(student.age);


// // interface

// interface Manager {
//     name : string ,
//      stdn? : number
// }

// let storeManager: Manager = {
//     name : "Umair" ,
// }

// console.log(storeManager["name"]);















// These two interfaces are completely
// transferrable in a structural type system:

// interface Sphere {
//     diamand : number
// }
// interface Ball {
//     diamand : number
// }


// let sphere: Sphere = { diamand: 20 };
// let ball :Ball = {    diamand : 10}



// sphere = ball;
// ball = sphere;


// console.log(sphere.diamand)
// console.log(ball.diamand)
















// interface Table {
//     diameter : number;
//     length : number
// }



// let tupe : Table = {
//     diameter : 32 ,
//     length : 32
// }



// // ball = tupe error








// let myType = { name: "Zia", id: 1 };

// myType = { id: 2,  name: "Tom" };
// myType = { id: 2,  name_person: "Tom" };
// var x: { id: number, [x: string]: any };









// type Author = {
//     firstname : string
//     lastName : string 
// }
// type Book ={
//     author: Author
//     name : string
// }

// const myBook :Book = {
//     author :{
//         firstname : "Umair",
//         lastName : "CSDCJ"
//     },
//     name : "My best friend"
// }

// console.log(myBook)


// type  intersection

// interface Student {
//     student_id:number;
//     name : string
// }


// interface Teacher {
//     teacher_Id:number;
//     teacher_name : string
// }

// type intersected_type = Student & Teacher;

// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };

// console.log(obj1)
// console.log(obj1.teacher_Id);
// console.log(obj1.name);































// let myval : any 
// myval = 32
// myval ="hey"
// myval = []
// myval = Math.random
// myval   = undefined

// myval = () => {
//     console.log('Hey again!'); 
// }
// myval ="hey"
// console.log(myval)


// unknown

// let  value : unknown
// value  = true 
// value = 32
// value = "scds"
// value = []
// value = {}
// value = null
// value = undefined 
// value = () => {
//         console.log('Hey again!'); 
//     }
//     value = undefined 

//     console.log(value)























// // Never

// // Function returning never must not have a reachable end point
// function error(message: string): never {
//     throw new Error(message);
//   }
//   console.log(error)   
//   // Inferred return type is never
//   function fail() {
//     return error("Something failed");
//   }

//   console.log(fail)
//   // Function returning never must not have a reachable end point
//   function infiniteLoop(): never {
//     while (true) {}
//   }

//   console.log(infiniteLoop)

















// step06_explict_casting


// let myname  : unknown = "Zia"

// console.log((myname as string).length)
// console.log((<string>myname ).length)










// step07a_enum



// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log(c)



// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

















// enum Color2 { Red = 1, Green = 2, Blue = 4 }

// var colorIndex = Color2["Blue"];
// console.log(colorIndex)











const enum Color {Red, Green, Blue};

// var c : Color = Color.Green

// console.log(c)



const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// var colorIndex = Color1[2]
// console.log(colorIndex)
// console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
