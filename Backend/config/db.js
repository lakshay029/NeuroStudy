import mongoose from 'mongoose'

const connectDB= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb connected`);
    }catch(err){
        console.error(`error conntecting to mongodb`)
        process.exit(1);
    }
}

export default connectDB;