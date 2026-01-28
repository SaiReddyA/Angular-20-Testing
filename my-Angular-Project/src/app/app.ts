import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { Home } from './Components/home/home';
import { Test } from './Components/test/test';
import { Communication } from './Components/communication/communication';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-Angular-Project');
  currenttab :string = 'test'
  parenttochildpassing : string = 'parent to child passing information'
  
  
  childpassing:string = ''
  childcomponentcalled(inputvalue:string){
    this.childpassing = inputvalue
  }
  

  constructor(private route:Router){}
}
