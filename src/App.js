import React, { useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {

  const [value, setValue] = useState(0.2);

  const sliderProps = {
    min: 0.0,
    max: 1.0,
    step: 0.05,
    marks: { 0.0: 0, 0.1: 10, 0.2: 20, 0.3: 30, 0.4: 40, 0.5: 50, 0.6: 60, 0.7: 70, 0.8: 80, 0.9: 90, 1.0: 100 }
  }

  return (
    <div className="App">
      <h3>Slider Component in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <Slider
        value={value}
        onChange={val => setValue(val)}
        {...sliderProps}
      />
      <div style={{ marginTop: 40 }}><b>Selected Value: </b>{value}</div>
    </div>
  );
}

export default App;
