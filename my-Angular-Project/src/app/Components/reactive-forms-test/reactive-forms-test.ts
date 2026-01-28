import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-test',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-test.html',
  styleUrl: './reactive-forms-test.css',
})
export class ReactiveFormsTest {

  formGroup!: FormGroup
  constructor(private fb:FormBuilder){
    //basic
    //  this.formGroup =  this.fb.group({
    //   name: '', 
    //   email: '',
    //   password:'',
    //  })
    //deafult values
    //   this.formGroup =  this.fb.group({
    //     name: ['Raju', ],
    //     email: ['raj@.j.in', ],
    //     password:['fsdfsd', ],
    //  })

     //with validations
      this.formGroup =  this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(5)]],
        email: ['', Validators.required ],
        password:['', Validators.required],
     })
  }

  Submit(){
      console.log(this.formGroup.invalid)
    if(!this.formGroup.invalid){
      console.log(this.formGroup.value)
    }
  }
}
