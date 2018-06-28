import User from "./models/user";
import createJWT from "./createJWT";
import bcrypt from "bcrypt";

const loginUser = async ({ email, password }) => {
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

export default loginUser;
