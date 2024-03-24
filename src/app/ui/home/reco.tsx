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

    // const getBest = () => {
    //   if (!weather) {
    //     return;
    //   } else {
    //     for (let i = 0; i < 3; i++) {
    //       // still need to implement avaialbility matching
    //       const temp = weather.list[i].main.temp;
    //       let cloud = weather.list[i].clouds.all;
    //       let wnspd = weather.list[i].wind.speed;
    //       let rainfall = weather.list[i].weather[0].main.description;
    //       if (temp-273.15 >= user.temp_min && temp-273.15 <= user.temp_max) {
    //         if (user.sun == 'no' && cloud < 15) {
    //           continue;
    //         }
    //         if (user.wind == 'no' && wnspd > 3) {
    //           continue;
    //         }
    //         if (user.rain == 'no' && rainfall == 'heavy intensity rain') {
    //           continue;
    //         }
    //         cloud = (cloud < 25) ? 'Clear' : 'Cloudy';
    //         wnspd = (cloud > 3) ? 'Windy' : 'Calm';
    //         return {
    //           temp,
    //           cloud,
    //           wnspd,
    //           rainfall
    //         }
    //       }
    //     }
    //   }
    // };

    // const best = getBest();
    // console.log(best);
  
    return (
      <>
        <div>
            <h2><span className="label">Best Time:</span> <span className="data">Now</span></h2>
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