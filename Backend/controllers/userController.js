import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


// route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){         
            const token = createToken(user._id);
            res.json({success: true, token});
        }
        else{
            res.json({success: false, message: 'Invalid Credentials'});
        }

    }
    catch(err){
        console.log(err);
        res.json({success:false,message: err.message});
    } 
}

// route for user registration
const registerUser = async (req, res) => {
    try{
        const { username,fullname,gender,DOB,Country, email, password } = req.body;
        // checking user already exists or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: 'User already exists'});
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: 'Invalid Email'});
        }

        if(password.length < 8){
            return res.json({success: false, message: 'Please Enter Strong Password'});
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            username,
            fullname,
            gender,
            DOB,
            Country,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({success: true, token});

    }
    catch(err){
        res.json({success:false,message: err.message});
    }
}

const searchUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        if (!username && !email) {
            return res.status(400).json({ success: false, message: "Provide a username or email to search." });
        }

        let body = {};
        if (username) body.username = username;
        if (email) body.email = email;

        const user = await userModel.findOne(body).select("-password"); 

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};



export { loginUser, registerUser, searchUser};