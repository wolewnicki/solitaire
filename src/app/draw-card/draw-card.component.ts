import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { CardModel } from '../Models/card.model'

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }
  
  returnPredicate () {
    return true;
  }

  redPredicate (card : CdkDrag<CardModel>) {
    return card.data.isRed 
  }
  solitairePredicate (card : CdkDrag<CardModel>) {
    const parentCard = this.redCards[0].rank
    const childCard = card.data.rank
    // if (card.data.isRed === this.redCards[0].isRed){
    //   return false;
    // } else {
      return this.rankValues[parentCard] % this.rankValues[childCard] == 1
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
  
  selectCard (card : CardModel) {
    this.cards.findIndex(card)
  }

  generateCard() {
    const suitIndex = Math.floor(Math.random() * this.suits.length)
    const rankIndex = Math.floor(Math.random() * this.ranks.length)
    const randomSuit = this.suits[suitIndex] 
    const randomRank = this.ranks[rankIndex]
    const assembledListItem = {suit: `${randomSuit}`, rank: `${randomRank}`, isRed: this.isRed[randomSuit]}
    this.cards.push(assembledListItem)
  }

  suits: string[] = ['♥','♦','♠','♣']
  ranks: any[] = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  isRed = {
  '♥' : true,
  '♦' : true,
  '♠' : false,
  '♣' : false
}
rankValues = {
  'A'  : 1,
  '2'  : 2,
  '3'  : 3,
  '4'  : 4,
  '5'  : 5,
  '6'  : 6,
  '7'  : 7,
  '8'  : 8,
  '9'  : 9,
  '10' : 10,
  'J'  : 11,
  'Q'  : 12,
  'K'  : 13
}
    cards: Array<CardModel> = [
    { suit: '♥', rank: 'J', isRed: this.isRed['♥']},
    { suit: '♠', rank: 'J', isRed: this.isRed['♠']},
    { suit: '♦', rank: '9', isRed: this.isRed['♦']}
  ]

    redCards : Array<CardModel> = [
    { suit: '♦', rank: 'Q', isRed: this.isRed['♦']},
    { suit: '♥', rank: '10', isRed: this.isRed['♥']},
  ]

}
