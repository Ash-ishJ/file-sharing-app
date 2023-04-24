import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    

    const MONGO_URI = `mongodb://ashish0401:9211@ac-fbmobgd-shard-00-00.q6jo9zj.mongodb.net:27017,ac-fbmobgd-shard-00-01.q6jo9zj.mongodb.net:27017,ac-fbmobgd-shard-00-02.q6jo9zj.mongodb.net:27017/?ssl=true&replicaSet=atlas-a15hyl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;