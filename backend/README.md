# Grok AI Chatbot Backend

Backend API server for the Grok AI Chatbot integration in the portfolio website.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your Grok API key to `.env`:
```
GROK_API_KEY=your_actual_grok_api_key
PORT=5000
```

3. Get your Grok API key from: https://x.ai/api

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST `/api/chat`
Send a message to the Grok AI chatbot.

**Request Body:**
```json
{
  "message": "Tell me about Shubham's experience",
  "conversationHistory": [
    {
      "role": "user",
      "content": "Hello"
    },
    {
      "role": "assistant",
      "content": "Hi! How can I help you?"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Shubham is an SDE 1 with 2+ years of experience...",
  "usage": {
    "prompt_tokens": 50,
    "completion_tokens": 100,
    "total_tokens": 150
  }
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "service": "Grok AI Chatbot API"
}
```

## Deployment

### Option 1: Vercel Serverless Functions

Create `api/chat.js` in your project root:

```javascript
const handler = async (req, res) => {
  // Copy the logic from grok-api.js
  // Adapt for serverless environment
};
```

### Option 2: Deploy as Separate Service

Deploy the backend to:
- Heroku
- Railway
- Render
- AWS Lambda
- Google Cloud Functions

Update the frontend API URL in `Chatbot.js` to point to your deployed backend.

## Notes

- The backend uses Express.js for the API server
- CORS is enabled for frontend communication
- Conversation history is limited to last 10 messages for context
- The system message helps the AI understand its role as a portfolio assistant

