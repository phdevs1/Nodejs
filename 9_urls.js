var http = require('http').createServer(webServer)
var path = require('path')
var url = require('url')
var urls =[ //es un arreglo de objectos {}
		{
			id : 1,
			route : '',// no va '/' porq basename solo te corta la ultima cadena
			output : '<h2>Home</h2>'
		},
		{
			id : 2,
			route : 'acerca',
			output : '<h2>Acerca</h2>'
		},
		{
			id : 3,
			route : 'contacto',
			output : '<h2>contacto</h2>'
		}
	]
function webServer (req,res){
	var message = '<h1>hola nodejs</h1>',//basename->te da el ultimo nombre de una url
		pathUrl = path.basename(req.url) //req.url ->teda   /final
		id = url.parse(req.url,true).query.id
						//parse toma una cadena de url y regresa un objeto, si es true
						// se invoca al query string
						// el query-> te permite analizar los parametros q se pasa atraves de la url

	console.log(pathUrl)
	urls.forEach(function(pos){
		if (pos.route == pathUrl) {
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(message + pos.output)
		}
	})
	if (!res.finished) {
		res.writeHead(404,{'Content-Type':'text/html'})
		res.end('<h1>error 404 : page not found</h1>')
	}

}

http.listen(3000)
console.log('run server in port 3000')