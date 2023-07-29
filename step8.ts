// let arr1  : number[] = [2,3,4,5]
// console.log(arr1[1])


// let arr2  : Array<number> = [2,3,4,5]
// console.log(arr2[2])

// // let arr3  : number[] = new number[3]  error


// let arr5   : number[] = [2,3,4,5]
// arr5.push(344)
// console.log(arr5)







//  All parameter are required
// function add(x : number , y : number) :number{
// return x + y ;
// }

// console.log(add(4,3))

// //  Anonymous
// let myAdd1 = function(x : number , y : number) :number{
//     return x + y ;
//     }
//     console.log(myAdd1(3,5))

//     // //Anonymous function with explict type
//     let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
//         return x+y; 
//     };
// console.log(myAdd2(4,5))

// // //Lambda functions


// let myAdd4 = ( a : number , b : number) => a + b 

// console.log(myAdd4(2,4))


// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// 	//....
// }









// function bildName( Fname : string , lname? : string) :string{
//     if(lname){
//     return Fname + " " + lname
//     }
//     else 
//          return Fname
// }
// let result1 = bildName("Bob")
// let result2 = bildName("Bob", "Adams", "Sr");  //error, too many parameters
// var result3 = bildName("Bob", "Adams");  //also ok



// var buildName1 : (firstName : string , lastName?: string) => string = 
// function (firstName : string , lastName?: string ): string{
//     if (lastName)
//     return firstName + " " + lastName;
//     else
//         return firstName;
// }











// 







// step09c_function_default_parameter


// function bildName(fname : string , lname  = "khan") : string{
//     if (lname)
//     return fname + " " + lname;
// else
//     return fname;
// }







// let buildName1 : (firstName: string , lastName?: string) => string =
// function(  firstName: string  , lastName = "zia") : string {
//     if (lastName)
//     return firstName + " " + lastName;
// else
//     return firstName;
// }





// step09d_function_rest_parameter

// function buildName(firstName: string , ...restofName: string[]){
//    return firstName + " "  + restofName.join(" ");
// }
// var employeeName = buildName ("Joseph", "Samuel", "Lucas", "MacKinzie");


// console.log(employeeName)











// var buildFun : (fname : string , ...rest : string[]) => string = 
// function (fname : string, ...restOfName: string[]) {
// 	return fname + " " + restOfName.join(" ");
// }
// var employeeName = buildFun ("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName)









// step09e_async
// /callbacks.ts



// function myCallBack(text : string) {
//     console.log("inside myCallback" + text)
// }
// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }

// callingFunction("myText", myCallBack);






// function myCallBack(text : string ){
//        console.log("inside of myCallback" + text)
// }

// function callingFunction(initialText  : string , callback : (text : string) => void){
//     callback(initialText)
// }
// callingFunction("myText", myCallBack);













function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: boolean, arg2: boolean): boolean;

function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}


console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));






