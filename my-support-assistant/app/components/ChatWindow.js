import React from "react";
import { Box, Typography } from "@mui/material";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages, onSendMessage, userInfo, accountDetails }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {userInfo && (
          <Typography variant="h6">Welcome, {userInfo.name}!</Typography>
        )}
        {accountDetails && (
          <Typography variant="body1">
            Account Balance: ${accountDetails.balance}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
          padding: "16px",
        }}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUserMessage={message.isUserMessage}
          />
        ))}
      </Box>
      <ChatInput onSendMessage={onSendMessage} />
    </Box>
  );
};

export default ChatWindow;
