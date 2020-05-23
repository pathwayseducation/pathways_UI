const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    bio: {type: String, required: true},
    opportunities: [[{type: Schema.Types.ObjectId}]],
    postIds: [{type: Schema.Types.ObjectId}],
    education: {type: String, required: true},
    classOf: {type:Number, required: true},
    friendIds: [{type: Schema.Types.ObjectId}]
}, {collection: 'users'});

const categorySchema = new Schema({
    name: {type: String, required: true},
    subcategories: [{type: Schema.Types.ObjectId}],
    supercategory: {type: Schema.Types.ObjectId}
}, {collection: 'categories'});

const opportunitySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
}, {collection: 'opportunities'});

const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = {
    User,
    Category
};
