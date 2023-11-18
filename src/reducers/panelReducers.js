import { IMAGE_REQUEST_FAILURE, IMAGE_REQUEST_PENDING, IMAGE_REQUEST_SUCCESS } from "../actions/types";

// const initialState = {
//     panel: null,
//     loading: false,
//   };

  const panelReducer = (state = {panel: ""}, action) => {
    switch (action.type) {
      case IMAGE_REQUEST_PENDING:
        return {  loading: true };
      case IMAGE_REQUEST_SUCCESS:
        return { loading: false, panel: action.payload };
      case IMAGE_REQUEST_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default panelReducer;