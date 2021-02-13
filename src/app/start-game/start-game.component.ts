import { Component, OnInit } from '@angular/core';
import { Suits, Ranks, IsRed, RankValues } from '../app.constants'
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/card.model';
import { AddWaste, AddTableau } from '../Actions/card.actions'
import { ThrowStmt } from '@angular/compiler';
import { state } from '@angular/animations';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>

  constructor(
    private store: Store
    ) { }

  suits = Suits
  ranks = Ranks
  isRed = IsRed
  rankValues = RankValues
  cardState: CardStateModel

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  shuffle(deck: Array<CardModel>){
    let currentIndex = deck.length
    let temporaryValue: CardModel
    let randomIndex: number

    while (0 !== currentIndex){

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1

      temporaryValue = deck[currentIndex]
      deck[currentIndex] = deck[randomIndex]
      deck[randomIndex] = temporaryValue
    }

    return deck
  }

  drawCards(deck: Array<CardModel>, numOfCards: number) {
    let arr = []
    for(let i = 0; i < numOfCards; i++) {
      arr.push(deck.pop())
    }

    return arr
  }

  createTableu(deck : Array<CardModel>) {
    let numOfCardsToAdd: number = 1

    this.cardState.tableau.piles.map((p, pileIndex) => {
      const cardsToAdd = this.drawCards(deck, numOfCardsToAdd)
      cardsToAdd[numOfCardsToAdd - 1].hidden = false
      cardsToAdd.forEach(card => {
        this.store.dispatch(new AddTableau(card, pileIndex))
      })   
      numOfCardsToAdd += 1
    })
  }

  startGame(){
    let deck: CardModel[] = []
    this.ranks.forEach(rank => {
      this.suits.forEach(suit => {
        deck.push({suit: `${suit}`, rank: `${rank}`, isRed : this.isRed[suit], rankValue: this.rankValues[rank], hidden: false})
      })
    })

    this.shuffle(deck)
    this.createTableu(deck)

    // deck.forEach(card => {
    //   this.store.dispatch(new AddWaste(card))
    // })
  }
  
}
