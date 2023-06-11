const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern-chat-app')
        console.log('Connect DB ....')
    } catch (error) {
        console.log('Lỗi DB :', error)
    }

}

module.exports = { connect }