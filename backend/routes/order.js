const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message : "Your orders as been fetched"
    })
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        message : "Your orders as been created"
    })
});

module.exports = router;