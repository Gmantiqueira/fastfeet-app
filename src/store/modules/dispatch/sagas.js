import {takeLatest, call, put, all} from 'redux-saga/effects';
import * as RootNavigation from '@/services/navigation';

import api from '@/services/api';

import {
  startDeliverySuccess,
  startDeliveryFailure,
  finishDeliverySuccess,
  finishDeliveryFailure,
  reportProblemSuccess,
  reportProblemFailure,
} from './actions';

export function* withdrawDelivery({payload}) {
  try {
    const {id} = payload;

    yield call(api.put, `/delivery/${id}/withdraw`);

    RootNavigation.navigate('Dashboard');

    yield put(startDeliverySuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações de retirada. Tente novamente.',
    );
    yield put(startDeliveryFailure());
  }
}

export function* finishDelivery({payload}) {
  try {
    const {id, file} = payload;

    console.log(payload);

    // const signatureId = yield call(api.post, 'files', file);

    // yield call(api.put, `/delivery/${id}/finish`, {signatureId});

    yield put(finishDeliverySuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações de finalização de entrega. Tente novamente.',
    );
    yield put(finishDeliveryFailure());
  }
}

export function* reportProblem({payload}) {
  try {
    const {id, description} = payload;

    yield call(api.post, `delivery/${id}/problems`, {description});

    yield put(reportProblemSuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações ao reportar problema. Tente novamente.',
    );
    yield put(reportProblemFailure());
  }
}

export function* cancelDelivery({payload}) {
  try {
    const {id} = payload;

    yield call(api.put, `problem/${id}/cancel-delivery`);

    yield put(reportProblemSuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações ao cancelar encomenda. Tente novamente.',
    );
    yield put(reportProblemFailure());
  }
}

export default all([
  takeLatest('@dispatch/START_DELIVERY_REQUEST', withdrawDelivery),
  takeLatest('@dispatch/FINISH_DELIVERY_REQUEST', finishDelivery),
  takeLatest('@dispatch/REPORT_PROBLEM_REQUEST', reportProblem),
  takeLatest('@dispatch/CANCEL_DELIVERY_REQUEST', cancelDelivery),
]);
