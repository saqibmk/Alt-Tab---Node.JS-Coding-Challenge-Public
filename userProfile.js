import User from "./models/user";

const getProfile = async id => await User.findById(id);

export default getProfile;
