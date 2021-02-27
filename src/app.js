import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb://devhouse:devhouse@devhouse-shard-00-00.hlepx.mongodb.net:27017,devhouse-shard-00-01.hlepx.mongodb.net:27017,devhouse-shard-00-02.hlepx.mongodb.net:27017/devhouse?ssl=true&replicaSet=atlas-z5acv6-shard-0&authSource=admin&retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
      );
    
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}//app

export default new App().server;