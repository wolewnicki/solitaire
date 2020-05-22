import { Component, OnInit } from '@angular/core';
import { CardModel } from '../Models/card.model'
import { State } from '../State/card.state'

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
