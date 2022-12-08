import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-pz2jf9g-shard-00-00.sf8qgjf.mongodb.net:27017,ac-pz2jf9g-shard-00-01.sf8qgjf.mongodb.net:27017,ac-pz2jf9g-shard-00-02.sf8qgjf.mongodb.net:27017/?ssl=true&replicaSet=atlas-knsu71-shard-0&authSource=admin&retryWrites=true&w=majority` ;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
export default Connection ;