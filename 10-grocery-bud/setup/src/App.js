import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEdition] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      showAlert(true, "success", `${name} edited`);
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEdition(false);
      setEditId(null);
      setName("");
    } else {
      //add list show alert

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      showAlert(true, "success", `${name}: Added`);
      setName("");
    }
  };

  const clearList = () => {
    showAlert(true, "danger", "Clear the List of Items");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "Item Deleted");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEdition(true);
    setEditId(id);
    setName(editItem.title);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type });
  };

  const onChangeInput = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitForm}>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. Eggs "
            value={name}
            onChange={onChangeInput}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}></List>
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
