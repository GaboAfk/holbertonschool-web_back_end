import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((totalRes) => (
      totalRes.forEach((singleRes) => ({
        status: singleRes.status,
        value: singleRes.status === 'fulfilled' ? singleRes.value : String(singleRes.reason),
      }))
    ));
}

/* export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((totalRes) => (totalRes.map((singleRes) => {
      if (singleRes.status === 'fulfilled') {
        return {
          status: singleRes.status,
          value: singleRes.value,
        };
      }
      return {
        status: singleRes.status,
        value: singleRes.reason,
      };
    })));
} */
