import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./Requests";
function App() {
  return (
    <div className="App">
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendings} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrendings} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
