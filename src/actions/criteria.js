import {
  ADD_NEED,
  ADD_LANGUAGE,
  ADD_INSURANCE,
  REMOVE_NEED,
  REMOVE_LANGUAGE,
  REMOVE_INSURANCE,
  FIND_MATCHES,
} from '../constants/criteria';

export function addNeed(need) {
  return {
    type: ADD_NEED,
    need,
  };
}

export function addLanguage(language) {
  return {
    type: ADD_LANGUAGE,
    language,
  };
}

export function addInsurance(insurance) {
  return {
    type: ADD_INSURANCE,
    insurance,
  };
}

export function removeNeed(need) {
  return {
    type: REMOVE_NEED,
    need,
  };
}

export function removeLanguage(language) {
  return {
    type: REMOVE_LANGUAGE,
    language,
  };
}

export function removeInsurance(insurance) {
  return {
    type: REMOVE_INSURANCE,
    insurance,
  };
}

export function findMatches() {
  return {
    type: FIND_MATCHES,
  };
}

