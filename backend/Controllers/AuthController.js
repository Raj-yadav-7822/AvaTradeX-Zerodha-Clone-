const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// -------------------- SIGNUP --------------------
module.exports.Signup = async (req, res) => {
  try {
    console.log(" Request body:", req.body);

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    console.log(" Creating user...");
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      createdAt: new Date(),
    });

    console.log(" User created:", user);

    const token = createSecretToken(user._id);
    console.log(" Token created:", token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
      token,
    });

  } catch (error) {
    console.error(" Signup error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


// -------------------- LOGIN --------------------
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      user,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// -------------------- LOGOUT --------------------
module.exports.Logout = async (req, res) => {
  try {
    // Cookie token remove
    res.cookie("token", "", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      expires: new Date(0), 
    });

    return res.status(200).json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};