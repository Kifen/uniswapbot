const mongoose = require('mongoose');
const logger = require('./logger');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  logger.info(`MongoDB Connected: ${conn.connection.host}`);
};

const pairSchema = new mongoose.Schema({
  tokenA: {
    type: String,
    trim: true,
  },
  tokenB: {
    type: String,
    trim: true,
  },
  exchangeAddress: {
    type: String,
    trim: true,
  },
});

const Pair = mongoose.model('Pair', pairSchema);

module.exports = {
  connectDB,
  Pair,
};
