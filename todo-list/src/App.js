import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addAsyncTodo } from './store/todoSlice';
import './App.css';

function App() {
  const [text, setText] = useState([]);
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addAsyncTodo(text));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className='App'>
      <InputField
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />
      {status === 'loading' && <div>Loading</div>}
      {error && <div>{error}</div>}
      <TodoList />
    </div>
  );
}

export default App;
