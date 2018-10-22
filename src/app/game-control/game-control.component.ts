import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startButton = new EventEmitter<number>();
  interval;
  lastnumber  = 0;
  constructor() { }
  ngOnInit() {
  }
  startbuttonGame() {
    this.interval = setInterval(() => {
      this.startButton.emit(this.lastnumber + 1);
      this.lastnumber++;
    }, 1000);
  }
  stopbuttonGame() {
      clearInterval(this.interval);
  }

}
