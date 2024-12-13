import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() taskVal!:string
@Output() deleteTask=new EventEmitter()

onDeleteClick(){
  this.deleteTask.emit()
}
}
  