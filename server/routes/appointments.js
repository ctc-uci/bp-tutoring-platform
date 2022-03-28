const { Router } = require('express');
const Appointment = require('../models/appointment.model');

const router = Router();

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

module.exports = router;
