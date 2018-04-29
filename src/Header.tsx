import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
interface Props {}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <section className="header">
        <Container>
          <Row>
            <Col />
            <Col>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Games</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
