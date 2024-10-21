import "./App.css";
import MyComp from "./components/Hello";
import ClassComp from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <MyComp name="Kamal" />
      <MyComp name="John" />
      <MyComp name="Mark" />
      <ClassComp />
    </div>
  );
}

export default App;
