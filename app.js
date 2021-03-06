const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const debug = require('debug')('app')
const path = require('path')

const app = express()
const nav = [
    {link:'/books',title:'book'},
    {link:'/author',title:'author'}
]

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('tiny'))
app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js',express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.set('views','src/views')
app.set('view engine', 'ejs')

const bookRouter = require('./src/routes/bookRoutes')(nav)
 app.use('/books',bookRouter)
app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('index',{
        nav,
        title:"Library"
    })
})

app.listen(3000, () => {
    debug(`app run on ${chalk.default.green('3000')}`)
})
