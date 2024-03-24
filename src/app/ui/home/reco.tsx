require('dotenv').config();



export default function Reco({ weatherData }) {
    // Destructure the properties from weatherData for easier access
    const { timeSpan, cloudCover, temperature, wind } = weatherData;

    const apiKey = process.env.API_KEY;
  
    return (
      <>
        <div>
            <h2><span className="label">Best Time:</span> <span className="data">{timeSpan}</span></h2>
        </div>
        <div>
            <h2><span className="label">Conditions:</span> <span className="data">{cloudCover}</span></h2>
            <h2><span className="label">Temperature:</span> <span className="data">{temperature}</span></h2>
            <h2><span className="label">Wind:</span> <span className="data">{wind}</span></h2>

        </div>
        <div>
            <h2>Enjoy!</h2>
        </div>
      </>
    );
  }