"use client";
import { useEffect, useState } from "react";
export const Canvas = () => {
  let context: CanvasRenderingContext2D | null = null;
  const [RGBPixel, setRGBPixel] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const c = document.getElementById("c") as HTMLCanvasElement;
    context = c?.getContext("2d");

    const image = new Image();
    image.src = "/images/tiger.jpg";
    image.crossOrigin = "anonymous";
    image.onload = () => {
      context?.drawImage(image, 0, 0);
      const imageData = context?.getImageData(0, 0, 2, 2);
      const pixelData = imageData?.data;
      const pixels: JSX.Element[] = [];
      if (pixelData) {
        for (let i = 0; i < pixelData.length; i += 4) {
          const red = pixelData[i];
          const green = pixelData[i + 1];
          const blue = pixelData[i + 2];
          pixels.push(
            <p>
              <span className="text-red-500">Red:{red} </span>
              <span className="text-green-500">Green:{green} </span>
              <span className="text-blue-500">Blue:{blue}</span>
            </p>
          );
        }
      }
      setRGBPixel(pixels);
    };
  }, []);

  return (
    <div className="pb-5 w-full flex flex-col gap-5 justify-center items-center">
      <p className="pt-5">My cat Tiger :3</p>

      <canvas
        className="px-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/3"
        id="c"
        height="375"
        width="500"
      ></canvas>
      <div>
        {RGBPixel.map((pixel) => {
          return pixel;
        })}
      </div>
    </div>
  );
};
