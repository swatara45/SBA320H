export default function WeatherDisplay({ weather }) {
  function loaded() {
    // Current time in UTC milliseconds
    const nowUtcMs = Date.now();

    // Location offset in milliseconds
    const offsetMs = weather.timezone * 1000;

    // Local time in location (ms)
    const localTimeMs = nowUtcMs + offsetMs;

    // Create Date object for local time
    const localDate = new Date(localTimeMs);

    // Format manually (basic)
    const formattedTime = localDate.getUTCFullYear() + '-' +
      String(localDate.getUTCMonth() + 1).padStart(2, '0') + '-' +
      String(localDate.getUTCDate()).padStart(2, '0') + ' ' +
      String(localDate.getUTCHours()).padStart(2, '0') + ':' +
      String(localDate.getUTCMinutes()).padStart(2, '0');   //padStart(2, '0') ensures all values (like minutes) have two digits 

    return (
      <>
        <h3>Current weather at {weather.name}, USA</h3>
        <p><b>Local Current Time:</b> {formattedTime} </p>
        <p><b>Temperature:</b> {weather.main.temp} °C</p>
        <p><b>Feels like:</b> {weather.main.feels_like} °C</p>
        <p><b>Description:</b> {weather.weather[0].main}, {weather.weather[0].description}</p>
        <p><b>Humidity:</b> {weather.main.humidity}%</p>
      </>
    );
  }

  function loading() {
    return <p>No data to display, please enter your zipcode</p>;
  }

  return (
    <div className="weather-display">
      {typeof weather.main !== 'undefined' ? loaded() : loading()}
    </div>
  );
}