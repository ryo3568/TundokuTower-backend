
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    publisher: String,
    image: String,
    email: String,
})

exports.ItemModel = mongoose.model("Item", ItemSchema)