export class CardModel {
    suit: string;
    rank: string;
    isRed: boolean;
    rankValue: number;
}

export class TableauModel {
    cards: Array<CardModel> 
}
export class FoundationModel {
    card : CardModel
}
export class WasteModel {
    cards: Array<CardModel>
}