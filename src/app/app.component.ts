import { Component, computed, effect, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, DatePipe, LowerCasePipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { Observable } from 'rxjs';
import { FormComponent } from './components/form/form.component';
import { TaskComponent } from './components/task/task.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet  ,NgIf , NgSwitch,NgSwitchCase,NgSwitchDefault , DatePipe , UpperCasePipe ,LowerCasePipe ,AppendPipe ,AsyncPipe ,NgFor ,FormComponent ,TaskComponent , RouterModule ],
  providers:[DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  tasks:string[]=["task 1", "task 2" , "task 3"]
 

  deleteTask(task:string){
    this.tasks=this.tasks.filter((t)=>t!=task)
  }
}
