import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex align-items-center">
          <span className="flex-fill mr-15">Todo App</span>
          <FilterTodo />
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
