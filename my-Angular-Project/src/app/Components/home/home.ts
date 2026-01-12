import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name: string = 'sai reddy';
  price: number = 25000;
  today: Date = new Date();
  text: string = 'AngularPipesExample';

}
