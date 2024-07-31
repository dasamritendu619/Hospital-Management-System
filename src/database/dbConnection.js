import mongoose from "mongoose";

export const dbConnection =  ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Hospital_Management",
        bufferCommands: false
    })
    .then(()=> console.log('DB connected'))
    .catch((err)=> console.log('Error `DB connection', err));
}