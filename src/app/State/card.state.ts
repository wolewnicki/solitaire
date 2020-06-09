import { CardModel, TableauModel, FoundationModel, WasteModel } from '../Models/card.model';
import { IsRed, RankValues } from '../app.constants';
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { UpdateFoundation } from '../Actions/card.actions';

export class CardStateModel {
    tableau : Array<CardModel> 
    foundation: Array<CardModel>
    waste: Array<CardModel> 
}

@State<CardStateModel>({
    name: 'card',
    defaults: {
        tableau: [],
        foundation: [],
        waste: [], 
    }
})

export class CardState {
    @Selector()
    static getCardState(state: CardStateModel){
        return state
    }

    @Action(UpdateFoundation)
    updateFoundation({getState, patchState}: StateContext<CardStateModel>, {payload}: UpdateFoundation) {
        const state = getState()
        patchState({
            foundation: [...state.foundation, payload]
        })
    }


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

}