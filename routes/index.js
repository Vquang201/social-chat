const authRoute = require('./auth')
const userRoute = require('./user')
const postRoute = require('./post')
const conversationRoute = require('./conversation')
const messageRoute = require('./message')


const route = (app) => {
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/posts", postRoute);
    app.use("/api/conversations", conversationRoute);
    app.use("/api/messages", messageRoute);
}

module.exports = route

