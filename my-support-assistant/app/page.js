"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import OpenAI from "openai";
import ChatWindow from "./components/ChatWindow";
import { getUserInfo, getAccountDetails } from "../utils/geminiApi";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accountDetails, setAccountDetails] = useState(null);

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfoData = await getUserInfo();
        const accountDetailsData = await getAccountDetails();
        setUserInfo(userInfoData);
        setAccountDetails(accountDetailsData);
      } catch (error) {
        console.error("Error fetching user data from Gemini API:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleSendMessage = async (message) => {
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUserMessage: true },
    ]);

    try {
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 2048,
        n: 1,
        stop: null,
        temperature: 0.5,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.choices[0].text, isUserMessage: false },
      ]);
    } catch (error) {
      console.error("Error sending message to OpenAI API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, there was an error processing your request.",
          isUserMessage: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        userInfo={userInfo}
        accountDetails={accountDetails}
      />
    </Box>
  );
};

export default Chat;
