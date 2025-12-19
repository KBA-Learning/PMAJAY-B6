import read from "readline"
const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const taskMap=new Map();
showMenu();
function showMenu(){
    console.log(`
        1. Add Task
        2. View Tasks
        3. Exit`);
    rl.question("Choose a option:",option)
    
}

function option(opt){
    switch(opt){
        case '1': rl.question("enter the task to add",(task)=>{
            if(task !==''){
                const taskid=taskMap.size+1;
                taskMap.set(taskid,task)
                console.log(`Task added:[${taskid}] ${task}`);
                        }
            else{
                console.log("Add a valid task");
                
            }
            showMenu();
        })
        break;
       // console.log("hello");
       
        case '2': if(taskMap.size>0){
                  console.log('Tasks');
                  for (const [taskid,task] of taskMap){
                  console.log(`[${taskid}] ${task}`);
             
            }
             }
            else{
                console.log("No Tasks Added");
                
             }
            showMenu();
            break;
        case '3':console.log("Exiting Task Manager");
                    rl.close();
                    break;
            
    }
}