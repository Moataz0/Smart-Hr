import React from "react";
import ReactDOM from "react-dom";
import "./portalstyle.css";
import { connect } from "react-redux";
class Modal extends React.Component {
  render() {
    return (
      this.props.visible &&
      ReactDOM.createPortal(
        <div className="modal">{this.props.modalComponent()}</div>,
        document.getElementById("modal-root")
      )
    );
  }
}

const mapStateToProps = (state) => {
  const { modalComponent, visible } = state.loading;
  return {
    modalComponent: modalComponent,
    visible: visible,
  };
};

export default connect(mapStateToProps)(Modal);
