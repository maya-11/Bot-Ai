import React from "react";
import { Box, Typography } from "@mui/material";

const ChatMessage = ({ message, isUserMessage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUserMessage ? "row-reverse" : "row",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          backgroundColor: isUserMessage ? "#e6e6e6" : "#f5f5f5",
          borderRadius: "16px",
          padding: "8px 16px",
          maxWidth: "80%",
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
