import { useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import { selectFilteredTodos } from '../recoil';

function TodoList() {
  const filteredTodos = useRecoilValue(selectFilteredTodos);

  return (
    <>
      <ul className="mb-20">
        {filteredTodos &&
          filteredTodos.map((t) => <TodoItem key={t._id} todo={t} />)}
      </ul>
    </>
  );
}

export default TodoList;
