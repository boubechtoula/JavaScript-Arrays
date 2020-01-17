
let tab = ["ggg","nanan","fdgfdg","iyhug","nanan","2121"];
let newtab = findWordI( tab); 
console.log(newtab);
function findWordI( tab){
  let toReturn = []; 
  for(let item of tab ){
    if(isI(item) && !exist(item, toReturn)){ 
       toReturn.push(item);
    }
  }
  return toReturn;
}

function isI(w){
   
    let l = w.length; 
    let i=0; 
    for( i =0 ; i<l ; i++){
      if( (w[i]!==w[l-1-i])){
        return false;
      } 
    }
    return true; 
}

function exist ( w, tab){  

  if(tab != null){ 
     let a = tab.find(a=> a==w);
   if(a) {
     return true;
   }else{
     return false;
   }
  }
   return true;
}
 