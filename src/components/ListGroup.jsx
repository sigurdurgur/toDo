import { BsTrash } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";

import Context from "../store/context";

const ListGroup = () => {
  const { todos, onEditTodo, onDeleteTodo } = useContext(Context);
  return (
    <ol className="list-group list-group-numbered">
      {todos.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span className="flex-fill">{item}</span>

          <span className="d-flex">
            <span className="EditItem" onClick={() => onEditTodo(index)}>
              <MdModeEditOutline />
            </span>

            <span
              className="RemoveItem mx-2"
              onClick={() => onDeleteTodo(index)}
            >
              <BsTrash />
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
};

export default ListGroup;
