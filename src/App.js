import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mailchimp from "react-mailchimp-form";

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
      Bringing together Miami's emerging and established Founders, VCs, and
      Creatives to build community, play hoops, and practice mindfulness. Open
      membership!
    </div>
    <div className="m10">
      <div className="p">
        <h3>Want to join the waitlist for Season 2?</h3>
        <Mailchimp
          action="https://xyz.us20.list-manage.com/subscribe/post?u=b2c0181dd84785ffbf5f9738c&amp;id=03ad6c77c6"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true
            }
          ]}
        />
      </div>
      <div className="m10">
        <div className="p">
          Once you purchase your tokens you'll have access to our telegram chat.
          This where we coordinate events and games for our members!
        </div>
        <Link to="/join">
          <Button variant="secondary" size="lg">
            Join Telegram Chat
          </Button>
        </Link>
      </div>
    </div>
    <div className="m20">
      <h3>Resources</h3>
      <p>
        <Link
          to={{
            pathname: "https://mtr.super.site"
          }}
          target="_blank"
        >
          Members Directory
        </Link>
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
        To be determined! please reference token-gated telegram chat for more
        intructions
      </div>
    </div>
  );
};

const JoinInstructions = () => {
  return (
    <div className="intructions">
      <h1>Instructions to join</h1>
      <div>
        <strong>Note:</strong> Before you follow these instructions,{" "}
        <Link to="/tokens">make sure you have 200 $MTRS1 tokens</Link>.
      </div>
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
