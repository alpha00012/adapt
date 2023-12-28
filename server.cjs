const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { fullName, email, role, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'walaeddine.riahi@ieee.org',
    subject: `New ${role} registration from ${fullName}`,
    text: `Message: ${message}\nName: ${fullName}\nEmail: ${email}\nRole: ${role}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent', info });
  });
});

const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Express !');
});
app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

