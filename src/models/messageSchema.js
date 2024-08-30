import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength:[3, "First name must be at least 3 characters"],
    },
    lastname: {
        type: String,
        required: true,
        minlength:[3, "Last name must be at least 3 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email address"],
    },
    message: {
        type: String,
        required: true,
        minlength:[10, "Message must be at least 10 characters"],
    },
    phone: {
        type: String,
        required: true,
        minlength:[10, "Phone number must be at least 10 digits"],
        maxlength:[10, "Phone number must not exceed 10 digits"],
    },
    aadhar: {
        type: String,
        required: [true, "Aadhar Is Required!"],
        minLength: [12, "Aadhar Must Contain Only 12 Digits!"],
        maxLength: [12, "Aadhar Must Contain Only 12 Digits!"],
    }
});

export const Message = mongoose.model("Message", messageSchema);