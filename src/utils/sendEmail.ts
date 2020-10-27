import { createTransport } from 'nodemailer';

function config({
    from = '',
    subject = '',
    to = [],
    text = '',
    html = '',
    auth = {},
}) {
    const optionsMail = {
        from,
        to,
        subject,
        text,
        html,
    };

    const optionsTransport = {
        host: 'smtp.gmail.com',
        port: 465,
        auth,
    };
    return { optionsMail, optionsTransport };
}

async function send({ optionsMail, optionsTransport }) {
    return new Promise(async (resolve, reject) => {
        try {
            const transporter = createTransport(optionsTransport);
            const info = await transporter.sendMail(optionsMail);
            resolve(info);
        } catch (error) {
            reject(error);
        }
    });
}

export default { config, send };