import { CardModel } from '../Models/card.model';
import { IsRed, RankValues } from '../app.constants';

export class State {
    isRed = IsRed
    rankValues = RankValues

    selectedCard: CardModel

    cards: Array<CardModel> = [
        { suit: '♥', rank: 'J', isRed: this.isRed['♥'], rankValue: this.rankValues['J']},
        { suit: '♠', rank: 'J', isRed: this.isRed['♠'], rankValue: this.rankValues['J']},
        { suit: '♦', rank: '9', isRed: this.isRed['♦'], rankValue: this.rankValues['9']}
    ]
    redCards : Array<CardModel> = [
        { suit: '♦', rank: 'Q', isRed: this.isRed['♦'], rankValue: this.rankValues['Q']},
        { suit: '♥', rank: '10', isRed: this.isRed['♥'], rankValue: this.rankValues['10']},
    ]
    deck : Array<CardModel> = []

}