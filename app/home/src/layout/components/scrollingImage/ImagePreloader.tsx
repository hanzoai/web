"use client";

import { useEffect } from "react"

const ImagePreloader = (props: { images: string[]; onImagesLoaded: VoidFunction }) => {
  const { images, onImagesLoaded } = props;

  useEffect(() => {
    let loadedImagesCount = 0;
    const totalImages = images.length;

    images.forEach((src: string) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedImagesCount += 1;
        if (loadedImagesCount === totalImages) {
          onImagesLoaded();
        }
      };
      img.onerror = () => {
        loadedImagesCount += 1;
        if (loadedImagesCount === totalImages) {
          onImagesLoaded();
        }
      };
    })
  }, [images, onImagesLoaded]);

  return null;
}

export default ImagePreloader;