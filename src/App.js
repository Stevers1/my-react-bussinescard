import Person from "./components/Person"
import './App.css'
import Btns from "./components/Btns";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return(
    <div className="container">
      <Person/>
      <Btns />
      <About />
      <Footer/>
    </div>
  )
}

export default App;