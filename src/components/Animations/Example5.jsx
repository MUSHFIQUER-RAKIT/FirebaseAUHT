import { useState } from "react";
import demos from "../../data/example5";
import importDemo from "../../utils/importDemo";

export default function Example5() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemo = async file => {
    const Demo = await importDemo(file);
    const DemoComponent = <Demo />;

    setSelectedDemo(DemoComponent);
  };

  return (
    <div>
      <h1>Reat Lazy Loading...</h1>
      <div>
        {demos.map(demo => (
          <button
            key={demo.id}
            className="bg-pink-500 p-3 rounded cursor-pointer m-3"
            onClick={() => selectDemo(demo.file)}
          >
            {demo.name} Demo
          </button>
        ))}
      </div>
      <div>{selectedDemo}</div>
    </div>
  );
}
