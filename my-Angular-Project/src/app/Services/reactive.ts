import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Reactive {
  
  GetData(): string{
    return "Reactive service method."
  }
  public subject = new Subject<string>();
  public behavioursubject = new BehaviorSubject<string>("");
  
}
