export const fetchAllCountries = async () => {
  return fetch(
    `${process.env.REACT_APP_API_URL}?fields=name,flags,capital,population,region,idd`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};
