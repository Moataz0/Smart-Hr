import Axios from "./api";

export const post = async (url, body) => {
  try {
    const { data } = await Axios.post(`${url}`, body);
    return data;
  } catch (error) {
    return (
      (error.response && error.response.data) ||
      (error.request && {
        valid: false,
        msg: "تم ارسال الطلب ولكن لم يتم الرد",
      }) || {
        valid: false,
        msg: "حدث مشكلة اثناء الاتصال بالسيرفر",
      }
    );
  }
};

export const get = async (url, params = {}) => {
  try {
    const { data } = await Axios.get(`${url}`, { params });
    return data;
  } catch (error) {
    return (
      (error.response && error.response.data) ||
      (error.request && {
        valid: false,
        msg: "تم ارسال الطلب ولكن لم يتم الرد",
      }) || {
        valid: false,
        msg: "حدث مشكلة اثناء الاتصال بالسيرفر",
      }
    );
  }
};
