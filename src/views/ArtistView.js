import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      console.log('test')
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArtistData(data.results);
      console.log('Artist', data.results)
    };
    fetchData();
  }, [id]);

  const navButtons = () => {
      return (
          <div>
              <button onClick={() => navigate(-1)}>Back</button>
              <button onClick={() => navigate('/')}>Home</button>
          </div>
      )
  }

  const justAlbums = artistData.filter((entry) => entry.collectionType === "Album");

  const renderAlbums = justAlbums.map((album, i) => {
    return (
      <Link key={i} to={`/album/${album.collectionId}`}>
        <p>{album.collectionName}</p>
      </Link>
    );
  });

  return (
    <div>
      {navButtons()}
      {renderAlbums}
    </div>
  );
}
