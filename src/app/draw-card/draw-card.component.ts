import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model'
import { State } from '../State/state'

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

  redPredicate (card : CdkDrag<CardModel>) {
    return card.data.isRed 
  }
  solitairePredicate (card : CardModel) {
    debugger
    console.log(this.state.redCards)
    const parentCard = this.state.redCards[0].rank
    const childCard = card.rank
    // if (card.data.isRed === this.redCards[0].isRed){
    //   return false;
    // } else {
      return this.state.rankValues[parentCard] % this.state.rankValues[childCard] == 1
    // }
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
    const assembledListItem = {suit: `${randomSuit}`, rank: `${randomRank}`, isRed: this.state.isRed[randomSuit]}
    this.state.cards.push(assembledListItem)
  }
}
