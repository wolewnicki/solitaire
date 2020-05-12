import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generateCard() {
    const suitIndex = Math.floor(Math.random() * this.suits.length)
    const rankIndex = Math.floor(Math.random() * this.ranks.length)
    const suit = this.suits[suitIndex] 
    const rank = this.ranks[rankIndex]
    const assembledListItem = {suit: `${suit}`, rank: `${rank}`}
    this.cards.push(assembledListItem)
  }

  suits: string[] = ['♥','♦','♠','♣']
  ranks: any[] = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

  cards = [
    { suit: '♥', rank: 'K'},
  ]

}
