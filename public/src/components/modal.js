import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.props.handleToggleModal();
  }

  render() {
    if(this.props.isModalOpen) {
      return <div
        className="_custom-modal" 
        onClick={this.handleClick}>
      </div>
    }
  };
}