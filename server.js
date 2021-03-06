const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Initialize middleware
app.use(
  express.json({
    extended: false
  })
);

app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/users", require("./routes/api/APIusers"));
app.use("/api/auth", require("./routes/api/APIauth"));
app.use("/api/posts", require("./routes/api/APIposts"));
app.use("/api/profile", require("./routes/api/APIprofile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
