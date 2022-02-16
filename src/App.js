import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";
function App() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchPhotos} />
      <hr />
      <Row fetchUrl={requests.fetchPhotos} />
    </div>
  );
}

export default App;
