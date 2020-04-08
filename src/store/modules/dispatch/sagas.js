import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as RootNavigation from '@/services/navigation';

import {Alert} from 'react-native';

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
    const deliverymanId = yield select(state => state.deliveryman.profile.id);

    const {data} = yield call(api.put, `delivery/${id}/withdraw`, {
      deliverymanId,
    });

    if (data.error) {
      yield put(startDeliveryFailure());
      Alert.alert('Erro', data.error);
      return;
    }

    yield put(startDeliverySuccess());

    RootNavigation.navigate('Dashboard');
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

    const data = new FormData();
    data.append('file', {
      uri: file.uri,
      name: `signature_${id}.jpg`,
      type: 'image/jpg',
    });

    const signatureId = yield call(api.post, 'files', data);

    yield call(api.put, `delivery/${id}/finish`, {
      signatureId: signatureId.data.id,
    });

    yield put(finishDeliverySuccess());
    Alert.alert('Sucesso', 'Encomenda entregue com sucesso!');
    RootNavigation.navigate('Dashboard');
  } catch (err) {
    console.log('err', err);
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

    RootNavigation.goBack();
    yield put(reportProblemSuccess());
  } catch (err) {
    Alert.alert(
      'Erro',
      'Erro ao enviar informações ao reportar problema. Tente novamente.',
    );
    yield put(reportProblemFailure());
  }
}

export default all([
  takeLatest('@dispatch/START_DELIVERY_REQUEST', withdrawDelivery),
  takeLatest('@dispatch/FINISH_DELIVERY_REQUEST', finishDelivery),
  takeLatest('@dispatch/REPORT_PROBLEM_REQUEST', reportProblem),
]);
