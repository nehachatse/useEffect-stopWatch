import "./styles.css";
import { useEffect, useState } from "react";

const StopWatch = ({ initial }) => {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        return prev + 1;
      });
    }, 1000);
    return () => {
      console.log("cleaning up...");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h3>Stop Watch</h3>
      <h3>{value}</h3>
    </div>
  );
};

export default function App() {
  const [hide, setHide] = useState(false);

  return (
    <div className="App">
      {!hide && <StopWatch initial={0} />}
      <button onClick={() => setHide(!hide)}> Toggle </button>
    </div>
  );
}
