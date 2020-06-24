import { Component, OnInit } from '@angular/core';
import { Suits, Ranks, IsRed, RankValues } from '../app.constants'
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/card.model';
import { AddWaste, AddTableau } from '../Actions/card.actions'
import { ThrowStmt } from '@angular/compiler';

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

  createTableu(deck : Array<CardModel>, numOfLists: number){
    let i = 0
    let j = 0 
    let numOfCardsToAdd: number = 1

    while(i < numOfLists) {
      deck.forEach(card => {
        while(j < numOfCardsToAdd){
          this.store.dispatch(new AddTableau(card, i))
          j++
        }
      })

      i++
      numOfCardsToAdd++
    }
  }

  startGame(){
    let deck: CardModel[] = []
    this.ranks.forEach(rank => {
      this.suits.forEach(suit => {
        deck.push({suit: `${suit}`, rank: `${rank}`, isRed : this.isRed[suit], rankValue: this.rankValues[rank]})
      })
    })

    this.shuffle(deck)
    this.createTableu(deck, 7)

    // deck.forEach(card => {
    //   this.store.dispatch(new AddWaste(card))
    // })
  }
  
}
