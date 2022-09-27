import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="FirstName" />
      <Todo text="LastName" />
      <Todo text="DOB" />
    </div>
  );
}

export default App;
