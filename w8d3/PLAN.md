# Weather App

## Features

- Search field for the city
- Wind Speed, Location, Temperature Display, Conditions (POP?)
- Message for unknown cities (Random ?)
- Buttons for previously searched cities
- Favorite?

## Input

```jsx
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }


```

## Components

- App (State: currentCity, cityHistory)
  - CityForm
  - CityHistoryList
    - CityHistoryListItem
  - CurrentWeather (State: weatherData)
