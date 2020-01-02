import * as actionTypes from '../actions/actions';

const initialState = {
  searchTypes: 'All',
  searchTypesBy: 'Popularity',
  searchTypesFor: 'All Time',
  categories: {
    searchTypes: [{All: 'all'}, {Stories: 'stories'}, {Comment: 'comment'}],
    searchTypesBy: [{Popularity: 'popularity'}, {Date: 'date'}],
    searchTypesFor: [
      {'All Time': 'all time'},
      {'Last 24h': 'last 24h'},
      {'Past Week': 'past week'},
      {'Past Month': 'past month'},
      {'Past Year': 'past year'},
      {'Custom Range': 'custom range'},
    ],
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CUSTOM_PICKER_VALUE_CHANGE:
      return {
        ...state,
        [action.valueChange[1]]: action.valueChange[0],
      };
    default:
      return state;
  }
};

export default reducers;
