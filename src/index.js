import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Component = () => {
  const [id, setId] = useState(1);
  const [array, setArray] = useState([]);
  const [name, setName] = useState("");

  const changeName = ({ target: { value } }) => setName(value);
  const addToList = () => {
    if (name === "") {
      return;
    }
    setArray(prev => [...prev, { id, name }]);
    setId(id => id + 1);
    setName("");
  };
  const deleteElement = ({ target: { id } }) =>
    setArray(prev => prev.filter(el => el.id !== Number(id)));
  return (
    <React.Fragment>
      <div className="group">
        <input value={name} onChange={changeName} required />
        <label>Todo</label>
      </div>
      <button type="button" onClick={addToList}>
        add
      </button>
      {array.map(r => (
        <div key={r.id} className="card">
          {r.id}. {r.name}
          <button className="delete" id={r.id} onClick={deleteElement}>
            delete
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
