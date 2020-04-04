export function startDeliveryRequest(id) {
  return {
    type: '@dispatch/START_DELIVERY_REQUEST',
    payload: {id},
  };
}

export function startDeliverySuccess() {
  return {
    type: '@dispatch/START_DELIVERY_SUCCESS',
  };
}

export function startDeliveryFailure(data) {
  return {
    type: '@dispatch/START_DELIVERY_FAILURE',
    payload: {data},
  };
}

export function finishDeliveryRequest(id, file) {
  return {
    type: '@dispatch/FINISH_DELIVERY_REQUEST',
    payload: {id, file},
  };
}

export function finishDeliverySuccess() {
  return {
    type: '@dispatch/FINISH_DELIVERY_SUCCESS',
  };
}

export function finishDeliveryFailure(data) {
  return {
    type: '@dispatch/FINISH_DELIVERY_FAILURE',
    payload: {data},
  };
}

export function reportProblemRequest(id, description) {
  return {
    type: '@dispatch/REPORT_PROBLEM_REQUEST',
    payload: {id, description},
  };
}

export function reportProblemSuccess() {
  return {
    type: '@dispatch/REPORT_PROBLEM_SUCCESS',
  };
}

export function reportProblemFailure(data) {
  return {
    type: '@dispatch/REPORT_PROBLEM_FAILURE',
    payload: {data},
  };
}
