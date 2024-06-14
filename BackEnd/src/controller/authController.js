var User = require('../Models/userModel');
var bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        var user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.signin = async (req, res) => {
    try {
        var user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }
        var isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        // Create a session
        req.session.user = { id: user._id, username: user.username };
        res.send({ user: user.username });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.signout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send({ message: 'Failed to sign out' });
        }
        res.send({ message: 'Sign out successful' });
    });
};
