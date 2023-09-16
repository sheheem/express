const express = require('express');
const friendsRoute = require('./routers/friends.route');
const messageRoute = require('./routers/message.route');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))


app.use((req,res,next) => {
    let start = Date.now();
    next();
    let delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: Starfield,
    })
});

app.use('/friends', friendsRoute);

app.use('/messages', messageRoute);


app.listen(3000, () => {
    console.log('app listening on port 3000...');
});