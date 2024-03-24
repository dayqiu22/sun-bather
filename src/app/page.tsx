import styles from "./page.module.css";
import Start from './ui/landing/start';
import { Grid, Col, Row } from 'rsuite';

import Title from './ui/landing/title';

require('dotenv').config();


export default function Landing() {
  return (
    <Grid fluid>
      <Row className={styles.main}>
        <Col xs={24}>
          <div className={styles.container}>
            <div className={styles.description}>
<<<<<<< HEAD
              GET READY TO TOUCH GRASS
=======
              Touch Grass
>>>>>>> 8276fec4724c21930cb9e4d210438d89b7209f21
            </div>
            <Start />
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
