//
// MSET-Tools Helper Application for github oauth
//

console.log("## MSET-Helper server starting")

var myport = process.env.PORT || 3649
var myredirect = process.env.SUCCESS_REDIRECT

var githubOAuth = require('github-oauth')({
  githubClient: process.env['GITHUB_CLIENT'],
  githubSecret: process.env['GITHUB_SECRET'],
  baseURL: `http://localhost:${myport}`,
  loginURI: '/login',
  callbackURI: '/callback',
  scope: 'user' // optional, default scope is set to user
})

console.log(`## Will listen on port ${myport}`)

require('http').createServer(function(req, res) {
  if (req.url.match(/login/)) return githubOAuth.login(req, res)
  if (req.url.match(/callback/)) return githubOAuth.callback(req, res)
}).listen(myport)

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
    console.log('here is your shiny new github oauth token', token)
    serverResponse.statusCode = 302
    var u = myredirect + "?access_token=" + token.access_token
    serverResponse.setHeader('location',u)
    serverResponse.end()
})
