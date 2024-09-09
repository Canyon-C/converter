"use client";
import { PlaceholdersAndVanishInputDecimal } from "../ascii/aceInput";
import { useState } from "react";

export const OctalConvert = () => {
  const [octalOutput, setOctalOutput] = useState<string>("");
  const placeholders = [
    "Pick your favorite number",
    "2000",
    "how about 40",
    "90? 100??!",
  ];

  const onSubmit = (value: string) => {
    setOctalOutput(Number(value).toString(8));
  };

  return (
    <div className="ascii-wrapper w-full h-60 flex justify-center align-center">
      <div className="layout-wrapper flex flex-col justify-start items-start w-full">
        <p className="text-blue-500 text-center w-full py-2">
          Decimal to Octal
        </p>
        <div className="flex justify-center w-full px-5">
          <PlaceholdersAndVanishInputDecimal
            placeholders={placeholders}
            onSubmit={onSubmit}
          />
        </div>

        <p className="text-blue-500 w-full text-center pt-14">
          {octalOutput ? octalOutput : "null"}
        </p>
      </div>
    </div>
  );
};
