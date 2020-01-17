
console.log("dfdfd");
console.log(inverseString("654"));
function inverseString (str) {

  if(  str!=null && str.length>0){
    let array = str.split(""); 
    let reverseArray = array.reverse();  
    let toTeturn = reverseArray.join(""); 
    return toTeturn;
  }
  return null;
}

class B {
  constructor (m, n ){
    this.m = m;
    this.n = n;
  }
}
class A extends B {
    constructor (m,n){
      super(m,n); 
    } 
     
    add (){ 
    } 
}
let a = {
  add : function () {

  },
  f : 0
}

a.ss = function () {
  console.log("sdsds");
}