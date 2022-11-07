import { atom, selector, selectorFamily } from 'recoil';
import { getTodoRequest, getTodosRequest } from '../apis';

export const todosState = atom({
  key: 'todosState',
  default: getTodosRequest(),
});

export const filterState = atom({
  key: 'filterState',
  default: 'all',
});

export const selectFilteredTodos = selector({
  key: 'selectFilteredTodos',
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todosState);
    switch (filter) {
      case 'done': {
        return todos.filter((t) => t.done);
      }
      case 'ongoing': {
        return todos.filter((t) => !t.done);
      }
      default: {
        return todos;
      }
    }
  },
});

export const selectTodosData = selector({
  key: 'selectTodosData',
  get: ({ get }) => {
    const todos = get(todosState);
    const total = todos.length;
    const totalDone = todos.filter((t) => t.done).length;
    const totalOngoing = todos.filter((t) => !t.done).length;
    const totalDonePourcentage =
      total > 0 ? Math.floor((totalDone / total) * 100) : 0;
    return {
      total,
      totalDone,
      totalOngoing,
      totalDonePourcentage,
    };
  },
});

export const selectTodoDetails = selectorFamily({
  key: 'selectTodoDetails',
  get: (_id) => async () => {
    return _id && getTodoRequest(_id);
  },
});
