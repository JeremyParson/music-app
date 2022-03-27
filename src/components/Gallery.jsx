import React from "react";
import GalleryItem from "./GalleryItem";
import MusicContext from "../contexts/MusicContext";

function Gallery(props) {
  let music = React.useContext(MusicContext)
  const renderGalleryItems = music.map((song, i) => (
    <GalleryItem song={song} key={i} />
  ));

  return <div className="gallery">{renderGalleryItems}</div>;
}

export default Gallery;
