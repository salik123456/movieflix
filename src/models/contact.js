import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
},
{
    timestamps: true,
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact
