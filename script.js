const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('homepage.html', (err,data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        })
    }
    else if (req.url === '/about') {
        fs.readFile('about.html', (err,data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        })
    }
    else if (req.url === '/contact-me') {
        fs.readFile('contact.html', (err,data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile('404.html', (err,data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            res.end();
        })
    }
})

server.listen(3000, () => console.log('Server running'))