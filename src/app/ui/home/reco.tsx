require('dotenv').config();



export default function Reco({ weatherData }) {
    // Destructure the properties from weatherData for easier access
    const { timeSpan, cloudCover, temperature, wind } = weatherData;

    const apiKey = process.env.API_KEY;
  
    return (
      <>
        <div>
            <h2>{`Best Time: ${timeSpan}`}</h2>
        </div>
        <div>
            <h2>Conditions: </h2>
            <h2>{cloudCover}</h2>
            <h2>{`Temperature: ${temperature}`}</h2>
            <h2>{`Wind: ${wind}`}</h2>
        </div>
        <div>
            <h2>Enjoy!</h2>
        </div>
      </>
    );
  }