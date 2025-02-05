import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import router from "./route/route.js";
import cors from "cors";
import userRouter from "./route/userRouter.js";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOURI;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Route to handle form submission
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(
    `Received form data: Name: ${name}, Email: ${email}, Message: ${message}`
  );

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Set up email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.log(`Error occurred: ${error.message}`);
    res.status(500).send("Server error");
  }
});

// MongoDB CONNECTION
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Define routes
app.use("/book", router);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
