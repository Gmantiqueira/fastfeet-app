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

export function endDeliveryRequest(id, file) {
  return {
    type: '@dispatch/END_DELIVERY_REQUEST',
    payload: {id, file},
  };
}

export function endDeliverySuccess() {
  return {
    type: '@dispatch/END_DELIVERY_SUCCESS',
  };
}

export function endDeliveryFailure(data) {
  return {
    type: '@dispatch/END_DELIVERY_FAILURE',
    payload: {data},
  };
}

export function reportProblemRequest(data) {
  return {
    type: '@dispatch/REPORT_PROBLEM_REQUEST',
    payload: {data},
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
