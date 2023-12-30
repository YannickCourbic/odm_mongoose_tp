const {model , Schema} = require("mongoose");
const {UUID} = require("mongodb");

const Category = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    reference:{
        type:String,
        required:true,
        unique:true,
        default: new UUID()
    },
    logo:{
        type:String,
        required:false,
    },
    products:[{type: Schema.Types.ObjectId, ref: "Product"}],
    createdAt:{
        type:Date,
        required:true,
        default: Date.now()
    },
    upadetedAt: {
        type:Date,
        required:false,
        default: null
    }
});


module.exports = model("Category" , Category);