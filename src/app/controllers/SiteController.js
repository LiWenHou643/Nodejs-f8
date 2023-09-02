const Course = require('../models/Course');
class SiteControlller {
    // [Get] /course/:slug
    index(req, res, next) {
        res.render('home')
    }
}
module.exports = new SiteControlller