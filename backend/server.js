const express = require('express')
const cors = require('cors')
const env = require('dotenv')
const WordsController = require('./controllers/WordsController')
const SentenceController = require('./controllers/SentenceController')
const { connectDB } = require('./db.helper')

env.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

const dbConnection = connectDB()

app.use('/api/v1/', WordsController)
app.use("/api/v1/",SentenceController)


app.use("/*", (req, res) => {
    res.statusCode = 400;
    res.json({
        status: 400,
        error: "Invalid Endpoint!"
    })
})


app.listen(port, () => {
    // console.log(process.env.MONGO_URL)
    console.log("APP RUNNING ON "+ port)
})