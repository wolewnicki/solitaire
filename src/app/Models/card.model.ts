export interface CardModel {
    suit: string;
    rank: string;
    isRed: boolean;
}

export interface CdkDrag<CardModel>{
    isRed: boolean;
}