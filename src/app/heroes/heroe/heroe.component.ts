import { Component } from '@angular/core'

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.css']
})

export class HeroeComponent{

    public name: string = 'ironman';
    public age: number = 45;

    get capitalizedName():string {
        return this.name.toUpperCase()
    }

    getHeroeDescription():string{
        return `${this.name} - ${this.age}`;
    }

    changeHeroe():void {
        this.name = 'spiderman'
    }
 
    changeAge():void {
        this.age = 25;
    }

    resetForm():void {
        this.name = 'ironman';
        this.age = 45;
    }
}