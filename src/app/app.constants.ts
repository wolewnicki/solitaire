import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop'
import { CardModel } from './Models/card.model'
import { CardComponent } from './card/card.component'

export const Suits: string[] = ['♥','♦','♠','♣'] 

export const Ranks: string[] = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

export const IsRed: { [key: string] : boolean } = {
        '♥' : true,
        '♦' : true,
        '♠' : false,
        '♣' : false
    }

export const RankValues: { [key: string] : number } = {
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
export function Drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
}