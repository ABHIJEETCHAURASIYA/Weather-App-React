# 🌤️ Weather Forecast App

A clean, modern, and responsive weather app built with **React.js**, **Tailwind CSS**, and **OpenWeatherMap API**. Deployed on **Vercel**.

### 🌍 [Live Demo](https://your-vercel-app-url.vercel.app)

---

## ✨ Features

- 🔍 Search for current weather by city name
- 🌡️ Displays temperature, condition, humidity, wind speed, and weather icon
- ⏳ Loading state while fetching data
- ❌ Error state for invalid city names or failed API calls
- 💡 Dark/Light theme toggle
- 🕔 Recent search history (last 5 cities)
- 📅 5-Day weather forecast (every 3 hours)
- 🔄 Refresh button to re-fetch data
- 🎬 Smooth transitions and animations

---

## 📦 Tech Stack

- **Framework:** React.js (Vite or CRA)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Animations:** Framer Motion
- **API:** [OpenWeatherMap](https://openweathermap.org/api)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your API Key

Register for a free API key at [OpenWeatherMap](https://openweathermap.org/api)

### 4. Add your API Key

Create a `.env` file in the root of the project and add:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Make sure you restart the dev server after setting the `.env` file.

### 5. Start the development server

```bash
npm run dev
```

---

## 🔌 API Used

**Current Weather Data API:**  
`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

**5-Day Forecast API:**  
`https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`

---

## 📸 Screenshots

> Add screenshots/gifs of your UI here (optional but recommended)

---

## 🛠️ Project Structure (Recommended)

```
src/
├── components/
│   ├── WeatherCard.jsx
│   ├── ForecastCard.jsx
│   ├── SearchBar.jsx
│   └── ThemeToggle.jsx
├── hooks/
│   └── useWeather.js
├── App.jsx
├── main.jsx
├── index.css
```

---

## ✅ To Do (If Not Yet Added)

- [ ] PWA support
- [ ] Unit tests with Jest + React Testing Library
- [ ] Voice input for city name

---

## 📄 License

MIT License. Feel free to fork and customize for your own use.

---

## 💬 Feedback & Contributions

Have suggestions or want to contribute? Feel free to open an issue or submit a PR!

---

## 🌐 Deployed On

[Vercel](https://vercel.com)
