import "./App.css";
import countryData from "../resources/countryData.json";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [related, setRelated] = useState([]);

  const checkRelatedCountries = (val) => {
    const filteredCountries = countryData.filter((country) =>
      country.name.toLowerCase().startsWith(val.toLowerCase())
    );
    setRelated(filteredCountries.map((country) => country.name));
  };

  useState(() => {
    checkRelatedCountries("");
  });

  return (
    <div className="container">
      <h1>Search</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          checkRelatedCountries(e.target.value);
        }}
        placeholder="Enter a country name..."
      />
      <div className="country-list">
        {value === "" ? (
          countryData.map((country, index) => (
            <p key={index}>{country.name}</p>
          ))
        ) : (
          related.map((name, index) => (
            <p key={index}>{name}</p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
