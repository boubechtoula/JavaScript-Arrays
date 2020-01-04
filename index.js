 let numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

 console.log(sumWithReduce(numArray));
 console.log(sumWithFor(numArray)); 
 
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