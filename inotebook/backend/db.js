const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// connectToMongo take two parameters ( mongoURI and a callback function)
const connectTOMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected Successfully')
    })
}
module.exports = connectTOMongo;