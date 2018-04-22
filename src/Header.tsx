import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
interface Props {}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <section className="Header">
        <Container>
          <Row>
            <Col />
          </Row>
        </Container>
      </section>
    );
  }
}
