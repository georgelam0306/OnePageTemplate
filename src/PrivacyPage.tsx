import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {}

export default class PrivacyPage extends React.Component<Props> {
  render() {
    return (
      <div className="privacy-page">
        <Header />
        <div>Privacy Content</div>
        <Footer />
      </div>
    );
  }
}
