const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Register user:', req.body); // Log request body

    try {
        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();
        console.log('User saved:', newUser); // Log saved user

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error.message); // Log error message
        if (error.code === 11000) {
            // Duplicate email
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: error.message });
    }
};
