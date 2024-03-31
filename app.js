const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessages,
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
  deleteAllMessages,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Messages
app.get("/Messages", getMessages);

// POST a new Message
app.post("/Messages", addMessage);

// GET a single Message
app.get("/Messages/:id", getMessage);

// Update Message using PUT
app.put("/Messages/:id", updateMessage);

// DELETE a Message
app.delete("/Messages/:id", deleteMessage);

// DELETE all Message
app.delete("/Messages", deleteAllMessages);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
