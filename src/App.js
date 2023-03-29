import "./App.css";
import { Header } from "./components";
import Home from "./Screen/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
        <Home />
      </body>
    </div>
  );
}

export default App;
