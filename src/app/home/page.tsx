import Schedule from "../ui/home/schedule";

import { Grid, Col } from 'rsuite';
import Reco from "../ui/home/reco"
import WeatherButton from "../ui/home/weatherButton";

export default function Page() {
    const weatherDataPlaceholder = {
        timeSpan: '9:00-11:00',
        cloudCover: "Sunny",
        temperature: '18C',
        wind: 'Light'
    }



    return (
        <>
            <div>Home Page</div>
            <Reco weatherData={weatherDataPlaceholder}/>
            <WeatherButton />

            <Grid fluid>
                <Col md={8} xsOffset={16}>
                    {<Schedule/>}
                </Col>
            </Grid>

            
        </>
    );
}