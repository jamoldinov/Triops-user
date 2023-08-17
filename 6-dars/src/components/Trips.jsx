import React from "react";
import { useState } from "react";
import { useFech } from "../hooks/useFech";
import "./Trip.css";

function Trips() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data, loading, error } = useFech(url);
  console.log(data);

  return (
    <div className="trip-list">
      {loading && <h1>Loading...</h1>}
      {error && <h1>NOT FOUND</h1>}
      <ul>
        {data &&
          data.map((trip) => {
            return (
              <li key={trip.title}>
                <h2>Title: {trip.title}</h2>
                <h3>Location: {trip.loc}</h3>
                <p>Price: {trip.price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          Europe trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
}

export default Trips;
