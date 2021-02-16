import { Schema, model } from 'mongoose';
const HouseSchema = new Schema({
thumbmail: String,
description: String,
price: Number,
location: String,
status:Boolean,
user:{
 type: Schema.Types.ObjectId,
}
});

export default model('House', HouseSchema);