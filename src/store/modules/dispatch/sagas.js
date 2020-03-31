import {takeLatest, call, put, all} from 'redux-saga/effects';
import * as RootNavigation from '@/services/navigation';

import api from '@/services/api';

import {startDeliverySuccess, startDeliveryFailure} from './actions';

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

    const signatureId = yield call(api.post, 'files', file);

    yield call(api.put, `/delivery/${id}/finish`, {signatureId});

    yield put(startDeliverySuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações de finalização de entrega. Tente novamente.',
    );
    yield put(startDeliveryFailure());
  }
}

export default all([
  takeLatest('@dispatch/START_DELIVERY_REQUEST', withdrawDelivery),
  takeLatest('@dispatch/START_DELIVERY_REQUEST', finishDelivery),
]);
