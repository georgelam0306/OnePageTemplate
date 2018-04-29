import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
interface Props {}

export default class Footer extends React.Component<Props> {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <Col>
              <Row>
                <Link to="/privacy">Privacy Policy</Link>
              </Row>
              <Row>
                <Link to="/terms">Terms of Service</Link>
              </Row>
            </Col>
            <Col />

            <Col>
              <span>Contact</span>
              <Row>Email: support@pocketflixstudios.com</Row>
              <Row>FB</Row>
            </Col>
          </Row>
          <Row>
            <Col />
            <Col sm={6}>
              Copyright © Pocketflix Studios, Inc 2018 | All Rights Reserved
            </Col>
            <Col />
          </Row>
        </Container>
      </section>
    );
  }
}
