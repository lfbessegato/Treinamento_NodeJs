const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('<h1>Hello World!</h1>')
    if (request.url === '/'){
        response.write('<h1>Pagina Principal</h1>')
    }else if (request.url === '/bemvindo'){
        response.write('<h1>Bem-vindo :) </h1>')
    }else {
        response.write('<h1> Pagina nao encontrada :( </h1>')
    }
    response.end();
});
server.listen(3000, () => {
    console.log('Servidor Hello World rodando...')
})
