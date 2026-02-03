import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Reactive {
  
  GetData(): string{
    return "Reactive service method."
  }
  
  GetPromicesData(): any  {
    return new Promise((promise) =>{
      promise("sending promise data.")
    })
 }

 GetObserbaleData(): any | Observable<string>{
    return new Observable((observable) =>{
      observable.next('first value in observable')
      observable.next('second value in observable')
      observable.complete()
    })
  }

public behavioursubject = new BehaviorSubject<string>("InitialData");
 UpdateBhaviourSubject(){
   this.behavioursubject.next('Testing behaviour subject');
 }



private subject = new Subject<number>();
public usersubject$ =  this.subject.asObservable();
 updateSubject(){
  this.subject.next(500)
  this.subject.next(600)
  this.subject.next(900)
 }
   
}
