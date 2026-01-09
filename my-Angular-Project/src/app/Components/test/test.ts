import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  UserName : string = 'Some user data';
  isDisabled : boolean = false;
  elseIfcase : boolean = true;
  count:number = 12;
  
  DisplayMessage():void {
    //alert('clicked');
    debugger
    this.count++
  }

}
