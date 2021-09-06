import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import prompt from "./prompt.png";

export default function App() {
  return (
    <div className="App">
      <img src={prompt} width={750} height={750} />
      <br></br>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          window.location.href = "https://t.me/joinchat/jH3tmn43OTI5Mzlh";
        }}
      >
        Click here to get early access
      </Button>{" "}
    </div>
  );
}
