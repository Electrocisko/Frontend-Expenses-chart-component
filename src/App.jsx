import Footer from "./components/footer/Footer";
import Balance from "./components/balance/Balance";
import Card from "./components/card/Card";
import "./app.scss";
import dataLevels from '../../data.json'
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(dataLevels);
  const [levelHeight, setlevelHeight] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      // Perform actions on window resize
      if (window.screen.width <= 375) {
        setlevelHeight(2.5)} else {
          setlevelHeight(2)
        }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main_container">
      <Balance />
      <div className="card_container">
        <Card data={data} levelHeight={levelHeight} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
