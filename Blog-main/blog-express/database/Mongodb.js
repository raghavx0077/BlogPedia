import mongoose from "mongoose";

const connect = async() => {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://localhost:27017/Blogpedia');
    console.log('server is connected to the database...');
}

export default connect;