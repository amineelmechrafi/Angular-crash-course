import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { FormComponent } from './components/form/form.component';
import { UserComponent } from './components/user/user.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {path:'tasks' , component: TaskComponent},
  {path:'form' , loadComponent:()=>import('./components/form/form.component').then((component)=>component.FormComponent)},
  { path: 'user/:id', component: UserComponent  , canActivate:[authGuard]},
  { path: '**', redirectTo: '' } // Wildcard route for 404 
  
  

];
