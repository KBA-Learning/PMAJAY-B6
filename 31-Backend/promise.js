const fetchData=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             const add = 2+3;
             if(add==5){
                 resolve(add);
                // return add
             }
             else{
                 reject("The output is not correct");
                // return 0;
             }
         },2000)
     
 
     })
}
function add() {
    const add = 3 + 3
    return add
 }
 async function printK(){
     const k = await fetchData();
     const l = add()
    
     console.log(k);
      console.log(l)
 console.log("Hello World");
 }
 printK();