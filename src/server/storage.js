import { storage } from 'common/firebase';
import { uploadBytes } from 'firebase/storage';
import uniqid from 'uniqid';

export const uploadImageToStorage = async (file) => {
  const imageId = uniqid();
  const storageRef = ref(storage, imageId);
  try {
    const res = await uploadBytes(storageRef, file);
    return res.ref.name;
  } catch (e) {
    return '';
  }
};
