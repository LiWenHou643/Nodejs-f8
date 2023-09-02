const mongoose = require('mongoose')
const { Schema } = mongoose
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, required: true },
    description: String,
    thumbnail: String,
    slug: String,
    videoId: { type: String, required: true },
    level: String,
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true,
});

module.exports = mongoose.model('Course', Course)
