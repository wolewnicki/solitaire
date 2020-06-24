import { FoundationModel, CardModel, TableauModel } from '../Models/card.model'

export class UpdateFoundation {
    static type = 'UPDATE_FOUNDATION'
    constructor(public payload: CardModel) {}
}

export class AddWaste {
    static type = 'ADD_WASTE'
    constructor(public payload: CardModel) {}
}

export class AddTableau {
    static type = 'ADD_TABLEAU'
    constructor(public payload: CardModel, public xAxis: number) {}
}