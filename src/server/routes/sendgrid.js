const express = require('express');
const router = express.Router();
const helper = require('sendgrid').mail;

router.post('/', (req, res) => {
  const userEmail = req.body.userEmail;
  const askerEmail = req.body.askerEmail;
  const fromEmail = new helper.Email(userEmail);
  const toEmail = new helper.Email(askerEmail);
  const subject = 'Someone wants to help!';
  const content = new helper.Content('text/plain', 'Someone wants to help with one of your asks. Log in to view and accept');
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);

  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function (error, response) {
    res.json({response: response})
  });
});

module.exports = router;
