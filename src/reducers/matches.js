// import {
//   FIND_MATCHES,
// } from '../constants/criteria';

// import centers from '../data/centers.json';
// import { size, pull, forEach, has, some, isEqual, filter, map, intersection, intersectionWith, every } from 'lodash';

// const patientProfile = {
//   info: {},
//   criteria: {
//     needs: [],
//     languages: [],
//     insurances: [],
//   }
// };

// export default function findMatches(state, action) {
//   switch (action.type) {
//     case FIND_MATCHES:
//       console.log('matches state', state.criteria);
//       let matchingCenters = (
//         map(centers, (center) => {
//           // check to see that there is a match for each criterion (needs, insurances, languages)
//           const isMatch = every(state.criteria, (value, criterion) => {
//             return intersection(value, center.criteria[criterion]).length > 0
//           });
//           if(isMatch) return center.info;
//         })
//       );
//       matchingCenters = pull(matchingCenters, undefined)
//       console.log(matchingCenters);
//       return {
//         ...state,
//         matches: matchingCenters
//       };
//     default:
//       return state;
//   }
// }

// // export default function matches(patients, centers) {
  // // for each patient, iterate through every center to check for potential matches
  // return map(patients, (patient, key) => {
  //   const matchingCenters = (
  //     map(centers, (center, key) => {
  //       // check to see that there is a match for each criterion (needs, insurances, languages)
  //       const isMatch = every(patient.criteria, (value, criterion) => {
  //         return intersection(value, center.criteria[criterion]).length > 0
  //       });
  //       if(isMatch) return center.info;
  //     })
  //   );
  //   return pull(matchingCenters, undefined)
  // })
// // }
