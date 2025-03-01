import { Circle } from "react-feather";

export default function SizeDemo() {
  const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];
  return (
    <>
      <h1>Size Demo</h1>
      <div className="flex">
        {sizeMap.map((size, index) => (
          <Circle color="black" fill="black" size={size} key={index} />
        ))}
      </div>
    </>
  );
}
