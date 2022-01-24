import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Message from"./components/Message";

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name="Jahanzaib" heroName="Spiderman">
        <p>This is a children elemenet fetch testing</p>
      </Greet>
      <Greet name="Kashif" heroName="Hulk">
        <button>Action</button>
      </Greet>
      <Greet name="Sikandar" heroName="Superman" />
      <Welcome name="Jahanzaib" heroName="Spiderman" />
      <Welcome name="Kashif" heroName="Hulk" />
      <Welcome name="Sikandar" heroName="Superman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
