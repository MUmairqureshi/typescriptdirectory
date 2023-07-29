// function printLabel(labelledObj : {label : string}){
//     console.log(labelledObj.label)
// }
// printLabel({label: "Size 10 Object"});
export {};
// // printLabel({mylabel : "Size 10 Object"})
// function printLabelX(labelledObj : {[ x : string]  : any }){
//     console.log(arguments[0])
// }
// printLabelX({name : "zia"})
// printLabel({size: 10, label: "Size 10 Object"});
// var myobj1 = { label : "Sizes 10 obj"}
// printLabel(myobj1)
// var myObj2 = {mylabel: "Size 10 Object"};
// printLabel(myObj2);
// var obj3= {name: "Zia" , 3};
// printLabelX(obj3);
// var myObj4 = {size: 10, label: "Size 10 Object"};
// printLabel(myObj4);
//Same Example with a named interface
// interface LabelledValue {
//     label: string;
//   }
//   interface LabelledValue2 {
//     [x: string]:any
// }
// function printLabelY(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
//   function printLabelY2(labelledObj: LabelledValue2) {
//     console.log(arguments[1]);
//   }
//   printLabelY({label: "Size 11 Object"});//Case 1 exact properties: OK
//   //Case 2a
//   printLabelY({mylabel: "Size 11 Object"});//Case 2a missing or renamed property: Error
//   //Case 2b
//   printLabelY2({name: "Zia" , size : 21});// Ok, `name` matched by index signature
//   //Case 3
//   printLabelY({size: 11, label: "Size 11 Object"});//Case 3 Fresh Literal: Error no extra properties allowed
// var myObjY1 = {size: 11, abel: "Size 11 Object"};
// printLabelY(myObjY1);//Case 1 exact properties: OK
// //Case 2a
// var myObjY2 = {ed  : " @#" , label: "Size 11 Object"};
// printLabelY(myObjY2);//Case 2a missing or renamed property: Error
// //Case 2b
// var objY3= {name: "Zia"};
// printLabelY2(objY3);// Ok, `name` matched by index signature
// //Case 3
// var myObjY4 = {size: 11, label: "Size 11 Object"};
// printLabelY(myObjY4);//Case 3 Stale Literal: extra properties allowed
// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
// function createSquare(config : SquareConfig ) : {color : string ; area : number }{
//     var newSquare = { color : "white" , area : 100}
//     if(config.color){
//         newSquare.color = config.color;
//     }
//     if(config.width){
//         newSquare.area = config.width * config.width 
// }
// return newSquare
// }
// var mySquare = createSquare({color: "black"});
// console.log(mySquare.area );
// console.log(mySquare.color );
// interface SearchFunc {
//     (source: string, subString: string): boolean;//Note there is no name assigned to the function signature
//   }
//   var mySearch: SearchFunc = function(src: string, sub: string) {
//     var result = src.search(sub);
//     if (result == -1) {
//       return false;
//     }
//     else {
//       return true;
//     }
//  };
// interface StringArray {
//     [index : number] : string ;
//     length : number ;    
// }
// let myArray :  StringArray= [  ".wq" , " Bob" , "Fred"]
// var first = myArray[0]
// interface Dictionary {
//     [index: string]: string;//Note there is no name assigned to the function signature
//   } 
//   let myDictionary: Dictionary = {"first": "Bob", "second": "Fred"};
//   console.log(myDictionary)
//   var first = myDictionary["first"];
//   console.log(first)
// interface Dictionary2 {
//     [index: string]: string;//Note there is no name assigned to the function signature
//     length:string; // string length property
//   } 
//   let myDictionary2: Dictionary2 = {"first": "Bob", "second": "Fred" ,length:"2"}; // Will not work, property length is required
//   let myDictionary3: Dictionary2 = {"first": "Bob", "second": "Fred",length:"2"}; // Will work, length property is defined but not much usefull 
//   var first = myDictionary3["first"];
//   interface AnotherDictionary {
//     [index: string]: string;//Note there is no name assigned to the function signature
//     length: number;    // error, the type of 'length' is not a subtype of the indexer
//   } 
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface  {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }
// interface ClockInterface {
//     currentTime: Date;
//     new (hour: number, minute: number);
//     //this defines a constructor signature
// }
// class Clock1 implements ClockInterface  { //Error
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }
// // d to work with the 'static' side of the class directly. In this example, we work with the class directly:
// interface ClockStatic {
//     new (hour: number, minute: number);
// }
// interface MyClockInterface {
//     currentTime: Date;
// }
// class Clock implements MyClockInterface  {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }
// var cs: ClockStatic = Clock;
// var newClock: ClockInterface = new cs(7, 30);
// interface Shape{
//     color : string;
//     a : number
// }
// interface Square extends Shape{
//     sideLenght : number ;    
// }
// var squre = <Square>{}
// squre.color = "bolue";
// squre.sideLenght = 10 
// squre.a = 5  
// interface PenStroke {
//     penWidth: number;
// }
// interface Square1 extends Shape, PenStroke {
//     sideLength: number;
// }
// var square1 = {} as Square1;//Alternative syntax for casting
// square1.color = "blue";
// square1.sideLength = 10;
// square1.penWidth = 5.0;
// interface AnotherDictionary {
//     (index: string): string;//Note there is no name assigned to the function signature
//     length: number;    // error, the type of 'length' is not a subtype of the indexer
//   } 
//An example of hybrid type is an object that acts as both a function and an object, with additional properties:
//An example of hybrid type is an object that acts as both a function and an object, with additional properties:
// interface Counter {
//     (start: number): string;//Note there is no name assigned to the function signature
//     interval: number;
//     reset(): void;
// }
// var c =   {} as Counter 
// c.interval = 23
// c.reset();; 
// c.interval = 5.0;
// class Point {
//     x: number;
//     y: number;
// }
// interface Point3d extends Point {
//     z: number;
// }
// var point3d: Point3d = {x: 1, y: 2, z: 3};
// function logClass(target: any) {
//     // save a reference to the original constructor
//     var original = target;
// // a utility function to generate instances of a class
// function construct(constructor, args) {
//   var c : any = function () {
//     return constructor.apply(this, args);
//   }
//   c.prototype = constructor.prototype;
//   return new c();
// }
// var f : any = function (...args : [])  {
//     console.log("New: " + original.name); 
//     return construct(original, args);
//   }
//   // copy prototype so intanceof operator still works
//   f.prototype = original.prototype;
//   // return new constructor (will override original)
//   return f;
// }
// //apply the decorator to a class
// // @logClass/
// class Person { 
//   public name: string;
//   public surname: string;
//   constructor(name : string, surname : string) { 
//     this.name = name;
//     this.surname = surname;
//   }
// }
// var me = new Person("Zia", "Khan");  
// // New: Person
// console.log(me instanceof Person); 
// // true
// function logClassWithArgs(filter: Object) {
//     return (target: Object) => {
//         // implement class decorator here, the class decorator 
//         // will have access to the decorator arguments (filter) 
//         // because they are  stored in a closure 
//         console.log(target, filter);
//     }
// }
// let a = logClassWithArgs( {filter : " 23"})
// console.log(a)
// @logClassWithArgs({ when : { name : "Zeeshan"} })
// class Person { 
//   public name: string;
//   public surname: string;
//   constructor(name : string, surname : string) { 
//     this.name = name;
//     this.surname = surname;
//   }
// }
// var me = new Person("Zia", "Khan");  
// // New: Person
// console.log(me instanceof Person); 
// import "reflect-metadata";
// function logType(target : any, key : string) {
//       var t = Reflect.getMetadata("design:type", target, key);
//       console.log(`${key} type: ${t.name}`);
//     }
// class Demo{ 
//       @logType // apply property decorator
//       public attr1 : string | undefined;
//     }
// class Container<T>{
//     private _array: T[];
//     constructor(){
//         this._array = [];
//     }
//     add(item: T){
//         this._array.push(item);
//     }
// }
// let c = new Container<string>();
// let c1 = new Container<number>();
// function *generatorFn():string{
//     yield "secondValue";
//     //third task
//     yield "thirdValue";
// }
// var generator = generatorFn();
// var next = generator.next();
// while(!next.done){
//     console.log(next.value);
//     next=generator.next();
// }
// class StateHandler  extends class { reset() { return true; } }    {
//     constructor(){
//         super()
//     }
// }
// var g = new StateHandler()
// g.reset( )
// class Container<T>
// {
//     private _array: T[];
//     constructor(){
//         this._array = [];
//     }
//     add(item: T){
//         this._array.push(item);
//     }
// }
// let c = new Container<string>();
// let c1 = new Container<number>
// class MyObject {
//     name: string
// }
// class Container<T extends MyObject>
// {
//     private _array: T[];
//     constructor(){
//         this._array = [];
//     }
//     add(item: T){
//         this._array.push(item);
//         console.log(item.name);
//     }
//     print(){
//         this._array.forEach((value: T )=>console.log(value.name));
//     }
// }
// //let c = new Container<string>();//Error
// //let c1 = new Container<number>();//Error
// class MyObject2 extends MyObject{
//     doSomething(){
//         console.log(this.name + " did it");
//     }
// }
// let obj = new MyObject2();
// obj.name = "Zeeshan";
// let cont = new Container<MyObject2>();
// cont.add(obj);
// cont.print();
