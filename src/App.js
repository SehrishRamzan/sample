
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        {/* <Route path="/" exact component={Home}/>
        <Route path="/trade"  component={Home}/>
        <Route path="/invest"  component={Home}/> */}

      
    </BrowserRouter>
  );
}

export default App;
