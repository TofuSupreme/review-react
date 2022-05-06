import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleUpdate = (e) => {
    this.props.searchFunction(e.target.value);
  }

  render() {
    const { term } = this.state;
    return (
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
