import {
    Component, OnInit
} from '@angular/core';
interface taskDetails {
    taskName:string;
    priority:number;
    status:string;
    
}
@Component({
    selector:'task-app',
    templateUrl:'./task.component.html',
    styleUrls:['./task.component.css']
})
export class TaskComponent implements OnInit{
    constructor(){}
    ngOnInit():void{

    }
    tasks:taskDetails[] = [
    ];
    addTasklist = {} as taskDetails;
    
    addedTask = {} as taskDetails;
   
addTask(taskName:string, priority:string) {
    let isFound:boolean = false;
    
    for(let i = 0;i<this.tasks.length;i++)
    {
      if(this.tasks[i].taskName == taskName)
      {
        isFound = true;
        this.tasks[i].priority = parseInt(priority);
        break;
      }
    }

    if(!isFound)
    {
      let pri:number = parseInt(priority);
      let tempTask:taskDetails={
        taskName:taskName,
        priority:pri,
        status:"pending"
      };
      this.tasks.push(tempTask);
    }
}
changeStatus(status:string, name:string){
  this.tasks.forEach(t=>{
    if(t.taskName.localeCompare(name)==0){
      t.status=status;
    }
  })
 }

getAllTasks() : taskDetails[] {
    return this.tasks;
}
}