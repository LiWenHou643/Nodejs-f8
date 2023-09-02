const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes/index')
const db = require('./config/db')
var methodOverride = require('method-override')

//connect to mongodb
db.connect()

//setting path for static files
app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({ 
  extname: '.hbs',
  helpers: {
    add(a,b) { return a + b }
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//override method html
app.use(methodOverride('_method'))

//Route init
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
