import { Component } from '@angular/core';

@Component({
  selector: 'app-child-contact',
  imports: [],
  templateUrl: './child-contact.html',
  styleUrl: './child-contact.css',
})
export class ChildContact {
  constructor(){
    console.log('ttest')
  }
}
