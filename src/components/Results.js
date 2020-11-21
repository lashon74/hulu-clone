import axios from "../axios";
import React, { useEffect, useState } from "react";
import "../styles/Results.css";
import VideoCard from "./VideoCard";
import requests from "./requests";

function Results({selctedOption}) {
  const [movies, setmovies] = useState([]);

  // run this code every time the results component loads/ mounts
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie}/>
      ))}
    </div>
  );
}

export default Results;
