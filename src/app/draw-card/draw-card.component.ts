import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model'
import { State } from '../State/card.state'

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
  
  returnPredicate () {
    return true;
  }

  setSelectedCard(card : CardModel) {
    this.state.selectedCard = card
    console.log(this.state)
  }
  revealHiddenCard(list: Array<CardModel>){
    list[0].hidden == false
  }

  redPredicate (card : CdkDrag<CardModel>) {
    return card.data.isRed 
  }
  solitairePredicate (card : CdkDrag<CardModel>) {
    const parentCard = this.data[0]
    const childCard = card.data
    if (parentCard.isRed === childCard.isRed){
      return false;
    } else {
      return parentCard.rankValue % childCard.rankValue == 1
    }
  }


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  selectCard (card : CardModel, index: number) {
    console.log(card)
    console.log(index)
  }

  generateCard() {
    const suitIndex = Math.floor(Math.random() * this.state.suits.length)
    const rankIndex = Math.floor(Math.random() * this.state.ranks.length)
    const randomSuit = this.state.suits[suitIndex] 
    const randomRank = this.state.ranks[rankIndex]
    const assembledListItem = {suit: `${randomSuit}`, rank: `${randomRank}`,
                               isRed: this.state.isRed[randomSuit], rankValue: this.state.rankValues[randomRank], hidden: true}
    this.state.cards.push(assembledListItem)
  }
}
