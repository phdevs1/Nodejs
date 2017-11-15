var Clock = (function(){
	var EventEmitter = require('events').EventEmitter
	var inherits = require('util').inherits

	var Clock = function(){
		var self = this
		setInterval(function(){
			self.emit('tictac')
		},1000)
	}
	//heredando (hijo,padre)

	inherits(Clock,EventEmitter)

	Clock.prototype.theTime = function(){// metodo agregado al prototipo clock
		var date = new Date(),
			hrs = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds(),
			msg = hrs+':'+min+':'+sec
		console.log(msg)
	}
	return Clock
})()

module.exports = Clock