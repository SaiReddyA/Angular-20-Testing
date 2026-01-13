import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  imports: [],
  templateUrl: './communication.html',
  styleUrl: './communication.css',
})
export class Communication implements OnInit, OnDestroy {
  
  constructor(){
        console.log('constructer called')
  }

  ngOnInit(): void {
    console.log('ng On Init called')
  }

  ngOnDestroy(): void {
    debugger
    console.log('ng on destroy called')
  }


}
