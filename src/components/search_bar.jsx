import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  componentWillMount() {
    console.log("This will be mounted...pause");
  }

  componentDidMount() {
    console.log("This has been mounted...pause");
  }

  handleUpdate = (e) => {
    this.props.search(e.target.value);
    this.setState({
      term:
        e.target.value
    });
  }

  render() {
    console.log("Search_bar is rendering...");

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
