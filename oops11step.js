// // class Human {
// //     name : string ;
// //     constructor(name : string){
// //         this.name = name
// //     }
// //     eat(){
// //         console.log(this.name + " is a Human and is eating")
// //     }
// // }
// // console.log(Human.name)
export {};
// // class Animal {
// //     name : string 
// //     constructor(name : string){
// //         this.name = name
// //     }
// //     eat(){
// //         console.log(this.name + " is a Animal and is eating")
// //     }
// // }
// // class WildAnimal {
// //     title: string;
// //     constructor(title: string){
// //         this.title = title;
// //     }
// //     eat(){
// //         console.log(this.title + " is a Wild Animal and is eating");
// //     }
// // }
// // class Robot {
// //     name: string;
// //     constructor(name: string){
// //         this.name = name;
// //     }
// // }
// // let h : Human = new Human("Tom")
// // let a : Animal = new Animal("Goat")
// // let r : Robot = new Robot("Dog")
// // let h2 = h
// // console.log("h2" ,h2)
// // h = a 
// // h.eat()
// // console.log("h" , h)
// // let r2 = r 
// // r= a 
// // console.log("r2" ,r2)
// // console.log("r" , r  )
// // let hum : Human = new Animal("Dog")
// // console.log(hum)
// // let r0: Robot = new Robot("Donkey");//how is this possible?
// // var isItRobot = r0 instanceof Robot;
// // console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results
// // var isItAnimal = r0 instanceof Animal;
// // console.log("Is Donkey a Animal: " + isItAnimal);//true, giving the right results
// // class  Human {
// //     name : string;
// //     constructor(name :string){
// //         this.name = name
// //     }
// // }
// // class Animal {
// //     name : string ;
// //     age : number ;
// //     constructor( name : string , age : number){
// // this.name = name ;
// // this.age = age
// //     }
// //     eat(){
// //         console.log(this.name + " is a Human and is eating")
// //     }
// // }
// // let h1 = new Human(" ")
// // let a1 = new Animal(" "  , 3 )
// // h1 = new Animal("test", 25);
// // a1 = new Human("zeeshan"  );//ERROR
// // class Human {
// //     name : string ;
// //     constructor(name : string ){
// //         this.name = name 
// //     }
// // }
// // class Animal {
// //     name : string;
// //     age : number
// //     constructor(name : string , age : number){
// //         this.name = name ;
// //         this.age = age 
// //     }
// //     eat(quantity: number){
// //         console.log(this.name + " is a Human and is eating");
// //     }
// // }
// // let d  = {name:"Hello"};
// // let h =  new Human("hello"); // This is allowed
// // // let h1: Human = d; // Concept of stale object applied here
// // console.log(h)
// // // console.log(h1)
// // let isHuman = h instanceof Human; 
// // console.log(isHuman); // false
// // let isHuman:boolean = h instanceof Human; 
// // console.log(isHuman); // false
// // //This is not allowed need to add all properties 
// // //including functions
// // let a1: Animal = {name:"Cat",age:4}; 
// // let a1: Animal = {name:"Cat",age:4}; 
// // // This below statement is allowed 
// // // Note there is no parameter in function and it does not give 
// // // any compilation error but you can not call
// // // this function without paramter, see the call below
// // let a2: Animal = {name:"Dog",age:4, eat: function() {
// //     console.log("Eat in object literal");
// // }}; 
// // step12c_typing_confusion
// class Human {
//     name : string ;
//     constructor(name : string){
//         this.name = name
//     }
// }
// class Animal {
//     name : string ;
//     age : number 
//     constructor(name : string , age : number){
//         this.name = name ;
//         this.age = age 
//     } 
//     eat(quality : number){
//         console.log(this.name + " is a Human and is eating");
//     }
// }
// let d  = {name:"Hello",age:4};
// let h: Human = {name:"hello"}; // This is allowed
// let h1: Human = d; // Concept of stale object applied here
// //Its false, because we have assigned object literal and 
// //assignment works because of structural typing
// let isHuman:boolean = h instanceof Human; 
// console.log(isHuman); // false
// //This is not allowed need to add all properties 
// //including functions
// let a1: Animal = {name:"Cat",age:4}; 
// // This below statement is allowed 
// // Note there is no parameter in function and it does not give 
// // any compilation error but you can not call
// // this function without paramter, see the call below
// let a2: Animal = {name:"Dog",age:4, eat: function() {
//     console.log("Eat in object literal");
// }}; 
// a2.eat(); // Not allowed 
// a2.eat(3); // Works fine
// let isAnimal:boolean = a2 instanceof Animal; 
// console.log(isAnimal); // What will be printed?
