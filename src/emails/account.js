const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rodrigo.okuta@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelAccountEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rodrigo.okuta@gmail.com",
    subject: "Account deleted",
    text: `${name}, your account has been deleted!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelAccountEmail
};
