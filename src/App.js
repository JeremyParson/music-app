import "./App.css";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumView from "./views/AlbumView";
import ArtistView from "./views/ArtistView";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchBar setSearch={setSearch} />
                {data.length ? <Gallery data={data} /> : <div>No Tracks</div>}
              </Fragment>
            }
          />
          <Route path="/album/:id"  element={<AlbumView />}/>
          <Route path="/artist/:id"  element={<ArtistView />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
