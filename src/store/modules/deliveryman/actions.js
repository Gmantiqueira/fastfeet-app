export function loginRequest(id) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: {id},
  };
}

export function loginSuccess(id, profile) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: {id, profile},
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
