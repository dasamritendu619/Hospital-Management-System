import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
export const sendMessage = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, email, message, phone } = req.body;
    if(!firstname || !lastname || !email || !message || !phone) {
        return new ErrorHandler(400,"Please fill in all fields");
    }
            const user =await Message.create({firstname, lastname, email, message, phone});
            res.status(200).json({
                success: true,
                user,
                message: "Message sent successfully",
            });
});