const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/router')
const db = require('./models')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync({ force: false })
.then(() => console.log('re-sync done'))

app.use('/', route)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})