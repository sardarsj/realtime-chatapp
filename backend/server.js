const express = require("express");
const dotenv = require("dotenv"); //port vgera lyi use kita h
const { chats } = require("./data/data"); //data of chats coming from data.js
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");


dotenv.config();
connectDB();
const app = express();

app.use(express.json());

//making get request to / route
app.get("/", (req, res) => {
  res.send("API is running successfully"); 
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

// ///api/chats is an endpoint
// app.get("/api/chat", (req, res) => {
//   res.send(chats); //res shyd display krda h data on screen (have to check on internet)
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });