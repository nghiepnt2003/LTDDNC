const nodemailer = require("nodemailer");
const sendMail = async (content, { email, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: '"Book store" <no-reply@bookstore.gmail.com>', // sender address
      to: email, // list of receivers
      subject: content, // Subject line
      text: "Hello world", // plain text body
      html: html, // html body
    });
    return info;
  } catch (error) {
    throw new Error(error);
  }
};

const sendMailRegister = async ({ email, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: '"Book store" <no-reply@bookstore.gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Create Account", // Subject line
      text: "Hello world", // plain text body
      html: html, // html body
    });
    return info;
  } catch (error) {
    throw new Error(error);
  }
};
const sendMailEditProfile = async ({ email, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: '"Book store" <no-reply@bookstore.gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Edit Account", // Subject line
      text: "Hello world", // plain text body
      html: html, // html body
    });
    return info;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { sendMail, sendMailRegister, sendMailEditProfile };
