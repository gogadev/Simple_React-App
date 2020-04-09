import React, { Component } from "react";

import CardList from "./components/card-list/CardList";
import Search from "./components/search-component/Search";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchBox: "",
      error: null,
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  onSearch = (e) => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    const { monsters, searchBox } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    return (
      <React.Fragment>
        <h1 className="main-title">Monsters</h1>
        <Search onSearch={this.onSearch} />
        <CardList monsters={filteredMonsters} />
      </React.Fragment>
    );
  }
}

export default App;
