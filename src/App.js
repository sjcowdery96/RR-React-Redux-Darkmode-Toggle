import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { setOne, setTwo, setThree, setFour, setFive } from './features/modeSlice';
import Button from 'react-bootstrap/Button';

function App() {
  // And include the useDispatch hook...
  const dispatch = useDispatch()
  //extract the data from the Slice
  const modeData = useSelector((state) => state.mode)
  //create a method to handle clicking 
  const toggleMode = () => {
    console.log(modeData)
    //creates a switch statement to cycle through our styleModes
    switch (modeData.name) {
      case 'basic':
        console.log(modeData.name)
        dispatch(setTwo())
        break;
      case 'funky':
        console.log(modeData)
        console.log(modeData.name)
        dispatch(setThree())
        break;
      case 'spicy':
        console.log(modeData)
        console.log(modeData.name)
        dispatch(setFour())
        break;
      case 'magestic':
        console.log(modeData)
        console.log(modeData.name)
        dispatch(setFive())
        break;
      case 'imaginary':
        console.log(modeData)
        console.log(modeData.name)
        dispatch(setOne())
        break;
    }
  }
  return (
    <div style={{ 'backgroundColor': modeData.color5, 'color': modeData.color2 }} className="App">
      <Nav />
      <ContentWrapper />
      <Button variant="primary" size="lg" onClick={() => { toggleMode() }}>change theme</Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
