import React, { useMemo, createContext, useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components";
import DetailCountry from "./Screen/DetailCountry";
import Home from "./Screen/Home";
import { fetchAllCountries } from "./services/country-services";

export const CountryContext = createContext();
function App() {
  const [countryData, setCountryData] = useState(null);

  const fetchData = async () => {
    const data = await fetchAllCountries();
    setCountryData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const countries = useMemo(() => countryData, [countryData]);

  return (
    <CountryContext.Provider value={{ countries }}>
      <div className="App">
        <Header />
        <body className="App-body">
          <Home />
          {/* <DetailCountry/> */}
        </body>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
