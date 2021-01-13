import React, { Component } from "react";
import { Item } from "./Item.js";

export default class ToDoList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch("https://morning-retreat-34664.herokuapp.com/items")
      .then((resp) => resp.json())
      .then((data) => this.setState({ items: data }));
  }

  mapItems = () => {
    return this.state.items.map((item) => {
      return (
        <Item content={item.content} completed={item.completed} key={item.id} />
      );
    });
  };

  render() {
    return (
      <table>
        <tbody>{this.mapItems()}</tbody>
      </table>
    );
  }
}
