import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://i.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
