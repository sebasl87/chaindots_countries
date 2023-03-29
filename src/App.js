import React, { createContext, useState, useEffect } from "react";

import { Header } from "./components";
import DetailCountry from "./Screen/DetailCountry";
import Home from "./Screen/Home";
import { fetchAllCountries } from "./services/country-services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";

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

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <CountryContext.Provider
      value={{ countriesData, setCountriesData, darkMode, isMobile }}
    >
      <GlobalStyles styles={darkMode ? darkTheme : lightTheme} />
      <div className="App">
        <Header
          handleClick={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          isMobile={isMobile}
        />
        <body>
          <Box margin={isMobile ? "32px 16px" : "32px 40px"}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<DetailCountry />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </body>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
