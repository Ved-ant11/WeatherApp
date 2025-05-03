// App.jsx
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

function App() {
  const [location, setLocation] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          console.error("Fetch error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (location) fetchWeather();

    return () => controller.abort();
  }, [location]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400">
      <SearchBar location={location} setLocation={setLocation} />

      {isLoading && (
        <div className="text-xl font-bold text-white my-4">Loading...</div>
      )}

      {error && (
        <div className="text-red-600 bg-white p-4 rounded-lg my-4">
          Error: {error}
        </div>
      )}

      {weatherData && !isLoading && !error && (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
