const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')
class MeController {
    // [Get] /me/stored/courses
    storedCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted:true })])
            .then(([course, deletedCount]) =>
                res.render('me/storedCourse', { 
                    deletedCount,
                    course: multipleMongooseToObject(course)
                })
            )
            .catch(next)
    }

    // [Get] /me/trash/courses
    trashCourse(req, res, next) {
        Course.findDeleted({})
            .then((course) => {
                res.render('me/trashCourse', { course: multipleMongooseToObject(course.filter(course => course.deleted))})
            })
            .catch(next)

    }
}
module.exports = new MeController