import { CardModel, TableauModel, FoundationModel, WasteModel } from '../Models/card.model';
import { IsRed, RankValues } from '../app.constants';
import { State, Selector, Action, StateContext } from '@ngxs/store'
import { UpdateFoundation, AddWaste, AddTableau } from '../Actions/card.actions';
import { Injectable } from '@angular/core';

export class CardStateModel {
    tableau : TableauModel 
    foundation: FoundationModel
    waste: Array<CardModel> 
}

@State<CardStateModel>({
    name: 'card',
    defaults: {
        tableau: {
            piles: [ [], [], [], [], [], [], [] ]
        },
        foundation: {
            piles: [ [], [], [], [] ]
        },
        waste: [], 
    }
})

@Injectable()
export class CardState {
    @Selector()
    static getCardState(state: CardStateModel){
        return state
    }

    @Action(AddWaste)
    addWaste({getState, patchState}: StateContext<CardStateModel>, {payload}: AddWaste){
        const state = getState()
        patchState({
            waste: [...state.waste, payload]
        })
    }

    @Action(AddTableau)
    addTableau({getState, patchState}: StateContext<CardStateModel>, {payload, xAxis}: AddTableau){
        const state = getState()
        patchState({
            tableau: {
                piles: state.tableau.piles.map((pile, index) => {
                    if (index !== xAxis) return pile

                    return [...pile, payload]
                })
            }
        })
    }
    isRed = IsRed
    rankValues = RankValues

    selectedCard: CardModel

    cards: Array<CardModel> = [
        { suit: '♥', rank: 'J', isRed: this.isRed['♥'], rankValue: this.rankValues['J'], hidden: false},
        { suit: '♠', rank: 'J', isRed: this.isRed['♠'], rankValue: this.rankValues['J'], hidden: false},
        { suit: '♦', rank: '9', isRed: this.isRed['♦'], rankValue: this.rankValues['9'], hidden: false}
    ]
    redCards : Array<CardModel> = [
        { suit: '♦', rank: 'Q', isRed: this.isRed['♦'], rankValue: this.rankValues['Q'], hidden: false},
        { suit: '♥', rank: '10', isRed: this.isRed['♥'], rankValue: this.rankValues['10'], hidden: false},
    ]

}