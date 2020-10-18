import Constants from "../../utilities/Constants";

export default (show = false, action) => {
  switch (action.type) {
    case Constants.showComponent:
      return true;
    case Constants.hideComponent:
      return false;
    default:
      return show;
  }
};
