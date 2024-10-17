import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import RegisterSchema from "../Models/RegisterModel.js";

dotenv.config();

export const HomeGet = async (req, res) => {
  const token = req.headers["x-access-token"];

  // Check if the token is provided
  if (!token) {
    return res.status(401).json({ status: "error", error: "No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Ensure decoded contains email
    if (!decoded.email) {
      return res.status(401).json({ status: "error", error: "Invalid token" });
    }

    const user = await RegisterSchema.findOne({ email: decoded.email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ status: "error", error: "User not found" });
    }

    return res.status(200).json({ status: "ok", firstName: user.firstName });
  } catch (error) {
    console.error("Token verification error:", error); // More descriptive error logging
    return res.status(500).json({ status: "error", error: "Failed to authenticate token" });
  }
};
