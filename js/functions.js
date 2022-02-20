//there are three types of functions
// (1) normal functions :-

//        function <function name> (parameter1,parameter2,parameter3)
//              {
//                   do some thing
//                 }                            
//
//          function invoke:
//                           function-name(arg1,arg2);
 
//   function rem(a,b){
 //   return a%b;
//   }
//  let ans= rem(19,6)
//    console.log(ans);

//   *function calculator*
//function calculator(str,a,b){
 //   if(str=='add'){
 //       return function add(){
            //return a+b;
//            console.log(a+b);
 //       }
 //   }
//}
//let returnedfunc= calculator('add',2,3);
//console.log("returned function is\n" +returnedfunc);
//returnedfunc();
//
//  *function expression*
//let variable-name=function(){
  //  do something
//}
//name of variable is used to invoke the function
//variable-name();

//let sayhi= function abcd(){
//    console.log("hello guys i am function expression");
//}
//console.log("line 41\n"+ sayhi);
//sayhi();
//abcd() //error abcd is not define.
//


//      (3)IIFE:-> INVOKE FUNCTION EXPRESSION
//
function add(a,b){
    return a+b;
}
let k=add(2,3);
console.log(k);

let additionIIFE =( function add(a,b){
    //return a+b;
console.log(a+b);
})(20,30)
//console.log(additionIIFE);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var a=1800;
console.log(a);






















