import Constants from "../../utilities/Constants";

export const setLookups = (data) => {
  return {
    type: Constants.getMainData,
    payload: data,
  };
};
