import { FILL_PAGINATION_STATE } from './pagination.actions';

const initialState: any[] = [];

const paginationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FILL_PAGINATION_STATE:
      return {
        ...state,
        paginationState: action.payload.pagination,
      };
    default:
      return state;
  }
};

export default paginationReducer;
