var express = require('express')
var router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.post('/handle-form-actions', courseController.handleFormActions)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)
router.patch('/:id/restore', courseController.restore)
router.get('/:slug', courseController.show)
router.get('/', courseController.index)

module.exports = router
