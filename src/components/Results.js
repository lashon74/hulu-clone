import axios from "./axios";
import React, { useEffect, useState } from "react";
import "../styles/Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

function Results({ selctedOption }) {
  const [movies, setmovies] = useState([]);

  // run this code every time the results component loads/ mounts
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selctedOption);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selctedOption]); // selectedoption is a dependency for the use effect

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
