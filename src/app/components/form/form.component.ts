import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone:true
})
export class FormComponent {
  loginForm:FormGroup
  constructor(private fb:FormBuilder , private router:Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required ,Validators.minLength(6)]],
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loginForm.value
      this.router.navigate(['/tasks'])
    }
  }
 

}
