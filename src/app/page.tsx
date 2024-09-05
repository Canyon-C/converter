import { Canvas } from "./components/imagery/cavas";
import { AsciiInputs } from "./components/ascii/ascii-inputs";
import { DecimalConvert } from "./components/broad-convert/binary-convert";
import { OctalConvert } from "./components/broad-convert/octal-convert";

export default function Home() {
  return (
    <main className="m-0 p-0">
      <AsciiInputs />
      <DecimalConvert />
      <OctalConvert />
      <Canvas />
    </main>
  );
}
