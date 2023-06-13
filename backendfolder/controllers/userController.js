const User = require('../models/User');

// Handle User create on POST.
exports.user_register = function(req, res) {
    User.create(req.body, function(err, user) {
        if (err) return res.status(500).send(err);
        res.status(200).send(user);
    });
};

// Handle User login on POST.
exports.user_login = function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send("No user found.");
        
        // use hash passwords in production Not done yet MB
        if (user.password === req.body.password) {
            res.status(200).send(user);
        } else {
            res.status(401).send("Password is incorrect.");
        }
    });
};

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};

// Handle User delete on DELETE.
exports.user_delete = function(req, res) {
    let id = req.params.id;
    User.findByIdAndRemove(id, function(err) {
        if (err) return res.status(500).send(err);
        res.status(200).send("User deleted successfully.");
    });
};

// Handle User update on PUT.
exports.user_update = function(req, res) {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};
