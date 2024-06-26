import Schedule from "../ui/home/schedule";

import { Grid, Col, Row } from 'rsuite';
import WeatherButton from "../ui/home/weatherButton";
import { getPrefAndAvail } from "../lib/actions";

export default async function Page() {
    const userPref: any = await getPrefAndAvail();
    
    return (
        <>
            <Row className="show-grid">
                <Col>
                    <WeatherButton user={userPref}/>
                </Col>
                <Col md = {8} xsPush={8}>
                    {<Schedule/>}
                </Col>
            </Row>
        </>
    );
}