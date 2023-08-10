import { constant } from "../constant/";

const init_state = {
  id: 0,
};

export const userReducer = (state = init_state, action) => {
  if (action.type === constant.USER_LOGIN)
    return {
      ...state,
      ...action.payload,
    };
  else if (action.type === constant.USER_LOGOUT) return init_state;

  return state;
};
