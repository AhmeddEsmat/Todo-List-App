import "./list.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Input from "./input";

const List = ({ items, completeItem, editItem, deleteItem }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const update = (value) => {
    console.log(value);
    editItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Input edit={edit} onSubmit={update} />;
  }

  return items.map((item, index) => (
    <div
      className={
        item.isComplete ? "todo todo-complete" : "todo todo-incomplete"
      }
      key={index}
    >
      <div className="todo-all">
        <div className="todo-span" onClick={() => completeItem(item.id)}>
          <span className="todo-text">
            {item.value}
          </span>
        </div>
        <div className="icons">
          <TiEdit
            onClick={() => setEdit({ id: item.id, value: item.value })}
            className="edit-icon"
          />
          <RiCloseCircleLine
            onClick={() => deleteItem(item.id)}
            className="delete-icon"
          />
        </div>
      </div>
      {/* <div className="icons"></div> */}
    </div>
  ));
};
export default List;
