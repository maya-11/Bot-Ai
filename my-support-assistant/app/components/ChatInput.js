import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSendMessage();
          }
        }}
      />
      <IconButton onClick={handleSendMessage} color="primary">
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
