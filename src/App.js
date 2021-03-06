import "./styles.css";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { ToastContainer } from "react-toastify";
import Modal from "./components/Modal";
import { useContext } from "react";

import Context from "./store/context";

function App() {
  const { editTodo } = useContext(Context);

  return (
    <div className="container mt-4 w-20">
      <Form />
      <ListGroup />
      {editTodo && <Modal />}
      <ToastContainer />
    </div>
  );
}

export default App;
