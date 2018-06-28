import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
};

export default connectToDb;
