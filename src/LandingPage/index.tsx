import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Hero from "./Hero";

interface Props {}

export default class LandingPage extends React.Component<Props> {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <Hero />
        <section className="company-info">
          <div className="title">
            A mobile gaming studio creating stunning & engaging online
            experiences
          </div>
          <div className="detail">
            Pocketflix Studios brings you daily doses of the best romance,
            comedy, and drama stories to your mobile phone! Make choices that
            are fun, entertaining, and that matter!
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
