const { Router } = require('express');

// Check name of timeslot.model with Alan
const Timeslot = require('../models/timeslots.model');

const router = Router();

// A general get route to get all timeslots in the database.
// RETURN: All timeslots in the database.
router.get('/', (req, res) => {
  Timeslot.find({}, (err, tslots) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error fetching timeslots' });
    } else {
      // console.log('Timeslot: ');
      // console.log(tslots);
      res.json(tslots);
    }
  });
});

// A get route to get a user's timeslots by their email.
// REQ PARAM: The user's email
// RETURN: The requested user object if found
router.get('/:email', (req, res) => {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ error: 'No email supplied' });
  }
  Timeslot.find({ email }, (err, tslots) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error fetching timeslots' });
    } else {
      // console.log('Timeslots: ');
      // console.log(tslots);
      res.json(tslots);
    }
  });
});

// A post route to create a new timeslot.
// REQ BODY: User's available timeslots and email
// RETURNS: The newly created timeslot object
router.post('/', (req, res) => {
  const { timeslots, email } = req.body;
  if (!timeslots || !email) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  Timeslot.create({ timeslots, email}, (err, tslot) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error creating timeslot' });
    } else {
      // console.log('Timeslot created: ');
      // console.log(tslots);
      res.json(tslot);
    }
  });
});

// A put route to update a timeslot.
// REQ PARAM: User's email
// REQ BODY: User's new array of available timeslots
// RETURNS: Updated timeslot object
router.put('/:email', (req, res) => {
  const { email } = req.params;
  const { timeslots } = req.body;
  if (!email || !timeslots) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  Timeslot.findOneAndUpdate({ email }, { timeslots, userType: role }, { new: true }, (err, tslot) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error updating timeslots' });
    } else {
      // console.log('Timeslot updated: ');
      // console.log(tslots);
      res.json(tslot);
    }
  });
});

// A delete route to delete all of a user's timeslots given their email.
// REQ PARAM: User's email
// RETURNS: The deleted timeslot object
router.delete('/:email', (req, res) => {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ error: 'No email supplied' });
  }
  Timeslot.findOneAndDelete({ email }, (err, tslot) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error deleting timeslots' });
    } else {
      // console.log('Timeslots deleted: ');
      // console.log(tslots);
      res.json(tslot);
    }
  });
});

module.exports = router;
