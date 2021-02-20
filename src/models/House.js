//Criando uma casa no banco de dados

import { Schema, model } from 'mongoose';
const HouseSchema = new Schema({
thumbnail: String,
description: String,
price: Number,
location: String,
status:Boolean,
user:{
 type: Schema.Types.ObjectId,
 ref: 'User'
}
});

HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`;
},
{
  toJSON:{
    virtuals: true
  }
});

export default model('House', HouseSchema);