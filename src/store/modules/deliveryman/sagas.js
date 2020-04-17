import {takeLatest, call, put, all} from 'redux-saga/effects';

import {api} from '@/services/api';
import * as RootNavigation from '@/services/navigation';

import {Alert} from 'react-native';

import {loginSuccess, loginFailure} from './actions';

export function* login({payload}) {
  try {
    const {id} = payload;

    const response = yield call(api.get, `/deliveryman/${id}`);

    if (response.data.error) {
      Alert.alert('Login failure', response.data.error);
      yield put(loginFailure());
      return;
    }

    const profile = response.data;

    yield put(loginSuccess(profile));

    RootNavigation.navigate('Dashboard');
  } catch (err) {
    Alert.alert(
      'Falha ao entrar no sistema.',
      'Requisição falhou. Tente novamente mais tarde.',
    );
    yield put(loginFailure());
  }
}

export function* logout() {
  RootNavigation.navigate('SignIn');
}

export default all([
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/LOGOUT', logout),
]);
