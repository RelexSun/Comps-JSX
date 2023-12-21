import "./App.css";
import Button from "./Button";

function App() {
  return (
    // TODO: primary={true} === primary
    <div>
      <div>
        <Button success rounded outline>
          Click me!!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          HEHEHEHE!
        </Button>
      </div>
    </div>
  );
}

export default App;
