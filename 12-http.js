const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.ulr === '/about'){
        res.end("Here is our short history")
    }
    res.end(`
    <h1>oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href = "/">back home</a>
    `)
})

server.listen(5000)