// Backend API for Grok AI Chatbot
// This file handles the communication with Grok AI API

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Grok AI API Configuration
const GROK_API_URL = 'https://api.x.ai/v1/chat/completions';
const GROK_API_KEY = process.env.GROK_API_KEY; // Add your Grok API key in .env file

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!GROK_API_KEY) {
      return res.status(500).json({ 
        error: 'Grok API key is not configured. Please add GROK_API_KEY to your .env file' 
      });
    }

    // Prepare messages for Grok API
    const messages = [
      {
        role: 'system',
        content: 'You are a helpful AI assistant for Shubham Verma\'s portfolio website. You help visitors learn about his skills, experience, and projects. Be friendly, professional, and concise.'
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ];

    // Call Grok API
    const response = await fetch(GROK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get response from Grok API');
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    res.json({
      success: true,
      message: aiMessage,
      usage: data.usage
    });

  } catch (error) {
    console.error('Grok API Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while processing your request'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Grok AI Chatbot API' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Grok AI Chatbot API server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

module.exports = app;

