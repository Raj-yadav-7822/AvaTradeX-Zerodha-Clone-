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

//  Correct CORS setup
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      process.env.DASHBOARD_URL,
      "https://ava-trade-x-zerodha-clone.vercel.app",
      "https://ava-trade-x-zerodha-clone-dtd5.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  Routes
app.use("/", authRoute);

//  Holdings
app.get("/allHoldings", verifyToken, async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Positions
app.get("/allPositions", verifyToken, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  Orders
app.get("/allOrders", verifyToken, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  New Order
app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode)
      return res.status(400).json({ error: "Missing required fields" });

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    let holding = await HoldingModel.findOne({ name });
    if (mode === "BUY") {
      if (holding) {
        const totalCost = holding.qty * holding.price + qty * price;
        const totalQty = holding.qty + qty;
        holding.qty = totalQty;
        holding.price = totalCost / totalQty;
        await holding.save();
      } else {
        await new HoldingModel({ name, qty, price }).save();
      }
    } else if (mode === "SELL" && holding) {
      holding.qty -= qty;
      if (holding.qty <= 0) await HoldingModel.deleteOne({ name });
      else await holding.save();
    }

    res.json({ message: "✅ Order processed and holdings updated!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  MongoDB Connection
mongoose
  .connect(url)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(" MongoDB Error:", err));
