import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name: string = 'sai reddy';
  price: number = 25000;
  today: Date = new Date();
  text: string = 'AngularPipesExample';

constructor(private fb: FormBuilder) {
  
}

 

  submit() {
  }
}
