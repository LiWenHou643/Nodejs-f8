class NewsControlller {
    // [Get] /news
    index(req, res) {
        res.render('news')
    }
    
    // [Get] /news/:slug
    show(req, res) {
        res.send('show info')
    }

}
module.exports = new NewsControlller