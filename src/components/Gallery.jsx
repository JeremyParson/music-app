import React, {useContext} from "react";
import GalleryItem from "./GalleryItem";
import MusicContext from "../contexts/musicContext";

function Gallery(props) {
  const data = useContext(MusicContext).result.read()
  console.log(data)


  const renderGalleryItems = data.map((song, i) => (
    <GalleryItem song={song} key={i} />
  ));

  return <div className="gallery">{renderGalleryItems}</div>;
}

export default Gallery;
