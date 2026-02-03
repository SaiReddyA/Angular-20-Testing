import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from './noSpaceValidator';
import { Reactive } from '../../Services/reactive';

@Component({
  selector: 'app-reactive-forms-test',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-test.html',
  styleUrl: './reactive-forms-test.css',
})
export class ReactiveFormsTest implements OnInit{

  formGroup!: FormGroup
  constructor(private fb:FormBuilder, public reactive:Reactive){
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
        name: ['', [Validators.required, Validators.maxLength(5), noSpaceValidator]],
        email: ['vsd', [Validators.required, noSpaceValidator, Validators.maxLength(5)]],
        password:['', Validators.required],
     })
     
  }

  ngOnInit(): void {
    this.reactive.GetPromicesData().then((res:any) =>{
            console.log(res, 'promises');
    })

    // this.reactive.GetPromicesData().subscribe((res:any) =>{
    //         console.log(res, 'subscribe');
    // })

     this.reactive.GetObserbaleData().subscribe((res:any) =>{
            console.log(res, 'observable');
    })

    this.reactive.behavioursubject.subscribe((res:any) => {
      console.log(res, 'inside')
    })
    
    this.reactive.UpdateBhaviourSubject();

    this.reactive.usersubject$.subscribe(((res:any)=> {
      console.log('res', res)
    }))

    this.reactive.updateSubject();
  }

  Submit(){
      console.log(this.formGroup.invalid)
    if(!this.formGroup.invalid){
      console.log(this.formGroup.value)
    }
    console.log(this.reactive.GetData())
  }
  
}
