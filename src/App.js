import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";
import React, { useState, useEffect } from "react";
function App() {
  const [bannerPhoto, setBannerPhoto] = useState([]);

  return (
    <div>
      <Banner bannerPhoto={bannerPhoto} />
      <hr />
      <Row fetchUrl={requests.fetchPhotos} setBannerPhoto={setBannerPhoto} />
    </div>
  );
}

export default App;
