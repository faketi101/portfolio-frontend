const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.status(200).json({success: true, message:"server is running preperly :)"})
})

app.listen(Port, () => console.log(`Express server running at Port ${Port}`));
