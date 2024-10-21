import "./App.css";
import MyComp from "./components/Hello";
import ClassComp from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <MyComp name="Kamal">This is a children props</MyComp>
      <MyComp name="John">
        <button>Action</button>
      </MyComp>

      <MyComp name="Mark" />
      <ClassComp name="Kamal" />
      <ClassComp name="John" />
      <ClassComp name="Mark" />
    </div>
  );
}

export default App;
