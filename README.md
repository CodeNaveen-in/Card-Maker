# Card-Maker 🎴

A web application that leverages the power of Google's Gemini AI to create beautiful, personalized, two-page occasion cards. 

Users can specify a recipient, occasion, and some personal details, and the AI generates a unique card complete with a cover image, a warm greeting, and a heartfelt poem.

## ✨ Project Abilities & Features

- **Two-Page Card Design**: Generates a complete card with a front cover (Page 1) and an inside message (Page 2).
- **AI-Powered Content**:
  - **Cover Image**: Creates a unique, high-quality image for the card's cover using Imagen 4.
  - **Greeting & Poem**: Generates a short, occasion-appropriate greeting and a personalized, multi-line poem based on user input.
  - **Smart Decorations**: Intelligently selects decorative borders and subtle page accessories that match the card's theme.
- **Rich Personalization**: Takes the recipient's name, occasion, personal description, and sender's name to create a truly unique and thoughtful card.
- **Interactive UI**: A clean, responsive interface built with React and Tailwind CSS that provides a real-time preview of the card.
- **Download as PDF**: Users can download their final two-page card as a high-quality PDF, ready for digital sharing or printing.
- **Print-Friendly**: A dedicated print function formats the card for easy printing directly from the browser.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed and configured:

1.  **Node.js and npm**: This project is built with Node.js. You can download it from [nodejs.org](https://nodejs.org/).
2.  **Google Gemini API Key**: The application requires a Gemini API key to communicate with the AI models.
    - Visit the [Google AI for Developers](https://ai.google.dev/) website.
    - Click on "**Get API key in Google AI Studio**" and follow the instructions to create your key.
    - **Important**: Keep your API key secure and do not commit it to version control.

## 🚀 How to Navigate and Run the Project

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

Clone this project to your local machine using Git:

```bash
git clone https://github.com/CodeNaveen-in/Card-Maker.git
```

### 2. Navigate to the Project Directory

Change into the specific project folder:

```bash
cd Card-Maker
```

### 3. Install Dependencies

Install the necessary npm packages:

```bash
npm install
```

### 4. Set Up Environment Variables

Create a new file named `.env` in the root of the `Card-Maker` directory. This file will store your secret API key.

Add your Gemini API key to the `.env` file like this:

```
API_KEY=your_gemini_api_key_here
```

Replace `your_gemini_api_key_here` with the actual key you obtained from Google AI Studio.

### 5. Run the Application

Start the local development server:

```bash
npm run dev
```

The application should now be running. Open your web browser and navigate to the local address provided in your terminal (usually `http://localhost:5173`) to see the Card Generator in action!
