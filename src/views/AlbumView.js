import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AlbumView() {
  const [albumData, setAlbumData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`;
    const handleFetch = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setAlbumData(data.results);
    };
    handleFetch();
  }, [id]);

  const justSongs = albumData.filter(
    (entry) => entry.wrapperType === "track"
  );

  const renderSongs = justSongs.map((song, i) => {
    return (
      <p key={i}>{song.trackName}</p>
    );
  });

  return (
    <div>
      <h2>The id passed was: {id}</h2>
      {renderSongs}
    </div>
  );
}
