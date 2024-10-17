import mongoose from "mongoose";

const connect = async() => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URL);
    console.log('server is connected to the database...');
}

export default connect;