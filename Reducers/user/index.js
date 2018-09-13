import { fromJS } from 'immutable';

const FETCHING = 'FETCHING';

const initialState = fromJS({
  currentUser: {},
  fetching: false
});

const ACTION_HANDLERS = {
  [FETCHING]: (state, action) => state.set('fetching', action.payload),
};

export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
