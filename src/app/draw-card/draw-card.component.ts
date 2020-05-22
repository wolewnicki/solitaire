import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model'
import { State } from '../State/card.state'
import { Suits, Ranks, IsRed, RankValues} from '../app.constants'


@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css'],
  providers: [State]
})
export class DrawCardComponent implements OnInit {

  constructor(public state: State) { }

  ngOnInit(): void {
    console.log(this.state)
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