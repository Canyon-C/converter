"use client";
import { PlaceholdersAndVanishInputDecimal } from "../ascii/aceInput";
import { useState } from "react";

export const DecimalConvert = () => {
  const [binaryOutput, setBinaryOutput] = useState<string>("");
  //   const [octalOutput, setOctalOutput] = useState<string>("");
  const placeholders = [
    "16",
    "perhaps 200?",
    "Maybe we are feeling lucky? 777",
    "24?",
  ];

  const onSubmit = (value: string) => {
    setBinaryOutput(Number(value).toString(2));
    console.log("Submitted Successfully");
  };

  return (
    <div className="ascii-wrapper w-full h-60 flex justify-center align-center">
      <div className="layout-wrapper flex flex-col justify-start items-start w-full">
        <p className="text-green-500 text-center w-full py-2">
          Decimal to Binary
        </p>
        <PlaceholdersAndVanishInputDecimal
          placeholders={placeholders}
          onSubmit={onSubmit}
        />
        <p className="text-green-500 w-full text-center pt-14">
          {binaryOutput ? binaryOutput : "null"}
        </p>
      </div>
    </div>
  );
};
