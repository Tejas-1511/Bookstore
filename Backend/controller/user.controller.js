import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "User already exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10); //10 means more security... 8 canalso be used
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({
            message: "User Created Succesfully", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch ) {
            res.status(400).json({ message: "Invalid Credentials" });
        }
        else {
            res.status(200).json({
                message: "Login Succesful", user: {
                    email: user.email,
                    _id: user._id,
                }
            })
        }
    } catch (error) {
        console.log("error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};