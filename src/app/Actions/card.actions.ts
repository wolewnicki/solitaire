import { FoundationModel, CardModel } from '../Models/card.model'

export class UpdateFoundation {
    static type = 'UPDATE_FOUNDATION'
    constructor(public payload: CardModel) {}
}