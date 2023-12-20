import { useEffect, useState } from "react";

type Color = {
  name: string;
  color: string;
  correct: boolean;
};

const COLORS: Color[] = [
  {
    name: "rojo",
    color: "#f00",
    correct: false,
  },
  {
    name: "verde",
    color: "#f00",
    correct: false,
  },
  {
    name: "amarillo",
    color: "#0f0",
    correct: false,
  },
  {
    name: "azul",
    color: "#00f",
    correct: false,
  },
];

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finished">(
    "initial"
  );
  const [time, setTime] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameColors, setGameColors] = useState<Color[]>([]);
  useEffect(() => {
    let interval: any;

    if (status === "playing") {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [status]);
  return (
    <main>
      <header>
        <h1>{0} puntos</h1>
        <h1>{time} segundos</h1>
      </header>
      {status === "playing" && (
        <section>
          <span>Blanco</span>
        </section>
      )}
      <footer>
        {status === "initial" && (
          <button onClick={() => setStatus("playing")}>Jugar</button>
        )}
        {status === "finished" && (
          <button onClick={() => setStatus("initial")}>Reiniciar</button>
        )}
      </footer>
    </main>
  );
}

export default App;
