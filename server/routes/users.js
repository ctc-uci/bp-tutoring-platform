const { Router } = require('express');
const User = require('../models/user.model');

const router = Router();

// A general get route to get all users in the database.
// RETURN: All users in the database.
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error fetching users' });
    } else {
      // console.log('Users: ');
      // console.log(users);
      res.json(users);
    }
  });
});

// A get route to get a user by their email.
// REQ PARAM: The user's email
// RETURN: The requested user object if found
router.get('/:email', (req, res) => {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ error: 'No email supplied' });
  }
  User.find({ email }, (err, users) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error fetching users' });
    } else {
      // console.log('Users: ');
      // console.log(users);
      res.json(users);
    }
  });
});

// A post route to create a new user. Password not yet implemented, feel free to implement later
// REQ BODY: User's email, name, and user type (STUDENT | TUTOR | ADMIN)
// RETURNS: The newly created user object
router.post('/', (req, res) => {
  const { email, name, role } = req.body;
  if (!email || !name || !role) {
    res.status(400).json({ error: 'Missing required fields' });
  }

  // Checks for duplicate emails
  User.find({ email }, (err, users) => {
    if (users.length) {
      // Checks to see if users is already occupied with that email
      res.status(400).json({ error: 'Duplicate emails' });
    } else {
      // Creates the user
      User.create({ email, name, role }, (err, user) => {
        if (err) {
          // console.log(err);
          res.status(400).json({ error: 'Error creating user' });
        } else {
          // console.log('User created: ');
          // console.log(user);
          res.json(user);
        }
      });
    }
  });

});

// A put route to update a user.
// REQ PARAM: User's email
// REQ BODY: User's new name and role
// RETURNS: Updated user object
router.put('/:email', (req, res) => {
  const { email } = req.params;
  const { name, role } = req.body;
  if (!email || !name || !role) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  User.findOneAndUpdate({ email }, { name, userType: role }, { new: true }, (err, user) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error updating user' });
    } else {
      // console.log('User updated: ');
      // console.log(user);
      res.json(user);
    }
  });
});

// A delete route to delete a user given their email.
// REQ PARAM: User's email
// RETURNS: The deleted user object
router.delete('/:email', (req, res) => {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ error: 'No email supplied' });
  }
  User.findOneAndDelete({ email }, (err, user) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error deleting user' });
    } else {
      // console.log('User deleted: ');
      // console.log(user);
      res.json(user);
    }
  });
});

module.exports = router;
