const mongoose = require('mongoose');

async function connectDB(){
    try{
        const conn = await mongoose.connect(process.env.MONGOURI)
        console.log(`MongoDB connected ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}

module.exports = connectDB