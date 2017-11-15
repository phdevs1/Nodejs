var stdin = process.stdin
var stdout = process.stdout
var person = {
	name : null,
	age : 0
}

function saveAge(age){
	person.age = age
	if (person.age >= 18) {
		stdout.write(person.name + ' es nayor de edad, tiene ' + person.age + ' años\n')
	}
	else{
		stdout.write(person.name + ' es menosr de edad, tiene ' + person.age + ' años\n')
	}
	process.exit()
}
function saveName(name){
	person.name = name
	var question = 'hola ' + person.name + '¿cuantos años tienes?'
	quiz(question,saveAge)
}
function quiz(question,callback){
	stdin.resume()
	stdout.write(question + ': ')

	stdin.once('data',function(res){
		callback(res.toString().trim())
	})
}
stdin.setEncoding('utf8')
quiz('¿como te llamas?',saveName)