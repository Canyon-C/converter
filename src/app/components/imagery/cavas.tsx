"use client";
import { useEffect } from "react";
export const Canvas = () => {
  useEffect(() => {
    const c = document.querySelector("canvas");
    const context = c?.getContext("2d");

    const image = new Image();
    image.src =
      "https://media.licdn.com/dms/image/v2/C4E03AQGhKmdVxnRCvQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1603056291249?e=1730937600&v=beta&t=tteM47pBZTBJZggRM1inYqnbP_-YTXA1cYPWNfkSgEQ";
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      context?.drawImage(image, 0, 0);
    };
  }, []);
  return <canvas id="c" height="200" width="200"></canvas>;
};
