const moment = require("moment-timezone")
const timezoneModel = require("../model/timezoneModel")

let utcConvertedStart = ""
let utcConvertedEnd = ""
const convertUtcTimezone = (startDate, endDate, timezone) => { 
    utcConvertedStart = moment.tz(startDate,"YYYY-MM-DDTHH:mm:ss", timezone ).utc().format("DD-MM-YYYY HH:mm")
    utcConvertedEnd = moment.tz(endDate, "YYYY-MM-DDTHH:mm:ss", timezone).utc().format("DD-MM-YYYY HH:mm")
    console.log(utcConvertedStart, utcConvertedEnd);
    return { utcConvertedStart, utcConvertedEnd}
}

const convertTimeZone = (start, end, timezone) => {
    let convertedStart = moment.tz(start, timezone).format('DD-MM-YYYY HH:mm');
    let convertedEnd = moment.tz(end, timezone).format('DD-MM-YYYY HH:mm');
    return { convertedStart, convertedEnd };
}

const convertTimezoneMiddleware = async(request, response) => {
    const userData =  await timezoneModel.findOne().sort({createdAt: -1})
    try{
        convertUtcTimezone(userData.startDate, userData.endDate, userData.timezone)
        const finalConvertedIST = convertTimeZone(utcConvertedStart, utcConvertedEnd, "Asia/Kolkata")
        const finalConvertedJST = convertTimeZone(utcConvertedStart, utcConvertedEnd, "Asia/Tokyo")
        const finalConvertedGMT = convertUtcTimezone(userData.startDate, userData.endDate, userData.timezone)
        const finalConvertedPacific = convertTimeZone(utcConvertedStart, utcConvertedEnd, "America/Los_Angeles")
        response.status(200).send({IST: finalConvertedIST, JST: finalConvertedJST, GMT: finalConvertedGMT, Pacific: finalConvertedPacific})
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}

module.exports = convertTimezoneMiddleware