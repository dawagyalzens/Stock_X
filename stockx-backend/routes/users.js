const router = require('express').Router();
let User = require('../models/user.model');

// Lists all the user..
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Adds a user..
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password
    });

    newUser.save()
        .then(() => res.json('User Added..'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Updates a user..
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;

            user.save()
                .then(() => res.json("User Updated.."))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes a user..
router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted..'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Registration of user..

module.exports = router;