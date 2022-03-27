import React from "react";
import GalleryItem from "./GalleryItem";

function Gallery(props) {
  const data = props.data.result.read()

  const renderGalleryItems = data.map((song, i) => (
    <GalleryItem song={song} key={i} />
  ));

  return <div className="gallery">{renderGalleryItems}</div>;
}

export default Gallery;
