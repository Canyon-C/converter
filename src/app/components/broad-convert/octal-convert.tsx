"use client";
import { PlaceholdersAndVanishInputDecimal } from "../ascii/aceInput";
import { useState } from "react";

export const OctalConvert = () => {
  const [binaryOutput, setBinaryOutput] = useState<string>("");
  //   const [octalOutput, setOctalOutput] = useState<string>("");
  const placeholders = [
    "Pick your favorite number",
    "2000",
    "how about 40",
    "90? 100??!",
  ];

  const onSubmit = (value: number) => {
    setBinaryOutput(Number(value).toString(8));
    console.log("Submitted Successfully");
  };

  return (
    <div className="ascii-wrapper w-full h-60 flex justify-center align-center">
      <div className="layout-wrapper flex flex-col justify-start items-start w-full">
        <p className="text-blue-500 text-center w-full py-2">
          Decimal to Octal
        </p>
        <PlaceholdersAndVanishInputDecimal
          placeholders={placeholders}
          onSubmit={onSubmit}
        />
        <p className="text-blue-500 w-full text-center pt-14">
          {binaryOutput ? binaryOutput : "null"}
        </p>
      </div>
    </div>
  );
};
