import logo from './logo.svg';
import './App.css';
import { Header } from './Components/HeadersFile';
 // Ensure the correct path
 import { About } from "./Components/About";
import Hero from "./Components/Hero"
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
 
    </div>
  );
}

export default App;
