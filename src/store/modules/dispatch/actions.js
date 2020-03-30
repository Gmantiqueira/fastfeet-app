export function startDeliveryRequest(data) {
  return {
    type: '@delivery/START_DELIVERY_REQUEST',
    payload: {data},
  };
}

export function startDeliverySuccess() {
  return {
    type: '@delivery/START_DELIVERY_SUCCESS',
  };
}

export function startDeliveryFailure(data) {
  return {
    type: '@delivery/START_DELIVERY_FAILURE',
    payload: {data},
  };
}

export function deleteDeliveryRequest(data) {
  return {
    type: '@delivery/DELETE_DELIVERY_REQUEST',
    payload: {data},
  };
}

export function deleteDeliverySuccess(data) {
  return {
    type: '@delivery/DELETE_DELIVERY_SUCCESS',
  };
}

export function deleteDeliveryFailure(data) {
  return {
    type: '@delivery/DELETE_DELIVERY_FAILURE',
    payload: {data},
  };
}

export function updateDeliveryRequest(data) {
  return {
    type: '@delivery/UPDATE_DELIVERY_REQUEST',
    payload: {data},
  };
}

export function updateDeliverySuccess(data) {
  return {
    type: '@delivery/UPDATE_DELIVERY_SUCCESS',
  };
}

export function updateDeliveryFailure(data) {
  return {
    type: '@delivery/UPDATE_DELIVERY_FAILURE',
    payload: {data},
  };
}
