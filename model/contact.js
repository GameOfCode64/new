import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    minLength: [2, "name must be larget then 2 charactors"],
    maxLength: [50, "name must be greather then 50 charactors"],
  },
  subject: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
  date: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
