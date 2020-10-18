import Constants from "../../utilities/Constants";

export const setPath = (path) => {
  return {
    type: Constants.getCurrentPath,
    payload: path,
  };
};
