require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel}= require("./model/OrdersModel")
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute")
const {verifyToken} = require ("./middleware/authMiddleware")
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();
app.use(cors({
  origin: [process.env.CLIENT_URL,process.env.DASHBOARD_URL],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRoute);
//holdings
app.get('/allHoldings',verifyToken, async(req,res)=>{
let allHoldings = await HoldingModel.find({})
res.json(allHoldings)
})
//positions
app.get('/allPositions',async(req,res)=>{
  let allPositions = await PositionsModel.find({})
  res.json(allPositions)
  })

app.post("/newOrder",verifyToken,  async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // 1️Order save 
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // 2️Holding check 
    let holding = await HoldingModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
       
        const totalCost = holding.qty * holding.price + qty * price;
        const totalQty = holding.qty + qty;
        holding.qty = totalQty;
        holding.price = totalCost / totalQty;
        await holding.save();
      } else {
      
        const newHolding = new HoldingModel({
          name,
          qty,
          price,
        });
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

    res.json({ message: "Order processed and holdings updated!" });
  } catch (err) {
    console.error("Error processing order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get all orders
app.get("/allOrders",verifyToken,  async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mongoose.connect(url)
  .then(() => {
    console.log(" MongoDB Connected");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
  });


