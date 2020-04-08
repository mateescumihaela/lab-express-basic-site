const express = require ('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
response.sendFile(`${__dirname}/views/home-page.html`);
});


app.get('/work', (request, response) => {
    response.sendFile(`${__dirname}/views/work-page.html`);
    });


    app.get('/about', (request, response) => {
        response.sendFile(`${__dirname}/views/about-page.html`);
        });

app.listen(3000, () => console.log ('Running on port 3000'));