import User from "./models/user";
import bcrypt from "bcrypt";
import createJWT from "./createJWT";

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
    return await createJWT(result._id);
  } catch (error) {
    throw new Error(error);
  }
};

export default registerUser;
