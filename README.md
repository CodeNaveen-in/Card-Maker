# 🎴 Card-Maker

A web app that uses Google's Gemini AI to help you create beautiful, personalized occasion cards in just a few clicks.

Whether it's a birthday, anniversary, or just a thoughtful note, Card-Maker generates a two-page card with a custom cover image, greeting, and poem — all tailored to your input.

## ✨ Features

- **Two-Page Card Layout**  
  - Page 1: A unique AI-generated cover image  
  - Page 2: A warm greeting and a heartfelt poem  

- **AI-Powered Creativity**  
  - Uses Gemini AI to write personalized messages and poems  
  - Generates a themed cover image using Imagen 4  
  - Adds decorative borders and accents to match the occasion  

- **Personalization Options**  
  - Input recipient name, occasion, a short description, and your name  
  - The AI uses this to craft a unique card every time  

- **Live Preview**  
  - Built with React + Tailwind CSS  
  - See your card update in real-time as you type  

- **Download & Print**  
  - Save your card as a high-quality PDF  
  - Print directly from your browser with optimized formatting  

## 🛠️ Requirements

Before you start, make sure you have:

- **Node.js & npm**  
  Download from [nodejs.org](https://nodejs.org/)

- **Google Gemini API Key**  
  Get it from [Google AI Studio](https://ai.google.dev/)  
  > Click “Get API key” and follow the steps.  
  > Keep your key private — don’t share or commit it.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CodeNaveen-in/Card-Maker.git
cd Card-Maker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Create a `.env` file in the root folder and add:

```
API_KEY=your_gemini_api_key_here
```

> Replace with your actual Gemini API key.

### 4. Start the App

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to start creating cards!

## 📦 Folder Structure (Quick Peek)

```
Card-Maker/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── pages/        # Page layout
│   ├── styles/       # Tailwind CSS
│   └── utils/        # API calls and helpers
├── .env              # Your API key (not committed)
├── package.json      # Project metadata and scripts
```

## 💡 Tips

- Want to deploy it online? Try [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- Keep your `.env` file out of GitHub by using `.gitignore`
- You can tweak styles easily with Tailwind classes