// Cars and Cats - Tom Compton

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
var url = require('url');

// creating a server using http module:
var server = http.createServer(function (request, response) {
    const adr = url.parse(request.url, true);
    const filename = adr.pathname;
    if (filename === '/cars') {
        serveHTML('cars.html', response);
    }
    if (filename === '/cars/new') {
        serveHTML('new.html', response);
    }
    if (filename === '/cats') {
        serveHTML('cats.html', response);
    }
    if (filename === '/images/cat1.jpeg') {
        serveImage('cat1.jpeg', response);
    }
    if (filename === '/images/cars1.png') {
        serveImage('cars1.png', response);
    }
});

function serveHTML(page, response) {
    fs.readFile(`views/${page}`, 'utf8', function(error, contents) {
        if (error) {return serve404(response)}
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    })
}

function serveImage(img, response) {
    fs.readFile(`images/${img}`, function(error, contents) {
        response.writeHead(200, {'Content-Type': 'image/*'});
        response.write(contents);
        response.end();
    })
}

function serve404(response) {
    response.writeHead(404);
    response.end('File not found!');
}

server.listen(7077);
console.log('Running on 7077');