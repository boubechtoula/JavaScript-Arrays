 let numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
const doc = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]
 console.log(sumWithReduce(numArray));
 console.log(sumWithFor(numArray)); 
 console.log(flattenArray(numArray));
 console.log(getMapFromDoc(doc));
 
 function getMapFromDoc ( d){
   return d.reduce((rec, item )=>{
     rec[item.name] =  {type : item.type}; 
        return rec; 
   },{});
 }

  function flattenArray (arr){
    return arr.reduce((result,item)=>{
      return result.concat(Array.isArray(item)? flattenArray(item): item); 
    },[])
  }

  function sumWithReduce (tab){
  return tab.reduce((totale, item )=> {
     return totale + (Array.isArray(item) ? sumWithReduce(item) : item ); 
  }, 0); 
  };
  function sumWithFor(arr) {
   let cpt = 0; 
    for( a of arr){
      if(Array.isArray(a)){
        cpt  = cpt + sumWithFor(a);
      } else{ 
        cpt = cpt + Number(a); 
      }
    }
    return cpt; 
 }  