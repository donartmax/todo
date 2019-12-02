import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: []};
  }
  addItem(todoItem) {
    let todoItems = [...this.state.todoItems];
    todoItems.unshift({
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    let todoItems = [...this.state.todoItems];
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    let todoItems = [...this.state.todoItems];
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    console.log(this.state.todoItems);
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
