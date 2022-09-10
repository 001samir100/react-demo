import React, { useState } from "react";
const data = [
  { name: "samir", age: 12 },
  { name: "shrestha", age: 14 },
  { name: "shankar", age: 15 },
  { name: "shiva", age: 16 },
];

const App = () => {
  const [demoData, setDemoData] = useState(data);
  const changeData = (age) => {
    //set option selected according to given age
  };
  return (
    <div>
      <select>
        {demoData.map((d) => {
          return (
            <option key={d.age} value={d.age}>
              {d.name}
            </option>
          );
        })}
      </select>

      <button onClick={() => changeData(15)}>Click me</button>
    </div>
  );
};

export default App;
