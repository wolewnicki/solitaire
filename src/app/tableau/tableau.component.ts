import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Drop } from '../app.constants'
import { Observable } from 'rxjs';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model';
import { lstat } from 'fs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>

  cardState: CardStateModel
  drop = Drop

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  returnPredicate (): boolean {
    return true
  }

  foundationPredicate (enterCard: CdkDrag<CardModel>, list: CdkDropList<CardModel>, xCoord: number){
    const foundationPiles = this.cardState.foundation.piles
    const test = 'e'
    if (foundationPiles[xCoord].length == 0){
      return enterCard.data.rankValue == 1
    } else {
      const lastIndex = foundationPiles[xCoord][foundationPiles[xCoord].length - 1]

      return lastIndex.suit == enterCard.data.suit && lastIndex.rankValue == (enterCard.data.rankValue - 1)
    }
  }

  checkState(){
    console.log(this.cardState)
  }

}
