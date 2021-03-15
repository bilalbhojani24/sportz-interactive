import react, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Body from "./Body";
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e`
      );
      const filteredData = result?.data?.playerList.filter((item) => {
        return item.PFName.toLowerCase().includes(player.toLowerCase()) || item.TName.toLowerCase().includes(player.toLowerCase());
      });
      setData(filteredData.reverse());
      setIsLoading(false);
    };
    fetchItems();
  }, [player]);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <div className="row mx-0">
          <div className="col-12 col-md-8 mx-auto">
          <h3 className="heading">SPORTZ INTERACTIVE</h3>
          <input
          className="inputText"
            type="text"
            placeholder="Search player"
            value={player}
            onChange={(e) => {
              setPlayer(e.target.value);
            }}
          />
          </div>
          
        </div>
        <Body data={data} />
        </>
      )}
    </>
  );
}

export default App;
