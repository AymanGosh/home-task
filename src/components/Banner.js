import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "axios";
import "./Banner.css";
export default function Banner({ fetchUrl }) {
  const [photo, setPhoto] = useState([]);
  useEffect(async () => {
    const request = await axios.get(fetchUrl);
    let rand = Math.floor(Math.random() * 10);
    setPhoto(request.data[rand]);
  }, []);
  return (
    <div className="banner">
      <img
        className="banner_photo"
        src={photo.download_url}
        alt={photo.author}
      />
      <h1>{photo.author}</h1>
    </div>
  );
}
