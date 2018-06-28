import User from "./models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async body => {
  try {
    const hashedPassword = await bcrypt.hash(
      body.password,
      parseInt(process.env.PASSWORD_SALT)
    );
    const newUser = new User({
      email: body.email,
      name: body.name,
      password: hashedPassword
    });
    const result = await newUser.save();
    return await jwt.sign(
      {
        id: result._id,
        iat: Date.now()
      },
      process.env.JWT_SECRET
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default registerUser;
