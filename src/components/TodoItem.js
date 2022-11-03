import { useSetRecoilState } from 'recoil';
import { todosState } from '../recoil';

function TodoItem({ todo }) {
  const setTodosState = useSetRecoilState(todosState);

  return (
    <li className="d-flex align-items-center mb-20">
      <>
        <span
          style={{ textDecoration: todo.done && 'line-through' }}
          className="flex-fill mr-15"
        >
          {todo.content}
        </span>
        <button
          className="btn btn-primary mr-15"
          onClick={() =>
            setTodosState((oldTodosState) =>
              oldTodosState.map((ot) =>
                ot._id === todo._id ? { ...todo, done: !todo.done } : ot
              )
            )
          }
        >
          {todo.done ? 'Annuler' : 'Valider'}
        </button>
        <button
          onClick={() =>
            setTodosState((oldTodosState) =>
              oldTodosState.filter((ot) => ot._id !== todo._id)
            )
          }
          className="btn btn-danger mr-15"
        >
          Supprimer
        </button>
        <button className="btn btn-secondary mr-15">Modifier</button>
      </>
    </li>
  );
}

export default TodoItem;
