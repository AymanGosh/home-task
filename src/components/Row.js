import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "axios";
import "./Row.css";

export default function Row({ fetchUrl, setBannerPhoto }) {
  const [photos, setPhotos] = useState([]);
  useEffect(async () => {
    const request = await axios.get(fetchUrl);
    setPhotos(request.data);
    let rand = Math.floor(Math.random() * 10);
    setBannerPhoto(request.data[rand]);
  }, [fetchUrl]);

  return (
    <div className="row_posters">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            className={`row_poster `}
            src={photo.download_url}
            alt={photo.author}
            title={photo.author}
            onClick={() => {
              setBannerPhoto(photo);
            }}
          />
        </div>
      ))}
    </div>
  );
}
