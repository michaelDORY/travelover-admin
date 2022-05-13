import { auth, db } from 'common/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const loginAdmin = async (email, password) => {
  const q = query(collection(db, 'admins'), where('email', '==', email));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.size) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch {
      return false;
    }
  }
  return false;
};
