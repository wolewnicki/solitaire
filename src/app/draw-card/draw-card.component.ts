import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model'
import { CardState, CardStateModel } from '../State/card.state'
import { Suits, Ranks, IsRed, RankValues} from '../app.constants'
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { UpdateFoundation } from '../Actions/card.actions'


@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css'],
  providers: [CardState]
})
export class DrawCardComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>
  
  cardState : CardStateModel

  constructor(
    public state: CardState,
    private store: Store
    ) { }

  ngOnInit(): void {
    console.log(this.state)
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  suits = Suits
  ranks = Ranks
  isRed = IsRed
  rankValues = RankValues

  selectCard(card : CardModel, index : Array<CardModel>): void {
    console.log(card)
    console.log(index)
  }
  
  returnPredicate (): boolean {
    return true;
  }

  solitairePredicate (childCard: CdkDrag<CardModel>, parentCard: CdkDropList<CardModel>): boolean {
    if (childCard.data.isRed === parentCard.data[0].isRed){
      return false
    } else {
      return parentCard.data[0].rankValue % childCard.data.rankValue == 1
    }
  }

  setSelectedCard(card : CardModel): void {
    this.state.selectedCard = card
    console.log(this.state)
  }
  // revealHiddenCard(list: Array<CardModel>){
  //   list[0].hidden == false
  // }

  redPredicate (card : CdkDrag<CardModel>) {
    return card.data.isRed 
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  tellState(): void {
    console.log(this.cardState.foundation)
  }

  generateCard(): void {
    const suitIndex = Math.floor(Math.random() * this.suits.length)
    const rankIndex = Math.floor(Math.random() * this.ranks.length)
    const randomSuit = this.suits[suitIndex] 
    const randomRank = this.ranks[rankIndex]
    const assembledListItem = {suit: `${randomSuit}`, rank: `${randomRank}`,
                               isRed: this.isRed[randomSuit], rankValue: this.rankValues[randomRank], hidden: true}
    this.state.cards.push(assembledListItem)
  }
}