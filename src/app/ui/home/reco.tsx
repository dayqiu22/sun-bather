require('dotenv').config();
import { getPrefAndAvail } from "@/app/lib/actions";
import { UserSettings } from "@/app/lib/definitions";

interface WeatherProps {
  time: string | null;
  sun: string | null;
  wind: string | null;
  temp: number | null;
  user: UserSettings
};

export default function Reco({ time, sun, wind, temp, user } : WeatherProps) {
    return (
      <>
        <div>
            <h2><span className="label">Best Time:</span> <span className="data">{time}</span></h2>
        </div>
        <div>
            <h2><span className="label">Conditions:</span> <span className="data">{sun}</span></h2>
            <h2><span className="label">Temperature:</span> <span className="data">{temp}</span></h2>
            <h2><span className="label">Wind:</span> <span className="data">{wind}</span></h2>

        </div>
        <div>
            <h2>Enjoy!</h2>
        </div>
      </>
    );
  }