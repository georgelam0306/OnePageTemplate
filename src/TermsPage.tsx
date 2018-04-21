import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {}

export default class TermsPage extends React.Component<Props> {
  render() {
    return (
      <div className="privacy-page">
        <Header />
        TOS
        <Footer />
      </div>
    );
  }
}
