import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }}</h1>
        <hr>
        <h3>Counter: {{ counter }} </h3>

        <button (click)="increaseBy(1)">+1</button>
        <button (click)="decreaseBy(1)">-1</button>
        <button (click)="resetCounter()">Reset</button>
    `
})

export class ContadorComponent{
    public title: string = 'Contador';
    public counter: number = 10;
  
    increaseBy(value:number):void{
      this.counter += value;
    }
  
    decreaseBy(value:number):void{
      this.counter -= value;
    }
  
    resetCounter(){
      this.counter = 10
    }
}