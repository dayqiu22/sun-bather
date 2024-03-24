import Schedule from "../ui/home/schedule";

import { Grid, Col, Row } from 'rsuite';
import Reco from "../ui/home/reco"

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
            <Row className="show-grid">
                <Col>
                    <Reco weatherData={weatherDataPlaceholder}/>
                </Col>
                <Col md = {8} xsPush={8}>
                    {<Schedule/>}
                    {/* xs={6} xsPush={12} `right` */}
                </Col>
            </Row>
            
{/* 
            <Grid fluid>
                <Col md={8} xsOffset={16}>
                    
                </Col>
            </Grid> */}

            
        </>
    );
}