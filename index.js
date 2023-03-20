
const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const connectDB = require("./utils/database")
const { ItemModel } = require("./utils/schemaModels")


// ITEM functions
// Create Item
app.post("/item/create", async(req, res) => {
    try{
        await connectDB()
        await ItemModel.create(req.body)
        return res.status(200).json({message: "アイテム作成成功"})
    }catch(err){
        return res.status(400).json({message: "アイテム作成失敗"})
    }
})

// Read All Items
app.get("/", async(req, res) => {
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return res.status(200).json({message: "アイテム読み取り成功(all)", allItems: allItems})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗(all)"})
    }
})

// Read Single Item
app.get("/item/:id", async(req, res) => {
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(req.params.id)
        return res.status(200).json({message: "アイテム読み取り成功(single)", singleItem: singleItem})
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗(single)"})
    }
})

// Update Item
app.put("/item/update/:id", async(req, res) => {
    try{
        await connectDB()
        await ItemModel.updateOne({_id: req.params.id}, req.body)
        return res.status(200).json({message: "アイテム編集成功"})
    }catch(err){
        return res.status(400).json({message: "アイテム編集失敗"})
    }
})

// Delete Item
app.delete("/item/delete/:id", async(req, res) => {
    try{
        await connectDB()
        await ItemModel.deleteOne({_id: req.params.id})
        return res.status(200).json({message: "アイテム削除成功"})
    }catch(err){
        return res.status(400).json({message: "アイテム削除失敗"})
    }
})

// USER functions
// Register User
// Login User

app.listen(5000, () => {
    console.log("Listening on localhost port 5000")
})