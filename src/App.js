import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Modal from "./components/Modal"; 
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    // define properties to be used
    this.state = {
      // set to false to show items not marked as complete in UI
      viewCompleted: false,
      // todo item with it's features
      activeItem: {
        title: "",
        description: "",
        due_date: "",
        completed: false,
      },
      // empty list to hold data fetched from API
      todoList: [],
    };
  }

  // async to enable asynchronous operations
  // componentDidMount to allow fetching data using await
  async componentDidMount() {
    // try/catch to hanlde errors
    try {
      // fetch data from api into response
      const res = await fetch("http://localhost:8000/api/todos/");
      // jsonify respone and assign to todoList
      const todoList = await res.json();
      // change previous state of the initial todoList
      this.setState({
        todoList,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // changes Modal state when triggered
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // function that uses built in filter to show completed items from todoList
  renderItems = () => {
    const { viewCompleted } = this.state;
    // a new list to store items to be displayed after filtering
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );
    // display items in newItems list
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between
        align-items-center"
      >
        <span
          // render class based on if the todo is completed or not
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
          {item.due_date}
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
