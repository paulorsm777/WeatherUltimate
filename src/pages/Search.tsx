import React, { useState } from "react";
import "../css/pages.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

export default function Search() {
    const [search, setSearch] = useState<string>("");
    const [showMenu, setShowMenu] = useState(false);

    const searchPressed = (city: string) => {
        localStorage.setItem("selectedCity", city);
        window.location.href = "/weather";
    }

  const cities = [
    "Goiânia",
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    "Brasília",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Porto Alegre",
    "Belém",
    "Guarulhos",
    "Campinas",
    "São Luís",
    "São Gonçalo",
    "Maceió",
    "Duque de Caxias",
    "Natal",
    "Teresina",
  ];

  const filteredCities = cities.filter(
    (city) =>
      city.toLowerCase().includes(search.toLowerCase()) && search.length > 0
  );

    function showMenssage(iclass: string) {
        
    }

  return (
    <div className="container-search">
    <header className="App-header">
      <h1>Selecione a cidade</h1>
      <div className="searchContainer">
        <input
          className="citySearch"
          type="text"
          placeholder="Digite a cidade:"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowMenu(e.target.value !== "");
          }}
        />
        <p>Cidades Encontradas:</p>
        {showMenu && (
  <div className="menu">
    {Array.from({ length: Math.ceil(filteredCities.length / 4) }).map((_, rowIndex) => (
      <div className="menu-row" key={rowIndex}>
        {filteredCities.slice(rowIndex * 4, (rowIndex + 1) * 4).map((city) => (
          <button key={city} onClick={() => searchPressed(city)}>
            {city}
          </button>
        ))}
      </div>
    ))}
  </div>
)}
      </div>
    </header>
  </div>
  );
}

