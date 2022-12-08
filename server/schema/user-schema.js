import mongoose, { mongo } from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema=mongoose.Schema({
    name:String,
    lastname: String,
    address:String,
    city: String,
    country: String,
    email: String,
    password: String,
    number: String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user')

const user = mongoose.model('user', userSchema);

export default user;