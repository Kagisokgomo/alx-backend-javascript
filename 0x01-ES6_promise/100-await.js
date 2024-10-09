import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1');
    const userResponse = await createUser('Guillaume', 'Salva');

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
