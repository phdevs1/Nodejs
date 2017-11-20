class Clock
{
	constructor(){
		setInterval(()=>{
			this.theTime()
		},1000)
	}
	theTime(){
		var date = new Date(),
			hrs = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds(),
			msg = hrs+':'+min+':'+sec
		console.log(msg)
	}
}
module.exports = Clock