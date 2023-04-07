import logo from './logo.svg';
import ColorBlock from './components/ColorBlock';
import './App.css';
import ColorForm from './components/ColorForm';
import { useState } from 'react';

const DEFAULT_COLOR = [
  'violet', 
  'blue', 
  'lightblue', 
  'green', 
  'greenyellow', 
  'yellow', 
  'orange', 
  'red'
]

function App() {
let [colors, setColors] = useState(DEFAULT_COLOR);

const addToColors= newColor => {
  setColors([...colors, newColor])
}

  let colorMap = colors.map((colorString, index) => {
    return <ColorBlock color={colorString} key={index} />
  });


  return (
    <div className="App">
      {colorMap}
      <ColorForm addToColors={addToColors}/>
    </div>
  );
}

export default App;
