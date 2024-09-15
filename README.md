# Gemini AI Clone

A clone of Gemini AI built using **React.js** and **Tailwind CSS**, integrated with Google Generative AI for prompt-based responses. The app includes a sidebar to store recent user questions.

## Live Demo
**Website Link:** [Gemini-AS](https://gemini-as.netlify.app/)

## Features
- AI-powered responses using Google Generative AI.
- Recent questions sidebar for easy access to previous queries.
- Fast and responsive UI with `react-spinners` for loading states.

## Key Components
1. **Main Input Interface:**
   - A simple input field for users to send prompts to the AI and receive responses in real-time.

2. **Recent Queries Sidebar:**
   - Displays a dynamic list of user-submitted queries for easy access to recent interactions.

3. **API Integration:**
   - Uses `Axios` to send user prompts to the Google Generative AI API and fetch responses.

## Project Architecture
- **React.js:** Handles frontend logic and component-based UI.
- **Tailwind CSS:** Provides customizable and responsive design.
- **Google Generative AI:** Processes user prompts and generates AI responses via API.
- **React Markdown:** Renders markdown content from AI-generated responses.
- **Axios:** Manages API requests to send prompts and receive responses.
- **React Spinners:** Displays loading indicators during API calls.
