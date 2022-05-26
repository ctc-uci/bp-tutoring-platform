const { Router } = require('express');
const Appointment = require('../models/appointment.model');

const router = Router();

// This set of routes has the basic Create/Read/Update/Delete functionality
// but may not be complete. Feel free to add routes as needed

// A general get route to get all appointments in the database.
// RETURN: All appointments in the database.
router.get('/', (req, res) => {
  Appointment.find({}, (err, appts) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error fetching users' });
    } else {
      // console.log('Appointments: ');
      // console.log(appts);
      res.json(appts);
    }
  });
});

// A post route to create a new appointment.
// REQ BODY: Tutor email, student email, start time and end time (in seconds after epoch), appointment note optional
// RETURNS: The newly created appointment object
router.post('/', (req, res) => {
  const { startTime, endTime, note } = req.body;
  console.log(req.body);
  if (!startTime || !endTime || !note) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  Appointment.create({ startTime, endTime, note }, (err, appt) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error creating appointment' });
    } else {
      // console.log('Appointment created: ');
      // console.log(appt);
      res.json(appt);
    }
  });
});

// A put route to update an appointment
// REQ BODY: The old appointment info (under an "old" object) to find the appointment in the db,
//           the new appointment info (under a "new" object) to update a found appointment
// RETURNS: Updated appointment object
router.put('/', (req, res) => {
  const { startTime, endTime } = req.body.old;
  const { startTime: newStartTime, endTime: newEndTime, note: newNote } = req.body.updated;
  if (!startTime || !endTime) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  Appointment.findOneAndUpdate(
    { startTime, endTime },
    {
      startTime: newStartTime,
      endTime: newEndTime,
      note: newNote,
    },
    { new: true },
    (err, appt) => {
      if (err) {
        // console.log(err);
        res.status(400).json({ error: 'Error updating appointment' });
      } else {
        // console.log('Appointment updated: ');
        // console.log(appt);
        res.json(appt);
      }
    },
  );
});

// A delete route to delete an appointment.
// REQ BODY: Appointment's info (tutor email, student email, startTime and endTime (in seconds after epoch))
// RETURNS: The deleted appointment object
router.delete('/', (req, res) => {
  const { startTime, endTime } = req.body;
  if (!startTime || !endTime) {
    res.status(400).json({ error: 'Missing required fields' });
  }
  Appointment.deleteOne({ startTime, endTime }, (err, appt) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Error deleting appointment' });
    } else {
      // console.log('Appointment deleted: ');
      // console.log(appt);
      res.json(appt);
    }
  });
});

module.exports = router;
