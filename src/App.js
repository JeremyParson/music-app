import "./App.css";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { Fragment, useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumView from "./views/AlbumView";
import ArtistView from "./views/ArtistView";
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import MusicContext from './contexts/musicContext'
import Spinner from "./spinner";
import {createResource as fetchData} from './helper'

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <MusicContext.Provider value={data}>
            <Gallery />
          </MusicContext.Provider>
        </Suspense>
      );
    }
  };

  useEffect(() => {
    if (search) {
      setData(fetchData(search))
    }
  }, [search]);

  return (
    <div className="App">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
      
      </Nav>
      {message}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchBar setSearch={setSearch} />
                {renderGallery()}
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
