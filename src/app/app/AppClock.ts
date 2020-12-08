import { DateCalculator } from './lib/DateCalculator';
import { EVENTS } from './config/Config';


export class AppClock {
	
	
	private _dateCalculator: DateCalculator;
	
	constructor() {
		this._dateCalculator = new DateCalculator();
		
	}
	
	getEvents(){
		let diffrEventDatesSeconds = this._dateCalculator.calculate(EVENTS);
		return diffrEventDatesSeconds;
	}
	
	
}