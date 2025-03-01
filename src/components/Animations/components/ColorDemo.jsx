import { Circle } from "react-feather";

export default function ColorDemo() {
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <>
      <h1>Color Demo</h1>
      <div className="flex">
        {colorMap.map((color, index) => (
          <Circle color={color} fill={color} size={128} key={index} />
        ))}
      </div>
    </>
  );
}
