import Schedule from "../ui/home/schedule";

import { Grid, Col } from 'rsuite';

export default function Page() {



    return (
        <>
            <div>Home Page</div>

            <Grid fluid>
                <Col md={8} xsOffset={16}>
                    {<Schedule/>}
                </Col>


            </Grid>

            
        </>
    );
}