import * as actionTypes from '../actions/actions';

const initialState = {
  allNews: [],
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_SUCCESS:
      let newAllNews = action.payload.map((item, index) => {
        let news = {
          ...item,
          key: index.toString(),
          isFavorite: false,
          newsOverlayColor: 'transparent',
        };
        return news;
      });
      return {
        ...state,
        allNews: [...newAllNews],
      };
    case actionTypes.FETCH_NEWS_FAIL:
      return {
        ...state,
        error: true,
      };
    case actionTypes.NEWS_IMPRESSION:
      let temp = [...state.allNews];
      let currentNewsIndex = temp.findIndex(obj => obj.key === action.id);
      temp[currentNewsIndex].isFavorite = !temp[currentNewsIndex]
        .isFavorite;

      return {
        allNews: [...temp],
        error: false,
      };

    case actionTypes.NEWS_OVERLAY_COLOR:
      let newTemp = [...state.allNews];
      let tempCurrentNewsIndex = newTemp.findIndex(obj => obj.key === action.id);
      newTemp[tempCurrentNewsIndex].newsOverlayColor =
        newTemp[tempCurrentNewsIndex].newsOverlayColor === 'transparent'
          ? '#e4e4e473'
          : 'transparent';

      return {
        allNews: [...newTemp],
        error: false,
      };
    default:
      return state;
  }
};

export default reducers;
