const Message = require("./model");

// get all Messages
const getMessages = async (req, res) => {
  try {
    const Messages = await Message.find({});
    res.status(200).json(Messages);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Add one Message
const addMessage = async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;
    const newMessage = new Message({ sender, recipient, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Message by ID
const getMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const Message = await Message.findById(id);
    if (!Message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json(Message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Message by ID
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const Message = await Message.findByIdAndDelete({ _id: id });
    if (!Message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all Messages
const deleteAllMessages = async (req, res) => {
  try {
    const result = await Message.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Message by ID
const updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMessage = req.body;
    const Message = await Message.findOneAndUpdate({ _id: id }, updatedMessage);
    if (!Message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json(Message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMessages,
  addMessage,
  getMessage,
  deleteMessage,
  deleteAllMessages,
  updateMessage,
};
