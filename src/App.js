import Draggable from 'react-draggable';
import './App.css';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className='App' >
      <h1>Extern labs Image slider || you can move it using drag and drop </h1>
      
      <Draggable>
      <div>
        <Slider/>
      </div>
      </Draggable>
     
    </div>
  );
}

export default App;
