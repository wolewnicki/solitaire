import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Drop } from '../app.constants'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>

  cardState: CardStateModel
  drop = Drop

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  returnPredicate (): boolean {
    return true
  }

  checkState(){
    console.log(this.cardState)
  }

}
