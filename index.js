const path = require('path');
const express = require('express');
const request = require('request');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/dnbnedestatus', (req, res) => {
    request('http://www.erdnbnede.no/dnbstatus', (err, response, body) => {
        if (err || !response || !body) {
            return res.json({ up: false });
        }
        if (response.statusCode !== 200) {
            return res.json({ up: false });
        }
        if (body.includes('domeneshop.no')) {
            return res.json({ up: false });
        }
        return res.json({ up: true });
    })
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});
