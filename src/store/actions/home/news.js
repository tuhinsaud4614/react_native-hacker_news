import * as actionTypes from '../actions';
import axios from 'axios';

export const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchFail = err => {
  return {
    type: actionTypes.FETCH_NEWS_FAIL,
    err: err,
  };
};

export const fetchAllNews = () => {
  return dispatch => {
    let url =
      'https://newsapi.org/v2/everything?q=from=2019-08-22&sortBy=popularity&apiKey=36219d7bceec4596af142cd85b9a3241';
    axios
      .get(url)
      .then(res => {
        dispatch(fetchSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchFail(error));
      });
  };
};
