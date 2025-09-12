# StoryShort.ai Clone

A Next.js frontend with FastAPI backend that replicates StoryShort.ai functionality - generate viral faceless videos from text prompts using AI.

## Features

- 🤖 AI script generation using OpenRouter DeepSeek Chat API
- 🎤 Text-to-speech with Google Text-to-Speech (gTTS)  
- 🎬 Video composition using Remotion
- 🎨 Beautiful Mantine UI with gradient design
- 📱 Responsive design for all devices
- 📥 Video export functionality

## Running Locally

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- OpenRouter API key (for DeepSeek Chat)

### Backend Setup

1. **Install Python dependencies:**
```bash
cd backend
pip install fastapi uvicorn gtts openai requests python-dotenv python-multipart
```

2. **Set environment variables:**
Create a `.env` file in the backend directory:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

3. **Run the backend:**
```bash
cd backend
python main.py
```
The backend will run on `http://localhost:8000`

### Frontend Setup

1. **Install dependencies:**
```bash
cd frontend
npm install
```

2. **Run the frontend:**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5000`

### Using the Application

1. Open `http://localhost:5000` in your browser
2. Click "✨ Generate Amazing Video"
3. Enter your story prompt
4. Select video length (short/medium/long) and voice language
5. Click "Generate Video" 
6. Wait for AI script generation, audio creation, and media selection
7. View your video with the Remotion player
8. Export your creation

## API Endpoints

- `POST /api/generate-script` - Generate AI script from prompt
- `POST /api/generate-audio` - Convert script to speech
- `GET /api/random-media` - Get random CC0 media assets

## Project Structure

```
├── backend/
│   └── main.py              # FastAPI backend server
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/         # Next.js API routes (proxy to backend)
│   │   │   ├── layout.tsx   # Root layout
│   │   │   └── page.tsx     # Landing page
│   │   └── components/
│   │       ├── VideoGenerator.tsx  # Main video generation form
│   │       ├── VideoPlayer.tsx     # Remotion player component
│   │       └── VideoComposition.tsx # Video composition logic
│   ├── package.json
│   └── next.config.js
└── README.md
```

## Technologies Used

- **Frontend:** Next.js 15, Mantine UI, Remotion, TypeScript
- **Backend:** FastAPI, Python 3.11
- **AI:** OpenRouter DeepSeek Chat API
- **Audio:** Google Text-to-Speech (gTTS)
- **Media:** CC0 assets from Unsplash/Pexels

## Environment Variables

- `OPENROUTER_API_KEY` - Your OpenRouter API key for DeepSeek Chat

## Development Notes

- The frontend uses Next.js API routes to proxy requests to the FastAPI backend
- All API calls are handled internally to avoid CORS issues
- The project includes fallback functionality when APIs are unavailable
- Video rendering uses Remotion for composition and playback

## License

This project is for educational purposes. Ensure you have proper licenses for production use.