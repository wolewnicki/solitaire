import { CardModel } from '../Models/card.model';

export class State {
    selectedCard: CardModel
    suits: string[] = ['♥','♦','♠','♣'] 
    ranks: string[] = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    isRed: { [key: string] : boolean } = {
        '♥' : true,
        '♦' : true,
        '♠' : false,
        '♣' : false
    }
    rankValues: { [key: string] : number } = {
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
        { suit: '♥', rank: 'J', isRed: this.isRed['♥'], rankValue: this.rankValues['J'], hidden: true},
        { suit: '♠', rank: 'J', isRed: this.isRed['♠'], rankValue: this.rankValues['J']},
        { suit: '♦', rank: '9', isRed: this.isRed['♦'], rankValue: this.rankValues['9']}
    ]
    redCards : Array<CardModel> = [
        { suit: '♦', rank: 'Q', isRed: this.isRed['♦'], rankValue: this.rankValues['Q']},
        { suit: '♥', rank: '10', isRed: this.isRed['♥'], rankValue: this.rankValues['10']},
    ]
}