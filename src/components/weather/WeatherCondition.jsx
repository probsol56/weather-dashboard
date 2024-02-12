import MaxTempIcon from '../../assets/icons/temp-max.svg'
import MinTempIcon from '../../assets/icons/temp-min.svg'
import HumidityIcon from '../../assets/icons/humidity.svg'
import CloudyIcon from '../../assets/icons/cloud.svg'
import WindIcon from '../../assets/icons/wind.svg'
import useWeatherData from '../../hooks/useWeatherData'
export default function WeatherCondition() {
  const { weatherData } = useWeatherData();
  const {climate,maxTemperature,minTemperature,humidity,cloudPercentage,wind} = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}℃</p>
            <img src={MaxTempIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}℃</p>
            <img src={MinTempIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(humidity)}%</p>
            <img src={HumidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(cloudPercentage)}%</p>
            <img src={CloudyIcon} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(wind)} km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
