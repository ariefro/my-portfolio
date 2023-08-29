import nodemailer from "nodemailer";

export async function sendMail(name, from, message) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailData = {
    from: from,
    to: process.env.NODEMAILER_EMAIL_RECEIVER,
    subject: `Message From ${name}`,
    html: `<div>${message}</div><p>Sent from:
    ${from}</p>`,
  };

  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}
