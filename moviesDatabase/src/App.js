import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

const MOVIES_DATA_BASE =
  "https://react-http-3cd7d-default-rtdb.europe-west1.firebasedatabase.app/movies.json";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Instead of fetch().then().then().catch() we can use async-await.
      const response = await fetch(MOVIES_DATA_BASE);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // Timeout to see the Loading message.
      await new Promise((r) => setTimeout(r, 500));

      setMovies(loadedMovies);
    } catch (err) {
      // Timeout to see the Error message.
      await new Promise((r) => setTimeout(r, 500));

      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  // Load the data when the component is initialized.
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    try {
      const response = await fetch(MOVIES_DATA_BASE, {
        method: "POST", // By default is GET.
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      fetchMoviesHandler();
    } catch (err) {
      // Timeout to see the Error message.
      await new Promise((r) => setTimeout(r, 500));

      setError(err.message);
    }
  }

  let content = <p>Found no movies.</p>;

  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading data ...</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
