const express = require('express')
const app = express()
app.use(express.json())


const port = 3000


const items = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item1'},
    {id: 3, name: 'item1'}
]

app.get('/items', (req, res) => {
    res.send(items)
})

app.get('/items/:id', (req, res) => {
    const item = items.find(c => c.id === parseInt(req.params.id))
    if (!item) res.status(404).send('Item with the given id was not found')
    res.send(item)
})

app.post('/items/', (req, res) => {
    const item = {
        id: items.length + 1,
        name: req.body.name
    }
    items.push(item);
    res.send(item);
});

app.listen(port)