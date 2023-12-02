import map from "lodash/map";
import size from "lodash/size";
import last from "lodash/last";
import replace from "lodash/replace";

const { REACT_APP_API_BASE_PATH: API_BASE_PATH } = process.env;

const ROUTES_OBJ = {
  login: `https://dummyjson.com/auth/login`,
};

/**
 * getRoute creates the URL through provided routeName & params arguments
 * @param  {string} routeName   any object name of ROUTES_OBJ e.g. login
 * @param  {Object} [params={}] param values replace with strings present <...>.
 * @return {string}             URL
 * @TODO: implement routing for array based data, if the value is an array then
 */
const getRoute = (routeName, params = {}) => {
  let url = ROUTES_OBJ[routeName];
  const result = map(params, (val, key) => {
    val = Array.isArray(val) ? val.join(",") : val;
    url = replace(url, new RegExp(`<${key}>`, "g"), val);
    return url;
  });
  url = size(result) > 0 ? last(result) : url;
  return url;
};

export default getRoute;
