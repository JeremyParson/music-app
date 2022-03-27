import "./App.css";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { useEffect, useState, Suspense } from "react";
import { createResource as fetchData } from "./helper";
import Spinner from "./spinner";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  useEffect(() => {
    if (search) {
      setData(fetchData(search));
      console.log(data);
    }
  }, [search]);

  return (
    <div className="App">
      {message}
      <SearchBar setSearch={setSearch} />
      {renderGallery()}
    </div>
  );
}

export default App;
