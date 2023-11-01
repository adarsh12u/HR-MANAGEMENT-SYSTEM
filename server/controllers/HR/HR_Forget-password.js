const model = require("../../models/HR");
const nodemailer = require("nodemailer");
const SMTP = require("../../config/SMTP");

const jwt = require("jsonwebtoken");
// console.log('<p> Hii '+name+'Plese copy the link <a  href =" http://localhost:5000/api/reset-password?token=+'+token+'"> reset </a>')
// mail send
const Send_Email = async (name, email, token, _id) => {
  try {
    var transpoter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      requireTLS: true,
      secure: false,
      auth: {
        user: SMTP.username,
        pass: SMTP.password,
      },
    });

    async function main(transporter, name) {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: SMTP.username,
        to: email,
        subject: "email is for forget your password",
        html: `
          <p> 
          Plese click here  ==>  <a  href ="http://localhost:3000/reset-password/${_id}/${token}/">  reset your password </a>`,
      });

      console.log("Message sent: %s", info.messageId);
    }

    main(transpoter, name).catch(console.error);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const Forget_password_HR = async (req, res) => {
  try {
    const { login } = req.body;

    const email = login.HR_email;
   

    if(!email){
      throw new Error(" MAIL IS REGISTERED");
    }

  

    const data = await model.findOne({ HR_email: email });
    if (!data) {
      throw new Error("THIS MAIL IS NOT REGISTERED");
    }
    if (data) {
      const one_time_token = jwt.sign(
        { _id: data._id },
        process.env.SECRETE_KEY,
        {
          expiresIn: "10m",
        }
      );

      const setusertoken = await model.findByIdAndUpdate(
        { _id: data._id },
        { verifytoken: one_time_token }
      );

      await setusertoken.save();

      if (setusertoken) {
        const value = await Send_Email(
          data.HR_Firstname,
          data.HR_email,
          one_time_token,
          data._id
        );
      }

      res
        .status(200)
        .send({ msg: "check your email inbox to forget password" });
    } 
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = Forget_password_HR;
