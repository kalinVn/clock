import { Component } from '@angular/core';
import { AppClock } from './app/AppClock';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	private _appClock:AppClock;
	private _events: object[] = [];	
	private _title:string ;
	private _firstName:string;
	private _lastName:string;
	private _days: Number;
	private _message: string;	
	private _counter: number;
	private _hours;
	private _minutes;
	private _seconds;
	
	constructor() {
		
		this._message = "";
		this._appClock = new AppClock();
		this._title = "Clock App";
		this._firstName = 'Kalin';
		this._lastName = 'Stanchev';
		this._counter = 0;
		this.init();
		
		
	}
	
	init(){
		this._events = this._appClock.getEvents();
		let lastEvent = this._events[this._events.length - 1];
		this._days = lastEvent.days;
		this._minutes = lastEvent.minutes;
		this._hours = lastEvent.hours;
		this._seconds = lastEvent.seconds;
		this._events = this._appClock.getEvents();
		this.lastEvent = this._events[this._events.length - 1];
		this.lastEvent.diffrInSeconds = 5000;
		this._updateSec();
	}
	
	private _updateSec() {
		let min = this._minutes;
		let hours = this._hours;
		let days = this.days;
		let seconds = this._seconds;
		
		this._events.forEach ((eventClock, index) => {
			if(this._counter >= eventClock.diffrInSeconds){
				this._message = eventClock.description;
				this._events.splice(index, 1);
			}
		});
		if(this._days <= 0 &&  this._minutes <= 0 && this._hours <= 0 && this._seconds <= 0){
			return;
		}
		if (seconds <= 0){
			this._seconds = 59;
			min--;
			if(min <= 0){
				this._minutes = 59;
				hours--;
				if(hours <= 0){
					this.hours = 24;
					this._days = 0;
				}else{
					this.hours--;
				}
			}else{
				this._minutes--;
			}
		}else{
			this._seconds--;
		}
		this._counter += 1000;
		setTimeout(() => { this._updateSec() }, 1000);
	}
  
}
