require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500

app.get('/api/v1', (request, response) => {
    response.status(200).send({message: "timezone running"})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api/v1`);
})