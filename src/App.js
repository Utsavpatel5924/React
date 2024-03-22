import logo from './logo.svg';
import './App.css';
import Heading from './component/Heading';
import Para from './component/Para';
import Img from './component/Img';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Para/>
      <Img/>
      <div><List/></div>
      
    </div>
  );
}

export default App;
