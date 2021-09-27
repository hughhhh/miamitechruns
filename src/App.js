import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import prompt from "./prompt.png";

export default function App() {
  return (
    <div className="App">
      {/* <img src={prompt} width={750} height={750} /> */}
      <h1>🏀</h1>
      <h1 className="t">Miami Tech Runs</h1>
      <div className="p">
        Bringing together the nation's emerging and established Founders, VCs,
        and Creatives to build community, hoops, and mindfulness
      </div>
      <br></br>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          window.location.href = "https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMDc0NzE2NTUx";
        }}
      >
        Click here to get early access
      </Button>{" "}
    </div>
  );
}
