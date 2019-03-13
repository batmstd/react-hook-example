import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      array: [],
      name: ""
    };
  }

  changeName = ({ target: { value } }) => this.setState({ name: value });

  addToList = () => {
    const { name } = this.state;
    if (name === "") {
      return;
    }
    this.setState(({ array, id, name }) => ({
      array: [...array, { id, name }],
      id: id + 1,
      name: ""
    }));
  };

  deleteElement = ({ target: { id } }) =>
    this.setState(({ array }) => array.filter(el => el.id !== Number(id)));

  render() {
    const { name, array } = this.state;
    return (
      <React.Fragment>
        <div className="group">
          <input value={name} onChange={this.changeName} required />
          <label>Todo</label>
        </div>
        <button type="button" onClick={this.addToList}>
          add
        </button>
        {array.map(r => (
          <div key={r.id} className="card">
            {r.id}. {r.name}
            <button className="delete" id={r.id} onClick={this.deleteElement}>
              delete
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default TodoList;
