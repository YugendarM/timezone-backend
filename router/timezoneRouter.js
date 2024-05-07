const express = require("express")
const route = express()
const {getAllEntry, addNewEntry} = require("../controller/timezoneController")

route.get('/', getAllEntry)

route.post('/add', addNewEntry)

module.exports = route