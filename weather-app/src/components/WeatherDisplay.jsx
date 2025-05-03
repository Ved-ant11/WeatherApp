
const WeatherDisplay = ({ weatherData , setChangeTemp, changeTemp}) => {
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
          <div>
            <p className="text-4xl font-bold">{changeTemp ? weatherData.current.temp_c : weatherData.current.temp_f}</p>
            <p className="text-gray-600">{changeTemp ? "°C" : "°F"}</p>
          </div>
          <p className="text-gray-600 capitalize">
            {weatherData.current.condition.text}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setChangeTemp(!changeTemp)}
          >
            Change Temp
          </button>
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
