import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CardState, CardStateModel } from '../State/card.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Select(CardState.getCardState) cardStateObservable: Observable<CardStateModel>

  cardState: CardStateModel

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cardStateObservable.subscribe(x => this.cardState = x)
  }

  checkState(){
    console.log(this.cardState)
  }

}
