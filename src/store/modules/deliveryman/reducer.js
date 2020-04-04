import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  profile: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        const {profile} = action.payload;
        draft.profile = profile;
        draft.signed = true;
        break;
      }
      case '@auth/LOGOUT': {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
