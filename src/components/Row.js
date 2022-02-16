import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "axios";
import "./Row.css";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const indexOfDefaultPhoto = 2;

export default function Row({ fetchUrl, setBannerPhoto }) {
  const [photos, setPhotos] = useState([]);
  useEffect(async () => {
    const request = await axios.get(fetchUrl);
    setPhotos(request.data);
    setBannerPhoto(request.data[indexOfDefaultPhoto]);
  }, [fetchUrl]);

  const nextPage = () => {
    console.log("nextPage");
  };

  return (
    <div className="row_posters">
      <MdSkipPrevious onClick={nextPage} className="row_gallery" />
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
      <MdSkipNext onClick={nextPage} className="row_gallery" />
    </div>
  );
}
