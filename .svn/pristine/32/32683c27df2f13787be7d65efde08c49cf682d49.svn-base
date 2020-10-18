import Constants from "../../utilities/Constants";

export default (
  alertOptions = { open: false, alertType: "", alertMessage: "" },
  { type, payload }
) => {
  switch (type) {
    case Constants.openAlert:
      return {
        open: true,
        alertType: payload.alertType,
        alertMessage: payload.alertMessage,
      };

    case Constants.closeAlert:
      return {
        open: false,
        alertType: payload.alertType,
        alertMessage: payload.alertMessage,
      };
    default:
      return alertOptions;
  }
};
