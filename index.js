let  tab = [1, 656, 565, 3566, -5, 5];  
console.log(getPP0(tab));
function getPP0(tab){
  let pp0 = 0; 
   if(tab !=null){
     pp0 = tab[0];
      for ( let num of tab){ 
       if(Math.abs(num) < Math.abs(pp0) ||( Math.abs(num) == Math.abs(pp0)  && num<pp0)) {
            pp0 = num; 
         } 
      }
   }
   return pp0;
}