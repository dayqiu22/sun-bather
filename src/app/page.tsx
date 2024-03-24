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
          <div className={styles.description}>
            This be a Landing Page
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Start/>
        </Col>
      </Row>
    </Grid>
  );
}
