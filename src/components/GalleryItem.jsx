import React, { useState } from "react";
import { Link } from "react-router-dom";

function GalleryItem(props) {
  let [view, setView] = useState(false);

  const simpleView = (
    <div>
      <img
        src={props.song.artworkUrl100}
        alt={`Image of ${props.song.trackName} track cover art.`}
      />
      <h3>{props.song.trackName}</h3>
      <h4>{props.song.collectionName}</h4>
    </div>
  );

  const detailedView = (
    <div>
      <img
        src={props.song.artworkUrl100}
        alt={`Image of ${props.song.trackName} track cover art.`}
      />
      <h2>{props.song.trackName}</h2>
      <h3>
        <Link to={`/artist/${props.song.artistId}`}>{props.song.artistName}</Link>
      </h3>
      <h3>
        <Link to={`/album/${props.song.collectionId}`}>
          {props.song.collectionName}
        </Link>
      </h3>
      <h4>{props.song.primaryGenreName}</h4>
      <h4>{props.song.releaseDate}</h4>
    </div>
  );

  return (
    <div onClick={() => setView(!view)} style={{ display: "inline-block" }}>
      <p>{props.title}</p>
      {view ? detailedView : simpleView}
    </div>
  );
}

export default GalleryItem;
