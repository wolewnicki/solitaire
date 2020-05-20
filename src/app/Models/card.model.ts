export interface CardModel {
    suit: string;
    rank: string;
    isRed: boolean;
    rankValue: number;
    hidden: boolean;
}

export interface CdkDrag<CardModel>{
    isRed: boolean;
}