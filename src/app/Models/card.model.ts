export interface CardModel {
    suit: string;
    rank: string;
    isRed: boolean;
    rankValue: number;
}

export interface CdkDrag<CardModel>{
    isRed: boolean;
}