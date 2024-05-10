const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const taskMangerRoutes = require("./routes/taskMangerRoutes");

var cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://anushkabh6:ANUro@cluster0.ku0hjoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(cors());

app.use("/auth", authRoutes);

app.use("/protected", protectedRoutes);
app.use("/task", taskMangerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>`);
});
