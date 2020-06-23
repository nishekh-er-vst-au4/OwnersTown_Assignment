import React from "react";
import logo from "./tweet.png";
import "./searchbar.css";

class SearchBar extends React.Component {
  state = { value: "" };

  onInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchSubmit(this.state.value);
  };
  render() {
    return (
      <div className="container">
        <p className="h5 header">
          TWEET <img src={logo} alt="tweet" className="image" /> SEARCH
        </p>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              type="search"
              name="search-name"
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
