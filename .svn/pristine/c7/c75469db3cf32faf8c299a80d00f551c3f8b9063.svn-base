import React from "react";
import "./styleSelectedUser.css";
import hr from "../images/emp.png";
import emp from "../images/hr.png";
import { connect } from "react-redux";
import { showComponent } from "../actions/showComponent-action";
import History from "../../utilities/History";
class SelectedUser extends React.Component {
  component = (title, image, className) => {
    return (
      <div className="logoandtext">
        <img
          src={image}
          alt="Logo"
          className={`${className}`}
          onClick={() => {
            this.props.showComponent();
            alert(title);
            History.push("/home");
          }}
        />
        <div className="underlogo">
          <h4 className="text">{title}</h4>
          <div className="line"></div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          {this.component("موظف", emp, "imageEmp")}
          {this.component("موظف موارد بشرية", hr, "imageHr")}
        </div>
      </div>
    );
  }
}

export default connect(null, { showComponent })(SelectedUser);
