import Constants from "../../utilities/Constants";
export default (path = "", action) => {
  switch (action.type) {
    case Constants.getCurrentPath:
      return action.payload;
    default:
      return path;
  }
};
