import Schedule from "../ui/home/schedule";

import { Grid, Col, Row } from 'rsuite';
import WeatherButton from "../ui/home/weatherButton";
import { getPrefAndAvail } from "../lib/actions";

export default async function Page() {
    const userPref: any = await getPrefAndAvail();
    
    return (
        <>
            <div>Home Page</div>
            <Row className="show-grid">
                <Col>
                    <WeatherButton user={userPref}/>
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