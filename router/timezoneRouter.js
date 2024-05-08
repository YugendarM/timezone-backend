const express = require("express")
const route = express()
const {getAllEntry, addNewEntry, getLatestEntry} = require("../controller/timezoneController")
const convertTimezoneMiddleware = require("../middlewares/convertTimezone")

route.get('/', getAllEntry)
route.post('/add', addNewEntry)
route.get('/latest_entry', convertTimezoneMiddleware,  getLatestEntry)

// route.param



module.exports = route