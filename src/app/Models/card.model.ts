export class CardModel {
    suit: string;
    rank: string;
    isRed: boolean;
    hidden: boolean;
    rankValue: number;
}

export class TableauModel {
    piles : Array<CardModel[]>
}
export class FoundationModel {
    piles : Array<CardModel[]>
}
export class WasteModel {
    cards: Array<CardModel>
}