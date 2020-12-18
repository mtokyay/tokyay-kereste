import { apiRequest } from "./util";

function subscribe(data) {
  return apiRequest("newsletter", "POST", data);
}
// eslint-disable-next-line
export default { subscribe };
