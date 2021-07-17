import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Carousel } from './Components/Carousel';
import Card from './Components/Card';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel />
      <Card title="title" subtitle="subtitle" description="dscription" link1="click here" link2="show more"/>
    </div>
  );
}

export default App;
