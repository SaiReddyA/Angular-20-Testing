import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontcolorChange } from './fontcolor-change';
import { PrefixPipe } from './prefix-pipe';
interface UserTest{
  id:number,
  name:string
}

@Component({
  selector: 'app-test',
  imports: [FormsModule, CommonModule, FontcolorChange, PrefixPipe],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnChanges {
  UserName : string = 'Some user data';
  isDisabled : boolean = false;
  elseIfcase : boolean = true;
  today = new Date();
  count:number = 12;
  number : any[] = [1, 2, 3, 4]
  objectsList : UserTest[] = [ {id:1, name: 'test1'}, {id:2, name: 'test2'}]

  DisplayMessage():void {
    //alert('clicked');
    this.UserName = `sai ${this.count}..teste`
    debugger
    this.count++
  }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('calling'+ this.count)
    }

}
