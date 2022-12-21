import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  "science fiction": [
    { name: "Arrival", rating: "4/5" },
    { name: "Gravity", rating: "3.5/5" },
    { name: "Ex Machina", rating: "3.5/5" }
  ],

  thrillar: [
    {
      name: "Inception",
      rating: "5/5"
    },
    {
      name: "Dunkirk",
      rating: "4.5/5"
    },
    {
      name: "The dark knight series",
      rating: "4.5/5"
    }
  ],
  "crime-thriller": [
    {
      name: "Fight Club",
      rating: "3.5/5"
    },
    {
      name: "Gone Girl",
      rating: "5/5"
    },
    {
      name: "Seven",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("crime-thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}> 🎬 movies </h1>
      <p style={{ fontSize: "smaller", color: "white" }}>
        {" "}
        Checkout my movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid white",
              margin: "1rem 0.3rem",
              color: "white",
              backgroundColor: "transparent"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
