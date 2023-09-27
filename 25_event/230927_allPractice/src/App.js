import {useState} from 'react';
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
  const [value, setValue] = useState('');
  const [backColor, setBackcolor] = useState('black');
  const [strColor, setStrcolor] = useState('white');
  const [fruit, setFruit] = useState('apple');
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setFruit={setFruit} setBackcolor={setBackcolor} setStrcolor={setStrcolor} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setValue={setValue}/>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result value={value} fruit={fruit} backColor={backColor} strColor={strColor}/>
      </div>
    </>
  );
}

export default App;
