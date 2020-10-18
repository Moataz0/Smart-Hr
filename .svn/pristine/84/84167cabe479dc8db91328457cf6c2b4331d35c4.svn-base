import Constants from "../../utilities/Constants";
import { Loading } from "../loading";
export const showLoading = () => {
  return {
    type: Constants.showModal,
    payload: {
      visible: true,
      modalComponent: Loading,
    },
  };
};

export const hideLoading = () => {
  return {
    type: Constants.hideModal,
    payload: {
      visible: false,
      modalComponent: Loading,
    },
  };
};
