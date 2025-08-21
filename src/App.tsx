import { useState } from "react";
import About from "./pages/about/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <p>Home</p>
      <About />
    </div>
  );
}

export default App;
