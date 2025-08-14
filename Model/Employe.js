import { request } from "express";
import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  Position: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

// module.exports = mongoose.model("employe", employeSchema);
const Employer = mongoose.model("Employer", employeSchema);

export default Employer;
