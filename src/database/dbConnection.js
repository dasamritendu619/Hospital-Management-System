import mongoose from "mongoose";

export const dbConnection =  ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "Hospital_Management",
            bufferCommands: false
        })
        console.log('DB connected');
    }catch(err){
        console.log('Error `DB connection', err);
    }
}