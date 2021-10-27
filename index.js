const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('WOW ! i am excited for my First Node practise with nodemon')
})

const users = [
    { id: 0, name: 'Shabana', email: 'sbana@tgmail.com', phone: '019458230' },
    { id: 1, name: 'Srabont', email: 'Srabont@tgmail.com', phone: '019458230' },
    { id: 2, name: 'Suchurita', email: 'Suchurita@tgmail.com', phone: '019458230' },
    { id: 3, name: 'Soniya', email: 'Soniya@tgmail.com', phone: '019458230' },
    { id: 4, name: 'Susmita', email: 'Susmita@tgmail.com', phone: '019458230' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send("inside post")
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port)
})