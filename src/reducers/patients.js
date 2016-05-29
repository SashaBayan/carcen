import {
  ADD_NEED,
  ADD_LANGUAGE,
  ADD_INSURANCE,
  REMOVE_NEED,
  REMOVE_LANGUAGE,
  REMOVE_INSURANCE,
  FIND_MATCHES
} from '../constants/criteria';
import { size, pull, forEach, has, some, isEqual, filter, map, intersection, intersectionWith, every } from 'lodash';
import centers from '../data/centers.json';

const patientProfile = {
  info: {},
  criteria: {
    needs: [],
    languages: [],
    insurances: [],
  }
};

export default function updateCriteria(state = patientProfile, action) {
  switch (action.type) {
    case ADD_NEED:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          needs: [...state.criteria.needs, action.need]
        }
      };

    case ADD_LANGUAGE:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          languages: [...state.criteria.languages, action.language]
        }
      };
    case ADD_INSURANCE:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          insurances: [...state.criteria.insurances, action.insurance]
        }
      };
    case REMOVE_NEED:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          needs: state.criteria.needs.filter(need => need !== action.need),
        }
      };
    case REMOVE_LANGUAGE:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          languages: state.criteria.languages.filter(language => language !== action.language),
        }
      };
    case REMOVE_INSURANCE:
      return {
        ...state,
        criteria: {
          ...state.criteria,
          insurances: state.criteria.insurances.filter(insurance => insurance !== action.insurance),
        }
      };
    case FIND_MATCHES:
      let matchingCenters = (
        map(centers, (center) => {
          // check to see that there is a match for each criterion (needs, insurances, languages)
          const isMatch = every(state.criteria, (value, criterion) => {
            return intersection(value, center.criteria[criterion]).length > 0
          });
          if(isMatch) return center.info;
        })
      );
      matchingCenters = pull(matchingCenters, undefined)
      return {
        ...state,
        matches: matchingCenters
      };
    default:
      return state;
  }
}
