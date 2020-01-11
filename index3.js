let tab = ["ggg","nanan","fdgfdg","iyhug","nanan","2121"];

console.log(isMother("239323","d0sfds2323fdsfds9"));
let str = "jhkhkhjkhjik";
function isMother(son, m){
  let a = new String(); 
  if(m!=null && m != null){
    for(let i =0 ;i<son.length ; i++){ 
      if(m.indexOf(son[i]) <0){
        return false; 
      }
    }
    return true;
  }
  return false;
}