const express = require("express")
const route = express()
const {getAllEntry, addNewEntry, getLatestEntry} = require("../controller/timezoneController")

route.get('/', getAllEntry)
route.post('/add', addNewEntry)
route.get('/latest_entry', getLatestEntry)

module.exports = route