const request = require('superagent');
const express = require('express');
const app = express();

const PORT = 3000;

// Web server
app.use('/', express.static('public'));

app.get('/v1/advice/random', async (req, res) => {
    const advice = await request.get('https://api.adviceslip.com/advice')
        .then(res => {
            const data = JSON.parse(res.text);
            return {message: data.slip.advice};
        })
        .catch(err => {
            return {err};
        });
    res.send(advice);
});

app.get('/v1/advice/search/:query', async (req, res) => {
    const advice = await request.get(`https://api.adviceslip.com/advice/search/${req.params.query}`)
        .then(res => {
            const data = JSON.parse(res.text);
            if (Array.isArray(data.slips)) {
                return {message: data.slips[0].advice};
            } else {
                throw new Error();
            }
        })
        .catch(err => {
            return {err};
        });

    res.send(advice);
});

app.listen(PORT, () => {
    console.log(`Listening op port :${PORT}`)
});

