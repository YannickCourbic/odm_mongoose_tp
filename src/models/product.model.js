const {model , Schema} = require("mongoose");
const {UUID} = require("mongodb");

const Product = new Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
    },
    reference:{
        type:String,
        required:true,
        unique:true,
        default: new UUID()
    },
    picture:{
        type:String,
        required:false
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    price:{
        type:Number,
        required:true,
        min:1
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        default:0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    years:{
        type:Number,
        required:true,
        min:2000
    },
    status:{
        type:String,
        required:true,
        enum:["draft" , "public" , "trash"]
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:false,
        default:null
    }
});


module.exports= model("Product" , Product);