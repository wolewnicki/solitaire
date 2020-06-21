import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../Models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() drawnCard: CardModel

  constructor() { }

  ngOnInit(): void {
  }

  showData(){
    console.log(this.drawnCard)
  }

}
