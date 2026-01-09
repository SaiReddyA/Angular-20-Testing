import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Components/home/home';
import { Test } from './Components/test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-Angular-Project');
}
