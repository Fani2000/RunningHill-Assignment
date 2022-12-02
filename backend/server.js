const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

app.get("/api/v1/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

app.listen(port, () => {
    console.log("APP RUNNING ON "+port)
})