import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components";
import DetailCountry from "./Screen/DetailCountry";
import Home from "./Screen/Home";
import { fetchAllCountries } from "./services/country-services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "@mui/material";

export const CountryContext = createContext();
function App() {
  const [countriesData, setCountriesData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    const data = await fetchAllCountries();
    setCountriesData(data);
  };
  const darkTheme = {
    body: { backgroundColor: "#202C37", color: "#fff" },
  };
  const lightTheme = {
    body: { backgroundColor: "#fafafa", color: "#000" },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countriesData, setCountriesData, darkMode }}
    >
      <GlobalStyles styles={darkMode ? darkTheme : lightTheme} />
      <div className="App">
        <Header
          handleClick={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        />
        <body className="App-body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<DetailCountry />} />
            </Routes>
          </BrowserRouter>
        </body>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
