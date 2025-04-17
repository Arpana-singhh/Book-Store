import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// Register
export const register = async (req, res) => {
  const { username, email, password, address } = req.body;

  if (!username || !email || !password || !address) {
    return res.status(400).json({
      success: false,
      message: "Missing Details",
    });
  }

  try {
    // Corrected username length check
    if (username.length < 4) {
      return res.status(400).json({
        success: false,
        message: "Username length should be at least 4 characters",
      });
    }

    // Check if username exists
    const existingUserName = await userModel.findOne({ username });
    if (existingUserName) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    // Check if email exists
    const existingUserEmail = await userModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(409).json({
        success: false,
        message: "Email ID already exists",
      });
    }

    // Validate password
    const isValidPassword =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long, include one uppercase letter, and one special character",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
      address,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

// Login
export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and Password both required" });
  }
  try {
    const user = await userModel.findOne({ username });

    // Check if user not exist
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid User" });
    }

    // Check if password not exist
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }

    const authClaims =[
      {
        name:user.username
      },
      {
        role:user.role
      }
    ]
    const token = jwt.sign({ authClaims }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res.status(200).json({ success: true , id:user._id, role: user.role, token: token });
  } catch (error) {
    console.error("Login Error", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
