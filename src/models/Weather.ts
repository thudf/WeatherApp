interface Main {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
}

export interface WeatherData {
  main: Main;
  name: string;
  weather: Weather[];
  wind: Wind;
  dt: number;
  timezone: number;
  sys: {
    country: string;
  }
}
