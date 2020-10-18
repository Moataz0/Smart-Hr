import Constants from "../../utilities/Constants";

export const openAlert = (alertType, alertMessage, timeToClose = 3000) => (
  dispatch,
  getState
) => {
  dispatch({
    type: Constants.openAlert,
    payload: {
      alertType,
      alertMessage,
    },
  });

  setTimeout(() => {
    dispatch(closeAlert({ alertType, alertMessage }));
  }, timeToClose);
};

export const closeAlert = (payload) => {
  return {
    type: Constants.closeAlert,
    payload,
  };
};
