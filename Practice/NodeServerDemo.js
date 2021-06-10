const http = require('http')
const hero = require('superheroes')

function welcomeMessage() {
    return "Welcome to ChatSupport"
}
function heroName() {
    let randomHeroName = hero.random()
    return randomHeroName;
}
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var welcomeData = welcomeMessage()
    var HeroData = heroName()
    res.write(`<h1>${welcomeData}</h1>`)
    res.write(`<p>Hero Name: ${HeroData}</p>`)
    res.end()
}).listen(8080)