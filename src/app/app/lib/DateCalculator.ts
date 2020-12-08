export class DateCalculator {
	
	private _diffr: int[];
	private _events: object;
	private _dateToday: Date;
	private _dateDiffr: Float;
	
	constructor() {}
	
	calculate(data){
		let seconds:Number, 
			minutes: Number,
			hours: Number,
			days: Number,
			diffrInSeconds :Float,
			diffInMilliSeconds,
			daysTest;
			this._dateToday = new Date(Date.now());
		this._diffr = [];
		this._events = {}
		data.forEach ((eventClock, index) => {
			this.dateEvent = new Date(eventClock.date);
			
			diffrInSeconds = Math.floor((this.dateEvent.getTime() - this._dateToday.getTime())/1000);
		
			diffInMilliSeconds = Math.abs(this.dateEvent.getTime() - this._dateToday.getTime()) / 1000;
			
			days = Math.floor(diffInMilliSeconds / 86400);
			diffInMilliSeconds -= days * 86400;
			
			hours = Math.floor(diffInMilliSeconds / 3600) % 24;
			diffInMilliSeconds -= hours * 3600;
			
			minutes = Math.floor(diffInMilliSeconds / 60) % 60;
			diffInMilliSeconds -= minutes * 60;
			seconds = Math.floor(Math.abs(diffInMilliSeconds));
			
			this._diffr.push({
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days,
				diffrInSeconds: diffrInSeconds,
				index: index,
				description: eventClock.description
				
			});
		});
		
		
		this._diffr.sort(function(a,b){return a.days - b.days});
		return this._diffr;
		
		
	}
	
	
	
	
}