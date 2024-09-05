"use client";
import { PlaceholdersAndVanishInput } from "./aceInput";
import { useState } from "react";

export const AsciiInputs = () => {
  const [ASCIIOutput, setASCIIOutput] = useState<string>("");
  const placeholders = ["abc", "abcd", "abcdef", "abcdef(even g?)"];

  const onSubmit = (value: string) => {
    let decimal = "";
    for (let i = 0; i < value.length; i++) {
      const character = value.charAt(i);
      decimal += character.charCodeAt(0) + " ";
    }
    setASCIIOutput(decimal);
    console.log("Submitted Successfully");
  };

  return (
    <div className="ascii-wrapper w-full h-60 flex justify-center align-center">
      <div className="layout-wrapper flex flex-col justify-start items-start w-full">
        <p className="text-center w-full py-2 text-red-500">ASCII to Decimal</p>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onSubmit={onSubmit}
        />
        <p className="text-red-500 w-full text-center pt-14">
          {ASCIIOutput ? ASCIIOutput : "null"}
        </p>
      </div>
    </div>
  );
};
