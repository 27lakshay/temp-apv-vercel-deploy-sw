import API from "../config/api";
import settings from "../config/settings";
const axios = require("axios");

export function getDetailAxios(apiKey, id, queryparam, authToken = null) {
  let url = "";
  if (queryparam) {
    url =
      settings.API_ROOT +
      API[apiKey] +
      (id != undefined ? "/" + id : queryparam);
  } else {
    url = settings.API_ROOT + API[apiKey];
    if (id) {
      url = url + "/" + id;
    }
  }
  let reqParams = {
    method: "GET",
    url: url,
  };
  if (authToken) {
    reqParams["headers"] = {};
    reqParams["headers"]["Authorization"] = `${authToken}`;
  }
  return axios(reqParams)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
    .finally(function () {});
}
