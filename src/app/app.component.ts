import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
oddNumbers: number[] = [];
evenNumbers: number[] = [];

  startFunction(num:number) {
    console.log(num);
    if(num % 2==0){
      this.evenNumbers.push(num);
    } else{
      this.oddNumbers.push(num);
    }
}
}
