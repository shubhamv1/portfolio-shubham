# Grok AI Chatbot Setup Guide

This guide will help you set up the Grok AI chatbot for your portfolio website.

## Files Created

1. **Backend**: `backend/grok-api.js` - Express.js server for Grok AI API
2. **Frontend**: `src/components/Chatbot.js` - React chatbot component
3. **Styles**: `src/components/Chatbot.css` - Chatbot styling

## Setup Steps

### Step 1: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add your Grok API key to `.env`:
```
GROK_API_KEY=your_actual_grok_api_key_here
PORT=5000
```

5. Get your Grok API key:
   - Visit: https://x.ai/api
   - Sign up or log in
   - Generate an API key
   - Copy it to your `.env` file

6. Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Step 2: Frontend Configuration

The Chatbot component is already added to `App.js`. 

To configure the API URL:

1. Create `.env` file in the project root (if not exists):
```
REACT_APP_API_URL=http://localhost:5000/api/chat
```

2. For production, update the API URL to your deployed backend:
```
REACT_APP_API_URL=https://your-backend-domain.com/api/chat
```

### Step 3: Test the Chatbot

1. Start the frontend:
```bash
npm start
```

2. Start the backend (in a separate terminal):
```bash
cd backend
npm start
```

3. Open your browser and click the chatbot button (bottom right corner)

## Deployment Options

### Option 1: Vercel Serverless Functions

1. Create `api/chat.js` in your project root:
```javascript
export default async function handler(req, res) {
  // Copy logic from backend/grok-api.js
  // Adapt for serverless environment
}
```

2. Add environment variable in Vercel dashboard:
   - `GROK_API_KEY` = your API key

### Option 2: Separate Backend Deployment

Deploy the backend to:
- **Heroku**: Free tier available
- **Railway**: Easy deployment
- **Render**: Free tier available
- **AWS Lambda**: Serverless option

Then update `REACT_APP_API_URL` in your frontend `.env` file.

### Option 3: Proxy Setup

If deploying frontend and backend separately:

1. Add proxy in `package.json`:
```json
{
  "proxy": "http://localhost:5000"
}
```

2. Update Chatbot.js to use relative URL:
```javascript
const response = await fetch('/api/chat', {
  // ...
});
```

## Features

- ✅ Floating chatbot button with animation
- ✅ Chat window with message history
- ✅ User and AI message differentiation
- ✅ Typing indicator while AI responds
- ✅ Responsive design for mobile
- ✅ Conversation history (last 10 messages)
- ✅ Error handling
- ✅ Auto-scroll to latest message

## Customization

### Change Chatbot Position
Edit `Chatbot.css`:
```css
.chatbot-toggle {
  bottom: 30px;  /* Change position */
  right: 30px;
}
```

### Change Colors
Edit gradient colors in `Chatbot.css`:
```css
.chatbot-toggle {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

### Modify System Message
Edit `backend/grok-api.js`:
```javascript
{
  role: 'system',
  content: 'Your custom system message here'
}
```

## Troubleshooting

### Chatbot not responding?
1. Check if backend is running
2. Verify API URL in frontend `.env`
3. Check browser console for errors
4. Verify Grok API key is correct

### CORS errors?
- Ensure CORS is enabled in backend
- Check backend URL matches frontend configuration

### API key errors?
- Verify `.env` file exists in backend directory
- Check API key is correctly set
- Ensure no extra spaces in `.env` file

## Support

For issues or questions:
- Check backend logs
- Check browser console
- Verify API key from https://x.ai/api

