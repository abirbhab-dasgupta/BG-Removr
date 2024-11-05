import mongoose, { mongo } from "mongoose";


const uSerSchema = new mongoose.Schema({
    clerkId : {
        type:String,
        required:true,
        unique:true,
    },
    email : {
        type:String,
        required:true,
        unique:true,
    },
    photo : {
        type:String,
        required:true,
    },
    firstName : {
        type:String,
    },
    lastName : {
        type:String,
    },
    creditBalance: {
        type:Number,
        default:5,
    },


}) 


const userModel = mongoose.models.user || mongoose.model("user",uSerSchema)

export default userModel;