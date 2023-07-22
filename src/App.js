import Header from "../src/Components/Header";
import Wordle from "./Components/Wordle";
import "./App.css";
// import HeaderNavbar from '../src/Components/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
        <div>
          <Wordle />
        </div>
    </div>
  );
}

export default App;
