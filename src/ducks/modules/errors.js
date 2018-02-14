/* eslint-disable max-len */

import { actionTypes as errorActionTypes } from './protocol';

const ERROR = 'ERRORS/ERROR';
const ACKNOWLEDGE_ERROR = 'ERRORS/ACKNOWLEDGE_ERROR';

const initialState = {
  errors: [],
  acknowledged: true,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ERROR:
    case errorActionTypes.DOWNLOAD_PROTOCOL_FAILED:
    case errorActionTypes.IMPORT_PROTOCOL_FAILED:
    case errorActionTypes.LOAD_PROTOCOL_FAILED:
      console.error(action.error); // eslint-disable-line
      return {
        ...state,
        acknowledged: false,
        errors: [...state.errors, action.error],
      };
    case ACKNOWLEDGE_ERROR:
      return {
        ...state,
        acknowledged: true,
      };
    default:
      return state;
  }
}

const acknowledge = () => ({
  type: ACKNOWLEDGE_ERROR,
});

const errorAction = e => ({
  type: ERROR,
  error: e,
});

const friendlyErrorMessage = message =>
  (error) => {
    if (error.friendlyMessage) { throw error; }

    // eslint-disable-next-line no-param-reassign
    error.friendlyMessage = message;
    throw error;
  };

const actionCreators = {
  acknowledge,
  error: errorAction,
};

const actionTypes = {
  ERROR,
  ACKNOWLEDGE_ERROR,
};

export {
  actionCreators,
  actionTypes,
  friendlyErrorMessage,
};