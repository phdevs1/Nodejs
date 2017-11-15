var Clock = require('./4_protoClock.js')
var cucu = new Clock()

cucu.on('tictac',function(){
	cucu.theTime()
})
