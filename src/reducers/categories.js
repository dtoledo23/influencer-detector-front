/*global API_HOST*/
import { Actions, State, Effect } from 'jumpstate';

Effect('getCategories', (payload) => {
  fetch(API_HOST + '/api/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
  .then(res => res.json())
  .then(() => {
    Actions.confirmMessageSent();
  })
  .catch(function(ex) {
    throw new Error('Error found: ' + ex);
  });
});

const categories = State({
  initial: { categories: [] },
  
  resetContactMessage: (state, payload) => {
    Object.assign({}, state, {categories: payload });
  },

});

export default categories;