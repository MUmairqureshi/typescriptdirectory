

// class Animal {
//     name : string
//     constructor(theName : string) {
//         this.name = theName;

//     }
//     move(meters : number = 0 ){
//         console.log(this.name + " moved" + meters + "m")
//     }
// }
// class Snake extends Animal {
//     constructor (name : string){
//         super(name)
//     }
//     move(meters = 5){
//         console.log("Slithering...")
//         super.move(meters)
//     }
//     bite(){
//         console.log("bites")

//     }
// }



// class Horse  extends Animal{
//     constructor(name : string){
//     super(name);
// }
// move(meters: 45)  {

//     alert("Galloping...");
//         super.move(meters);
// }}


// class Donkey extends Animal {
//     distance: number;
//     constructor(name: string, distance: number) { 
//         super(name); 
//         this.distance = distance;
//     }
//     move(meters = 45) {
//         alert("Moving...");
//         super.move(meters);
//     }
// }

// class Cat extends Animal {
//     constructor(name  : string ){
//         super(name)
//     }
//     move(meters = 1){
//         alert("Jumping...")
//             super.move(meters);
        
//     }
// }



// let a : Animal = new Snake("Python");
// a.move(5)
// let a1 : Animal = new Horse("Roket")
// let h : Horse = a1 ;
// let h2 : Horse = a1 as Horse



// let a2: Animal = new Donkey("Worker",100);
// let h3: Donkey = a2 as Donkey;    //explicit casting require because Child object have additional properties or functions
// let h4: Donkey = a2; 

// let d1 : Horse = new Donkey("Worker " , 100)




// console.log("is Animal " + (d1 instanceof Animal))
// console.log("is Donkey " + (d1 instanceof Donkey))
// console.log("is Horse " + (d1 instanceof Horse)) 


// let d2 : Donkey  = d1 as Donkey;

// let s1 : Snake = <Snake> a ;
// let s2 : Snake = a as Snake;

// let h1 : Horse = new Cat("Kitten")
// console.log(h1)







// 



// class A {
// constructor(){
//     this.MyvirtualMethod()

// }
// protected MyvirtualMethod() : void
// {
//     console.log("A")
// }}

// class B extends A{
//     private testString : string = "B";
//     public  MyvirtualMethod(){
//         console.log(this.testString)
//     }
// }
// let obj = new B();










// class A {
//     constructor() {
//         this.MyvirtualMethod();
//     }

//     protected MyvirtualMethod() {
//         console.log("A");
//     }
// }

// class B extends A {
//       testString: string = "B";

//       MyvirtualMethod() {
//         console.log(this.testString);
//     }
// }

// let obj = new B(); // Output: "B"




// checking Types 
// class Foo {}
// class Bar extends Foo{}
// class Bas extends Foo{}
// var  bar = new Bar()
// var  berr = new Bas()

// console.log(bar instanceof Bar)
// console.log(bar instanceof Foo)
// console.log(bar instanceof Object)
// console.log(berr instanceof Bas)
// console.log(bar instanceof Bas);












// 13b Abstract Class

// abstract class Base {
//     foo() : number { return this.bar() ;}
//     abstract bar() : number
// }

// class E extends Base{ 
//     bar() { return 1; }
// }

// var obj1 = new Base() ;//Error, cannnot create a instance of a Abstract class
// console.log(obj1.foo())

















// class A {
//     name : string ;
//     constructor(theName : string , age : number){
//         this.name = theName;
//         console.log("A constructure")
//     }
// }
// class B extends A{

// }

// let a  : A = new A("A" , 4);
// let  b :B = new B("C" , 78)
// let c: B = new B();      // This is not working as child class must use parents constructor
// let d: B = new B("C");










// class C{

// }
// class D extends C {
//     name : string ;
//     constructor(thsName : string , age : number){
//         super();
//         this.name = thsName;
//         console.log("D constructore")
//     }
// }


// let aa: C = new C(); // This is working as expected
// let bb: D = new D(  ); // This is not working because child class has its 2 argumnet constrcutor
// let cc: D = new D("C",8); 






// class E{
//     name : string ;
//     constructor(theName : string , age :number){
//         this.name = theName;
//         console.log("E constructore")
//     }
//     displayName() : void{
//         console.log("Name = " + this.name)
//     }
// }










// class F extends E {
//     name:string;
//     constructor(theName: string) {
//         super(theName,4);
//         // Must call super with two arguments
//         this.name = theName; 
//         console.log("F constrcutor");
          
        
//         //super("Hello",5); // Multiple supper call working, No error here -- seems to be some special case   
//     }


    
// }
// let e: E = new E("E",1);
// let f: F = new F("F");
// f.displayName(); // Display "F"










// step14_classes_private_modifier

// class Animal {
//     private name: string
//     constructor(theName : string){
//         this.name = theName
//     }
//     move(meter : number){
//         alert(this.name + "moved" + meter + "m") 
//     }
// }
// var a = new Animal ("cat").name

// console.log(a)






// class Human {
//     private name : string ;
//     constructor (name : string) {
//         this.name = name
//     }

//     eat(){
//         console.log(this.name + " is a Human and is eating");
//     }
// }




// class Animal {
//     private name: string;
    
//     constructor(name: string){
//         this.name = name;
//     }
    
//     eat(){
//         console.log(this.name + " is a Animal and is eating");
//     }
// }


// class Robot {
//     private name: string;
    
//     constructor(name: string){
//         this.name = name;
//     }
    
// }


// let h: Human = new Human("Tom");
// let a: Animal = new Animal("Goat");
// let r: Robot = new Robot("R2-D2");

// let r0: Robot = new Animal("Donkey");//now because of pivate variable this is not possible

// let h2 = h;
// h = a;//both have same properties and methods therefore are compatible but because of private variable not same type
// h.eat();
// let a2 = a;

// let r2 = r;
// r = a;//Animal has a name, Robot also has a name, but now it is an Error
// a = r2;//Error, Robot does not have eat method




























// class BigAnimal {
//     private name:string;
//     constructor(theName: string) {
//          this.name = theName; 
//         }
// }

// class Rhino extends BigAnimal {
// 	constructor() { super("Rhino"); }
// }

// class Employee {
//     private name:string;
//     constructor(theName: string) {
//          this.name = theName; 
//         }	
// }

// var animal = new BigAnimal("Elephant");
// var rhino = new Rhino();
// var employee = new Employee("Bob");

// animal = rhino;
// animal = employee; //error: BigAnimal and Employee are not compatible







 



// class ListString {
//     private contents: string[];
//     constructor() {
//         this.contents = [];
//     }
//     protected setElement(index: number, item: string) {
//         this.contents[index] = item;
//     }

// }

// class StackString extends ListString {
//     currentIndex: number;

//     constructor() {
//         super();
//         this.currentIndex = 0;
//     }

//     public push(item: string) {
//         this.setElement(this.currentIndex, item);
//         this.currentIndex++;
//     }
// }

// var stack = new StackString( );;









// accessor// 


// var passcode = "secret passcode";
// class Employee {
//     private _fullName : string | undefined;
//     get fullName() : string | undefined {
//         return this._fullName
//     }
//     set fullName(newName : string | undefined ){
//         this._fullName = this.fullName
//     }
// }
// var employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }
















class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();





