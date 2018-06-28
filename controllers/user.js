import User from "../models/user";
import createJWT from "./createJWT";
import bcrypt from "bcrypt";

export const registerUser = async body => {
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
    return await createJWT(result._id);
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new Error("User not found");
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) throw new Error("Email or password incorrect");
    return await createJWT(user._id);
  } catch (error) {
    conosole.log(error);
    throw new Error("Authentication Error");
  }
};

export const getProfile = async id => await User.findById(id);
