import User from '../model/userSchema.js';

export const home = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send("Hello, this is the auth-router folder");
    } catch (error) {
        res.status(400).send({ msg: "Error in processing request" });
    }
};

export const register = async (req, res) => {
    try {
        const { userName, email, phone, password } = req.body;

        // Check if the email already exists in the database
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Create a new user in the database
        const newUser = await User.create({ userName, email, phone, password });

        console.log(newUser); // Log the newly created user

        // Respond with the details of the created user
        res.status(201).json({ msg: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ msg: "Internal Server Error" });
    }
};
