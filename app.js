require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500
const timezoneRoute = require("./router/timezoneRouter")
const mongoose  = require('mongoose')
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get('/api/v1', (request, response) => {
    response.status(200).send({message: "timezone running"})
})

app.use('/api/v1/timezone', timezoneRoute)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api/v1`);
})