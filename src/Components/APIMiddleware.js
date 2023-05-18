const BaseURL = "https://localhost:7091/api/";
const BaseHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const get = (page) => {
  return fetch(`${BaseURL}${page}`, {
    headers: BaseHeader,
  })
    .then((response) => response.json())
    .then((json) => json);
};
export const authget = (page, token) => {};
export const post = (page, data) => {
  fetch(`${BaseURL}${page}`, {
    // Enter your IP address here
    method: "POST",
    mode: "cors",
    headers: BaseHeader,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};
export const authPost = (page, data, token) => {
  BaseHeader["Authorization"] = "Bearer " + token;
  fetch(`${BaseURL}${page}`, {
    // Enter your IP address here
    method: "POST",
    mode: "cors",
    headers: BaseHeader,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};
