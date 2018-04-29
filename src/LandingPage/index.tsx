import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Hero from "./Hero";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";

interface Props {}
interface State {
  scrollPos: number;
}
export default class LandingPage extends React.Component<Props, State> {
  subscribe: Subscription;
  state = {
    scrollPos: 0
  };
  componentDidMount() {
    this.subscribe = fromEvent(window, "scroll")
      .pipe(
        map((e: any) => {
          return window.scrollY;
        })
      )
      .subscribe((scroll: any) => {
        this.setState({
          scrollPos: scroll
        });
      });
  }

  componentWillUnmount() {
    this.subscribe.unsubscribe();
  }

  render() {
    return (
      <div className="landing-page">
        <Header fixed={true} scrollPos={this.state.scrollPos} />
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
