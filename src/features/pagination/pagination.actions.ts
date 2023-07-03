import fetchPaginationState from './pagination.gateway';

export const FILL_PAGINATION_STATE = 'PAGINATION/FILL_PAGINATION_STATE';

type ReturnPagination = {
  type: string;
  payload: {
    pagination: object;
  };
};

const fillPaginationState = (pagination: any): ReturnPagination => {
  return {
    type: FILL_PAGINATION_STATE,
    payload: {
      pagination,
    },
  };
};

const getPaginationState = () => {
  return function (dispatch: (arg0: any) => any) {
    fetchPaginationState().then(state => dispatch(fillPaginationState(state)));
  };
};

export default getPaginationState;
