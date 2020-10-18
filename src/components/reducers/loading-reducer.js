import Constants from "../../utilities/Constants";
export default (visible = false, action) => {
  switch (action.type) {
    case Constants.showModal:
      return action.payload;
    case Constants.hideModal:
      return action.payload;
    default:
      return {
        visible: false,
        modalComponent: "",
      };
  }
};
