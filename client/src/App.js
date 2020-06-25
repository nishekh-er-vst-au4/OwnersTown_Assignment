import React from "react";
import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import axios from "axios";
import List from "./components/accounts/list";

class App extends React.Component {
  state = {
    data: [],
  };
  onSearchSubmit = async (term) => {
    const response = await axios.get(`/tweets?q=${term}`);
    this.setState({ data: response.data.data.data.statuses });
  };
  render() {
    // console.log(this.state.data);
    return (
      <div>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
