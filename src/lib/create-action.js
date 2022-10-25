/**
 * @typedef {Object} Action
 * @property {string} type The action type.
 * @property {object} payload Action payload.
 */

/**
 * @typedef {Function} ActionCreator
 * @param {string} type The action type.
 * @param {object} payload Action payload.
 * @returns {Action}
 */

/**
 * Generates an action creator function.
 * @param {string} type The action type.
 * @param {(...args) => object} fn A function that formats the payload.
 * @returns {ActionCreator}
 */
const createAction = (type, fn = (n) => n) => {
  const actionCreator = (...args) => {
    const action = {
      type,
      payload: fn(...args),
    };

    return action;
  };

  actionCreator.type = type;
  return actionCreator;
};

export default createAction;
