const express = require('express');
const path = require('path')
const port = 3030

const app = express();

const router = express.Router();
app.use(router)

router.get('/', (req, res) => {
    res.send('Hello World from Root!')
})

app.listen(port, () => {
    console.log()
})