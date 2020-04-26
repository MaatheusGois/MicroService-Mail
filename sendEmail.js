const nodemailer = require('nodemailer');

function config({ from = '', subject = '', to = [], text = '', html = '', service = 'Gmail', auth = {} }) {
	let optionsMail = {
		from,
		to,
		subject, 
		text,
		html
	}

	let optionsTransport = {
		host: 'smtp.gmail.com', 
 		port: 465,
		auth
	}
	return { optionsMail, optionsTransport }
}



async function send({ optionsMail, optionsTransport }) {
	return new Promise(async (resolve, reject) => { 
		try {
			let transporter = nodemailer.createTransport(optionsTransport)
			let info = await transporter.sendMail(optionsMail)
			resolve(info)
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = { config, send }