const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const res = await mongoose.connect(process.env.MONGO_URl)
        console.log(res)
        return res;
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    connectDB,
}