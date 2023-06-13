import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./Requests";
function App() {
  return (
    <div className="App">
      <h1>Netflix clone frontend</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendings} />
    </div>
  );
}

export default App;
