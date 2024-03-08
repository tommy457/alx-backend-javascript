import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((results) => ({ photo: results[0], user: results[1] }))
    .catch(() => ({ photo: null, user: null }));
}
