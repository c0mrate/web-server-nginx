var express = require('express');
var app = express();
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log(`server listening on port ${port}`))