
import React from 'react';
import { motion } from 'framer-motion';

export default function WeatherCard({ weather, forecast, onRefresh }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{weather.name}</h2>
        <button onClick={onRefresh} className="text-sm text-blue-500">🔄 Refresh</button>
      </div>
      <div className="flex items-center gap-4">
        <img src={iconUrl} alt="Weather Icon" className="w-20 h-20" />
        <div>
          <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p>💧 {weather.main.humidity}%</p>
          <p>💨 {weather.wind.speed} km/h</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">5-Day Forecast (Next 5 slots):</h3>
        <div className="grid grid-cols-2 gap-2">
          {forecast.map((f, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
              <p className="text-sm">{new Date(f.dt_txt).toLocaleString()}</p>
              <p>{Math.round(f.main.temp)}°C, {f.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
