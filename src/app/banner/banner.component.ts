import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  animations: [
    trigger('activeUnactive', [
      // ...
      state('active', style({
        backgroundColor: '*',
        fill: 'white',
      })),
      state('unactive', style({
        backgroundColor: 'white',
        fill: 'gray',
      })),
      transition('* => *', [
        animate(100)
      ]),
      transition('void <=> *', [
        animate(0)
      ])

    ]),
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  activeButton: number = 0

  private colours = ['100', '185', '310']

  ngOnInit(): void {
  }

  changeColor(buttonNumber: number) {
    this.activeButton = buttonNumber
    document.documentElement.style.setProperty('--hue-start', this.colours[buttonNumber].toString())
  }

}
