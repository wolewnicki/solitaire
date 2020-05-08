import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common"
import { element } from 'protractor';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  buttonColor : boolean;
  selectedItem: object;
  selectedItemName: string;
  testVariable: string = "hello world!"
  date: Date = new Date();
  simpleDate: string;

  changeBool() {
    this.buttonColor ? this.buttonColor = false : this.buttonColor = true;
  }

  initiateDate() {
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
  updateDate(){
    this.date = new Date();
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
  constructor(private datePipe: DatePipe) { }

  selectData(item: any) {
    this.selectedItem = item;
    this.selectedItemName = item.name;
  }

  ngOnInit(): void {
    this.initiateDate()
  }

  discount = 20;
  items: any[] = [
    { id: 1, name: 'iPhone X', desc: 'Refurbished iPhone X 2019', price: 399 },
    { id: 2, name: 'iPhone 11 Pro', desc: 'The latest iPhone series', price: 1099 },
    { id: 3, name: 'Samsung S20', desc: 'The latest Samsung Galaxy S series in 2020', price: 1199 },
    { id: 4, name: 'Asus ROG Phone 2', desc: 'The gaming phone from Asus', price: 599 },
    { id: 5, name: 'Nokia 9', desc: 'The latest Nokia phone in 2020', price: 799 },
  ];
}
