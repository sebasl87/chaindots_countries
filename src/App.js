import "./App.css";
import { Header } from "./components";
import DetailCountry from "./Screen/DetailCountry";
import Home from "./Screen/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
        {/* <Home /> */}
        <DetailCountry/>
      </body>
    </div>
  );
}

export default App;
