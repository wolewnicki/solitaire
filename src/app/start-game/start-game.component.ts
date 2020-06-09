import { Component, OnInit } from '@angular/core';
import { CardModel } from '../Models/card.model'
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Observable } from 'rxjs';
import { Suits, Ranks, IsRed, RankValues } from '../app.constants'
import { UpdateFoundation } from '../Actions/card.actions';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>;

  cardState: CardStateModel
  suits = Suits
  ranks = Ranks
  isRed = IsRed
  rankValues = RankValues

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x);
  }

  generateCard(): void {
    const suitIndex = Math.floor(Math.random() * this.suits.length)
    const rankIndex = Math.floor(Math.random() * this.ranks.length)
    const randomSuit = this.suits[suitIndex] 
    const randomRank = this.ranks[rankIndex]
    const assembledListItem: CardModel = {suit: `${randomSuit}`, rank: `${randomRank}`,
                               isRed: this.isRed[randomSuit], rankValue: this.rankValues[randomRank]}
    this.store.dispatch(new UpdateFoundation(assembledListItem));
  }

}
