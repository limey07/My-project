import { useState } from "react";

export default function rechner() {
  const [zahl1, setZahl1] = useState<number>(0);
  const [zahl2, setZahl2] = useState<number>(0);
  const [caldif, setCaldif] = useState<string>("+");

  function CalDif(zahl1: number, zahl2: number, caldif: string) {
    switch (caldif) {
      case "+":
        return zahl1 + zahl2;
      case "*":
        return zahl1 * zahl2;
      case "-":
        return zahl1 - zahl2;
      case "/":
        return zahl1 / zahl2;
    }
  }

  return (
    <div className="text-center sm:text-left">
      <div>
        <h1>Rechner</h1>

        <input
          className="border-2 border-black rounded-lg"
          type="number"
          onChange={(e) => {
            setZahl1(parseInt(e.target.value));
          }}
        />

        <input
          className="border-2 border-black rounded-lg"
          type="number"
          onChange={(e) => {
            setZahl2(parseInt(e.target.value));
          }}
        />
        <div>
          <button
            className={`button1
            ${caldif === "+" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setCaldif("+");
            }}
          >
            puls
          </button>
        </div>
        <div>
          <button
            className={`button1
            ${caldif === "-" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setCaldif("-");
            }}
          >
            minus
          </button>
        </div>
        <div>
          <button
            className={`button1
            ${caldif === "*" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setCaldif("*");
            }}
          >
            mal
          </button>
        </div>

        <div>
          <button
            className={`button1
            ${caldif === "/" ? "bg-red-800" : "bg-black"}
            `}
            onClick={() => {
              setCaldif("/");
            }}
          >
            durch
          </button>
        </div>
        {zahl1 && zahl2 ? (
          <p>
            <b>Summe</b>: {CalDif(zahl1, zahl2, caldif)}
          </p>
        ) : null}
      </div>
    </div>
  );
}
