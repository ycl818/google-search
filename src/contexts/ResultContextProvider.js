import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  // /videos, /news, /images
  const getResults = async (type) => {
    setisLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "7a67f5116bmsh18390da1a98dcdfp1dc430jsn9c9814ba865a",
      },
    });

    const data = await response.json();
    console.log(data);

    setResults(data);
    setisLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
