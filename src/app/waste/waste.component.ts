import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/card.model';

@Component({
  selector: 'app-waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>

  cardState: CardStateModel
  selectedCard: CardModel

  i : number = 0

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  showCard(){
    if(this.cardState.waste[this.i] != null){
      this.selectedCard = this.cardState.waste[this.i]
      this.i++
    } else {
      this.i = 0
      this.selectedCard = this.cardState.waste[this.i]
      this.i++
    }
  }

}
