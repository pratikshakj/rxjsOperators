import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.scss',
})
export class RxjsLearningComponent {
  agents: Observable<string>;
  agentName:string;

  oflists = ['oftype1','oftype2','oftype3','oftype4'];
  ofOperatorarray: Observable<string[]>= of(this.oflists); //array of string

  strings ='RXJS';
  ofOperatorString:Observable<string>=of(this.strings); //string

  obj ={
    name:'RXJS',
    version:7
  }
  ofOperatorarray$: Observable<any> = of(this.obj); //any with $

  ofOperatorobj: Observable<object>=of(this.obj); //object

  ngOnInit(): void {
    this.ofOperatorarray.subscribe((data) => {  //array of string
      console.log(data,'data')
    });

    this.ofOperatorString.subscribe((data) => {  //string
      console.log(data,'data')
    });

    this.ofOperatorobj.subscribe((data) => {  //object
      console.log(data,'data')
    });

    this.ofOperatorarray$.subscribe((data) => {  //any with $
      console.log(data,'data') ;
    }
    );



    this.agents = new Observable(function (observer) {
      try {
        observer.next('Agent 1');
        setInterval(()=>{
          observer.next('Agent 2');
        },3000);
        setInterval(()=>{
          observer.next('Agent 3');
          },6000);

      } catch (e) {
        observer.error(e);
      }
    });
    this.agents.subscribe((data) => {
     this.agentName = data;
    });
  }
}
