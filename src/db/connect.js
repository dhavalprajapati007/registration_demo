import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (err) {
        console.error('MONGODB connection failed: ', err);
        process.exit(1)
    }
}

export default connectDB;