import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
interface Props {}

export default class Footer extends React.Component<Props> {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row>
            <Col>copyright and stuff</Col>
          </Row>
        </Container>
      </section>
    );
  }
}