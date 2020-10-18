import React, { Component } from "react";
import { MyTextField } from "./MyTextField";
import "./resetPassword.css";
import { connect } from "react-redux";
import { openAlert } from "../actions/alert-action";
import { hideComponent } from "../actions/showComponent-action";
import { showLoading, hideLoading } from "../actions/loading-action";
import { post } from "../../API/index";
import history from "../../utilities/History";
export class ResetPassword extends Component {
  state = {
    oldShowPassword: false,
    newShowPassword: false,
    confirmShowPassword: false,
    buttonDisabled: false,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  render() {
    const {
      oldShowPassword,
      newShowPassword,
      confirmShowPassword,
      buttonDisabled,
    } = this.state;
    return (
      <div style={{ padding: "24px 182px 0px 30px" }}>
        <div className="rPContainer">
          <div className="rpTextFieldContainer">
            <MyTextField
              title="كلمة السر القديمة"
              handleClickShowPassword={() => {
                this.setState({ oldShowPassword: !this.state.oldShowPassword });
              }}
              onChange={({ target: { value } }) => {
                this.setState({ oldPassword: value }, () =>
                  this.disableButton()
                );
              }}
              showPassword={oldShowPassword}
            />
            <MyTextField
              title="كلمة السر الجديدة"
              handleClickShowPassword={() => {
                this.setState({ newShowPassword: !this.state.newShowPassword });
              }}
              onChange={({ target: { value } }) => {
                this.setState({ newPassword: value }, () =>
                  this.disableButton()
                );
              }}
              showPassword={newShowPassword}
            />
            <MyTextField
              title="تأكيد كلمة السر"
              handleClickShowPassword={() => {
                this.setState({
                  confirmShowPassword: !this.state.confirmShowPassword,
                });
              }}
              onChange={({ target: { value } }) => {
                this.setState({ confirmPassword: value }, () =>
                  this.disableButton()
                );
              }}
              showPassword={confirmShowPassword}
            />
          </div>
          <div className="Myline"></div>
          <div className="buttoncontainer">
            <button
              onClick={this._reset_password}
              disabled={!buttonDisabled}
              className="resetButtonStyle"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    );
  }
  disableButton = () => {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    this.setState({
      buttonDisabled:
        oldPassword.length > 0 &&
        newPassword.length > 3 &&
        oldPassword !== newPassword &&
        newPassword === confirmPassword,
    });
  };
  _reset_password = async () => {
    this.props.showLoading();
    const { oldPassword, newPassword, confirmPassword } = this.state;
    let { valid, msg } = await post("auth/reset_password", {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_new_password: confirmPassword,
    });
    if (valid) {
      this.props.openAlert("success", msg);
      history.push("/");
      this.props.hideComponent();
    } else {
      this.props.openAlert("error", msg);
    }
    this.props.hideLoading();
  };
}

export default connect(null, {
  openAlert,
  hideComponent,
  showLoading,
  hideLoading,
})(ResetPassword);
