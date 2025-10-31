require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./routes/AuthRoute");
const { verifyToken } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

//  Secure CORS Configuration
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      process.env.DASHBOARD_URL,
      "https://ava-trade-x-zerodha-clone-dtd5.vercel.app",
      "https://ava-trade-x-zerodha-clone-ntmh7hx8z-raj-yadav-7822s-projects.vercel.app",      "https://ava-trade-x-zerodha-clone-p81m6vs7g-raj-yadav-7822s-projects.vercel.app" 
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  Routes
app.use("/", authRoute);

//  Get all holdings
app.get("/allHoldings", verifyToken, async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Get all positions
app.get("/allPositions", verifyToken, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Place new order
app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1️ Save order
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // 2️ Update holdings
    let holding = await HoldingModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const totalCost = holding.qty * holding.price + qty * price;
        const totalQty = holding.qty + qty;
        holding.qty = totalQty;
        holding.price = totalCost / totalQty;
        await holding.save();
      } else {
        const newHolding = new HoldingModel({ name, qty, price });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (holding) {
        holding.qty -= qty;
        if (holding.qty <= 0) {
          await HoldingModel.deleteOne({ name });
        } else {
          await holding.save();
        }
      }
    }

    res.json({ message: "✅ Order processed and holdings updated!" });
  } catch (err) {
    console.error("Error processing order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Get all orders
app.get("/allOrders", verifyToken, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  MongoDB Connection
mongoose
  .connect(url)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
  });
