const siteRouter = require('./site')
const courseRouter = require('./course')
const meRouter = require('./me')

function route(app){
    app.use('/course', courseRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
      
}
module.exports = route

