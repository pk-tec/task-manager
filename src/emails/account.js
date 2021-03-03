const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "pritam8987@gmail.com",
		subject: "Thanks for joining in!",
		text: `Welcome to the app, ${name}. Let me know you get long with the app`,
	});
};

const sendCancelEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "pritam8987@gmail.com",
		subject: "Sorry to here you are leaving us",
		text: `We are very sorry for your inconvenience and you are 
        leaving us ${name}, We would like to ask why are you leaving?
        Please give a feedback So we can improve our service for future.`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail,
};
