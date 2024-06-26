const timezoneModel = require("../model/timezoneModel")

const getAllEntry = async(request, response) => {
    try{
        const timezoneData = await timezoneModel.find()
        response.status(200).send(timezoneData)
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}

const addNewEntry = async(request, response) => {
    const userData = request.body
    try{
        const newEntry = await timezoneModel.create(userData)
        response.status(200).send({message: "Entry added successfully"})
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}

const getLatestEntry = async(request, response) => {
    try{
        const timezoneData = await timezoneModel.findOne().sort({createdAt: -1})
        response.status(200).send(timezoneData)
    }
    catch(error){
        response.status(500).send({message: error.message})
    }
}

module.exports = {addNewEntry, getAllEntry, getLatestEntry}

