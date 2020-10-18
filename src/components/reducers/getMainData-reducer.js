import Constants from "../../utilities/Constants";
export default (mainData = {}, { type, payload }) => {
  switch (type) {
    case Constants.getMainData:
      return payload;
    default:
      return mainData;
  }
};