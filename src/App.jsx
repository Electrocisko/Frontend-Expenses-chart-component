import Footer from "./components/footer/Footer";
import Balance from "./components/balance/Balance";
import Card from "./components/card/Card";
import "./app.scss";
import dataLevels from '../../data.json'
import { useState } from "react";

function App() {


  const [data, setData] = useState(dataLevels);

  return (
    <div className="main_container">
      <Balance />
      <div className="card_container">
        <Card   data={data} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
