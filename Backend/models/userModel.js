import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    fullname:{type:String, required:true},
    gender : {type:String, required:true},
    DOB:{type:String, required:true},
    Country : {type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;