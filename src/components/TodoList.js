import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import { todosState } from '../recoil';

function TodoList() {
  const todos = useRecoilValue(todosState);

  return (
    <>
      <ul className="mb-20">
        {todos && todos.map((t) => <TodoItem key={t._id} todo={t} />)}
      </ul>
    </>
  );
}

export default TodoList;
