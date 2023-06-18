import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function Addcolor() {
  const [color, setColor] = useState("skyblue");
  // const colorlist=["pink","blue","orange","green"]
  const [colorlist, setColorlist] = useState(["pink", "blue", "orange", "green"]);
  const styles = {
    backgroundColor: color
  };
  return (
    <div>
      <div className="Add-color">
        <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} value={color} />
        <button onClick={() => setColorlist([...colorlist, color])}>Add Color</button>
      </div>
      {colorlist.map((clr) => (
        <ColorBox color={clr} />))}


    </div>
  );
}
