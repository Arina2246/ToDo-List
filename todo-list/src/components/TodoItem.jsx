import { useDispatch } from "react-redux";
import { removeAsyncTodo, toggleAsyncComplete } from "../store/todoSlice";


const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();
    return (
        <li key={id}>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleAsyncComplete(id))}
        />
        <span>{title}</span>
        <span
          className='deleteButton'
          onClick={() => dispatch(removeAsyncTodo(id))}
        >
          &times;
        </span>
      </li>
    );
  };
  
  export default TodoItem;