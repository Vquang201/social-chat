const express = require("express")
const app = express()
const db = require('./config')
const route = require("./routes")
require('dotenv').config()

// app.use("/images", express.static(path.join(__dirname, "public/images")));

//Connect to DB
db.connect()

// middleware xử lý boby , gửi dữ liệu lên server từ form
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



route(app)

app.listen(8000, () => {
    console.log("Backend server is running ...");
});