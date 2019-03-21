const request = require('superagent')

const url = 'http://localhost:3000/fruits.json'
request.get(url).end(callbackGet)

function callbackGet(err, res) {
    if (err) {
        console.log(err);
        return
    }

    console.log(res.body)
}