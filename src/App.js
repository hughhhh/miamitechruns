import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/join">
            <Instructions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>🏀</h1>
    <h1 className="t">Miami Tech Runs</h1>
    <div className="p">
      Bringing together the nation's emerging and established Founders, VCs, and
      Creatives to build community, hoops, and mindfulness
    </div>
    <div className="m10">
      <Link to="/join">Click here for instructions to join</Link>
    </div>
    <div className="m10">
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          window.location.href =
            "https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMDc0NzE2NTUx";
        }}
      >
        Click here to get access to telegram
      </Button>{" "}
    </div>
  </div>
);

const Instructions = () => {
  return (
    <div className="intructions">
      <h1>Instructions to join</h1>
      <div>
        {" "}
        1. click{" "}
        <a href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMDc0NzE2NTUx">
          this link
        </a>{" "}
        to join collab link
      </div>
      <div> 2. click `Start` in collab.land chat</div>
      <div> 3. connect your wallet</div>
      <div> 3. after you should access to MiamiTechRuns DAO chat</div>

      <img
        className="tutorial"
        src="tutorial3.gif"
        alt="This is an animated gif image, but it does not move"
      />
    </div>
  );
};
