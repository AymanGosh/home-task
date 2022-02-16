import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "axios";
import "./Banner.css";
export default function Banner({ bannerPhoto }) {
  return (
    <div className="banner">
      <img
        className="banner_photo"
        src={bannerPhoto.download_url}
        alt={bannerPhoto.author}
      />
      <h1>{bannerPhoto.author}</h1>
    </div>
  );
}
