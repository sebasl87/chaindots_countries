export const fetchAllCountries = async () => {
  return fetch(
    `${process.env.REACT_APP_API_URL}all?fields=name,flags,capital,population,region,idd`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export const fetchCountryByName = async ({ countryName }) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}name/${countryName}?fields=name,region,subregion,capital,languages,borders,population,tld,currencies,idd&fullText=true`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};
