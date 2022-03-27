import "./App.css";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import MusicContext from './contexts/MusicContext'

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search == "") return;
    const fetchData = async () => {
      document.title = `${search} Music`;
      const query = search.split(" ").join("+");
      const response = await fetch(
        API_URL + query
      );
      const json = await response.json();
      if (json.results.length > 0) {
        setData(json.results);
        setMessage("Songs found");
      } else {
        setMessage("No songs found");
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="App">
      {message}
      <MusicContext.Provider value={data}>
        <SearchBar setSearch={setSearch} />
        {data.length ? <Gallery /> : <div>No Tracks</div>}
      </MusicContext.Provider>
    </div>
  );
}

export default App;
