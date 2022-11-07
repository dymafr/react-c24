import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { createTodoRequest } from '../apis';
import { todosState } from '../recoil';

function AddTodo() {
  const [inputValue, setInputValue] = useState('');
  const setTodosState = useSetRecoilState(todosState);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  async function handleClick() {
    const newTodo = await createTodoRequest({
      content: inputValue,
      done: false,
      edit: false,
    });
    setTodosState((oldTodosState) => [...oldTodosState, newTodo]);
    setInputValue('');
  }

  return (
    <div className="d-flex align-items-center mb-20">
      <input
        value={inputValue}
        onChange={handleOnChange}
        className="flex-fill mr-15"
        type="text"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter todo
      </button>
    </div>
  );
}

export default AddTodo;
