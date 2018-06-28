import jwt from "jsonwebtoken";

const createJWT = async id =>
  await jwt.sign(
    {
      id,
      iat: Date.now()
    },
    process.env.JWT_SECRET
  );

export default createJWT;
