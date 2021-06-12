import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Welcome from "./cards/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Searchbar />
    </div>
  );
}

export default App;
