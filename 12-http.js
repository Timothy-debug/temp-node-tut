const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    // console.log(req);
    if(req.url === '/about'){
        res.end('Here is our shop history')
    }
    res.end(`
        <h1>Ooops!</h1>
    <p> We can't seem to see the page you are looking for</p>
    <a href="/"> back to home page</a>
        `)
})

server.listen(4000)