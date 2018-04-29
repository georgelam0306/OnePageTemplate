import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

const cx = require("classnames");

interface Props {
  fixed: boolean;
  scrollPos: number;
}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <section
        className={cx({
          headerFixed: this.props.fixed,
          header: true,
          headerBackground: this.props.scrollPos > 300
        })}
      >
        <Container>
          <Row>
            <Col />
            <Col>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Games</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
