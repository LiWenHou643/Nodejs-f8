const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')
class CourseControlller {
    // [Get] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', { course: mongooseToObject(course) });
            })
            .catch(next)
    }

    // [Get] /course/
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('courses', { course: multipleMongooseToObject(course) })
            })
            .catch(next)
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    // [POST] /course/store
    store(req, res, next){
        const formData = req.body
        formData.thumbnail = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfXXPAlfOeyg43FbiL0-2Wy0kNZA`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
    }
    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('course/edit', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //[DELETE] /course/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds} })
                .then(() => res.redirect('back'))
                .catch(next)
              break;
            default:
              // code block
          }
    }
}
module.exports = new CourseControlller()
