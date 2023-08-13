class SiteControlller {
    // [Get] /
    index(req, res) {
        res.render('home')
    }
    
    // [Get] /search
    search(req, res) {
        res.send('searching info')
    }

}
module.exports = new SiteControlller