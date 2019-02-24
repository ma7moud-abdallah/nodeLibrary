const router = require('express').Router()

function bookRouter(nav){

    router.route('/')
    .get((req,res) => {
        res.render('books',{
            nav,
            title:'Library'
        })

    })

    return router
}

module.exports = bookRouter