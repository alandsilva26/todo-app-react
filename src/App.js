import React from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import todoData from "./todoData";

// function App() {

// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((item) => {
        if (item.id == id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodo,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
