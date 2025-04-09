
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [city, setCity] = useState('Kathmandu');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const fetchWeather = async (query) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setForecast(forecastRes.data.list.slice(0, 5));
      setCity(query);
      if (!history.includes(query)) {
        const updatedHistory = [query, ...history].slice(0, 5);
        setHistory(updatedHistory);
        localStorage.setItem('history', JSON.stringify(updatedHistory));
      }
    } catch (err) {
      setError('City not found or API error.');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('history'));
    if (savedHistory) setHistory(savedHistory);
    fetchWeather(city);
  }, []);

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌤️ Weather Dashboard</h1>
        <ThemeToggle />
      </div>
      <SearchBar onSearch={fetchWeather} />
      <div className="flex gap-2 flex-wrap">
        {history.map((h, i) => (
          <button key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded" onClick={() => fetchWeather(h)}>
            {h}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Loading...
          </motion.div>
        ) : error ? (
          <motion.div
            className="text-red-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        ) : weather ? (
          <WeatherCard weather={weather} forecast={forecast} onRefresh={() => fetchWeather(city)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
