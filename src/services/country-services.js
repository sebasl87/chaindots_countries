export const fetchAllCountries = async () => {
  return fetch(
    `${process.env.REACT_APP_API_URL}all?fields=name,flags,capital,population,region,idd`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export const fetchCountryByName = async (countryName) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}name/${countryName}?fields=name,region,subregion,capital,languages,borders,population,tld,currencies,flags,idd&fullText=true`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export const fetchCountryBorders = async (countryBordersName) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}alpha?codes=${countryBordersName}&fields=name`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export const fetchCountriesByRegion = async (region) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}region/${region}?fields=name,flags,capital,population,region,idd`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export const fetchCountriesByName = async (countryName) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}name/${countryName}?fields=name,flags,capital,population,region,idd`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};
