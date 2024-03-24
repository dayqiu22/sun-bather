require('dotenv').config();
import { getPrefAndAvail } from "@/app/lib/actions";
import { UserSettings } from "@/app/lib/definitions";

interface WeatherProps {
  sun: string | null;
  wind: string | null;
  temp: number | null;
  user: UserSettings
};

export default function Reco({ sun, wind, temp, user } : WeatherProps) {
    return (
      <>
        <div>
            <h2><span className="label">Best Time:</span> <span className="data">Now</span></h2>
        </div>
        <div>
            <h2><span className="label">Conditions:</span> <span className="data">{sun}</span></h2>
            <h2><span className="label">Temperature (C):</span> <span className="data">{temp}</span></h2>
            <h2><span className="label">Wind:</span> <span className="data">{wind}</span></h2>

        </div>
        <div>
            <h2 style={{ marginBottom: '20px' }}>Enjoy!</h2>
        </div>
        <div>
          Enter your city:
        </div>
      </>
    );
  }