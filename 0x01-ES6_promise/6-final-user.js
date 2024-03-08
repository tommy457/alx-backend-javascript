import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const newArray = [];
  return Promise.allSettled(promises)
    .then((results) => {
      for (const result of results) {
        if (result.status === 'fulfilled') {
          newArray.push({
            status: result.status,
            value: result.value,
          });
        } else {
          newArray.push({
            status: result.status,
            value: `${result.reason}`,
          });
        }
      }
      return newArray;
    });
}
