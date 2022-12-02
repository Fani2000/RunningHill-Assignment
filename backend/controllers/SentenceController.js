const express = require("express")
const router = express.Router()

router.get('/sentences', (req, res) => {
    res.json({
        status: 200,
        message: 'Sentences'
    })
}).post("/sentences",(req, res) => {
    res.json({
        status: 200,
        message: 'Posting sentence'
    })
})

module.exports = router;