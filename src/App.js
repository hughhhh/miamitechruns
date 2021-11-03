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
            <JoinInstructions />
          </Route>
          <Route path="/tokens">
            <BuyInstructions />
          </Route>
          <Route path="/games">
            <GameInstructions />
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
  <div className="holder">
    <h1>🏀</h1>
    <h1 className="t">Miami Tech Runs</h1>
    <img src="mtr-squad.jpg" alt="Miami Tech Runs Squad" className="squad" />
    <div className="p">
      Bringing together the Miami's emerging and established Founders, VCs, and
      Creatives to build community, hoops, and mindfulness. Open membership!
    </div>
    <div className="m10">
      <Link to="/join">Click here for instructions to join</Link>
    </div>
    <div className="m10">
      <Link to="/tokens">
        <Button variant="primary" size="lg">
          Click here to buy $MTRS1 tokens
        </Button>
      </Link>
    </div>
    <div className="m10">
      <p>
        Next token holder game: November 13th -{" "}
        <Link to="/games">full schedule.</Link>
      </p>
    </div>
    <div>
      <a href="https://www.instagram.com/miamitechruns/" target="_blank">
        <img src="ig.png" className="ig" />
      </a>
    </div>
  </div>
);

const GameInstructions = () => {
  return (
    <div className="intructions">
      <h1>Tentative upcoming games</h1>
      <div>
        <ul>
          <li>
            <strong>Next game:</strong> November 13th
          </li>
          <li>Nov 27th</li>
          <li>
            <strong>Final season 1 game:</strong>Dec 11th
          </li>
        </ul>
      </div>

      <img className="tutorial" src="tutorial.gif" alt="oops" />
    </div>
  );
};

const JoinInstructions = () => {
  return (
    <div className="intructions">
      <h1>Instructions to join</h1>
      <div>
        {" "}
        1. Click{" "}
        <a href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMDc0NzE2NTUx">
          this link
        </a>{" "}
        to join collab link
      </div>
      <div> 2. Click `Start` in collab.land chat</div>
      <div> 3. Connect your wallet</div>
      <div> 3. After you should have access to MiamiTechRuns.eth chat</div>

      <img className="tutorial" src="tutorial.gif" alt="oops" />
    </div>
  );
};

const BuyInstructions = () => {
  return (
    <div className="intructions">
      <h1>Instructions to buy Season 1 Tokens</h1>
      <div>
        {" "}
        1. Open{" "}
        <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xa2ec64a067039a34a475403f3447c1a569722458">
          this link
        </a>{" "}
        in <a href="https://wallet.coinbase.com/">Coinbase wallet</a>,{" "}
        <a href="https://metamask.io/">Metamask</a> mobile or{" "}
        <a href="https://rainbow.me/">Rainbow wallet</a>
      </div>
      <div> 2. Buy at least 200 tokens</div>
      <div> 3. Keep them in your wallet</div>
      <div>
        {" "}
        4. Follow the instructions <Link to="/join">to join the Chat</Link>
      </div>
    </div>
  );
};
