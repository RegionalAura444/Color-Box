import Box from './Box';
import Inputfield from './Inputfield';
import { useState } from 'react';



function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <h1>Color Box</h1>

      < Box
        colorValue ={colorValue}
        hexValue={hexValue}
        isDarkText = {isDarkText}
      />
      
      < Inputfield
        colorValue={colorValue}
        setColorvalue={setColorValue}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
