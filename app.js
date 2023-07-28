const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (if needed)
// app.use(express.static('public'));

// Route to handle the form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter for sending emails (Gmail example)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ma6530028@gmail.com', // Replace with your Gmail email address
      pass: 'ma6868980@', // Replace with your Gmail email password or an app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'ma6530028@gmail.com', // Replace with the recipient's email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const port = 3000; // Replace with the desired port number
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
