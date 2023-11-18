import { IMAGE_REQUEST_FAILURE, IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from "../actions/types";

// const initialState = {
//     panel: null,
//     loading: false,
//   };

  const panelReducer = (state = {panel: ""}, action) => {
    switch (action.type) {
      case IMAGE_REQUEST_PENDING:
        return { ...state, loading: true };
      case IMAGE_REQUEST_SUCCESS:
        return { ...state, loading: false, panel: true };
      case IMAGE_REQUEST_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default panelReducer;