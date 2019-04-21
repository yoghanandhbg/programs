let a = [1,2,3,4,5];
function f() {
  a.forEach((_,idx) => {
    console.log(`index is ${idx}`);
    return idx;
  });
}

let b = f();
console.log(`b is ${b}`);
//=================================================
// let a = 10;
//
// function f() {
//   console.log(`a inside f() ${a}`);
// }
// // f();
//
// function g() {
//   var a = 5;
//   console.log(`a inside g() ${a}`);
//   f();
// }
//
// function h() {
//   // let a = 0;
//   (function fofh() {
//     console.log(`a inside f of h() ${a}`);
//   })();
// }
//
// console.log('calling g from global')
// g();
//
// console.log('calling f from global')
// f();

// console.log('calling h from global')
// h();

//=================================================
// class A{
//   f1(){
//     console.log('Im f1 of A');
//     console.log(this);
//     let b = new B;
//     console.log('calling g1 of B passing A.f2 as arg');
//     b.g1(this.f2);
//   }
//
//   f2(){
//     console.log('Im f2 of A');
//     console.log(this);
//   }
// }
//
// class B{
//     g1(callback){
//       console.log('Im g1 of B')
//       console.log(this);
//       console.log('calling the passed callback');
//       // callback = callback.bind(that);
//       callback();
//     }
//
//     g2(){
//       console.log('Im g2 of B')
//       console.log(this);
//     }
//
// }
//
// function h1(){
//   console.log('Im h1 of global')
//   console.log(this);
// }
//
// var a = new A;
// let b = new B;
//
// let f = a.f2;
// // a.f2(); //A
// // f();    //undef
// // that = this;
// f = f.bind(this);
// b.g1(f);//{}
// console.log('im done bro last line')
