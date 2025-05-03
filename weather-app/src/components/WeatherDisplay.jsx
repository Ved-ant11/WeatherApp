
const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 m-4 w-80 text-center">
      <h2 className="text-2xl font-bold mb-4">
        {weatherData.location.name}, {weatherData.location.country}
      </h2>
      <div className="flex items-center justify-center">
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
          className="w-24 h-24"
        />
        <div className="ml-4">
          <p className="text-4xl font-bold">{weatherData.current.temp_c}°C</p>
          <p className="text-gray-600 capitalize">
            {weatherData.current.condition.text}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Humidity</p>
          <p className="text-xl font-bold">{weatherData.current.humidity}%</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Wind</p>
          <p className="text-xl font-bold">
            {weatherData.current.wind_kph} km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
