import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface Props {}

export default class LandingPage extends React.Component<Props> {
  render() {
    return (
      <div className="landing-page">
        <Header />
        Testing out deploy
        <Footer />
      </div>
    );
  }
}
