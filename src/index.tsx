import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PrivacyPage from "./PrivacyPage";
import TermsPage from "./TermsPage";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/privacy" component={PrivacyPage} />
      <Route exact path="/terms" component={TermsPage} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
