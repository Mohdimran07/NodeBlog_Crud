const mongoose = require('mongoose');

const connectDB = async () => {
    try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`DataBase connected at ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;