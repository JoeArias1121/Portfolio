import { useState } from "react";
import About from "./pages/about/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="flex justify-center">
        <About />
      </div>
    </div>
  );
}

export default App;
