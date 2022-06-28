import { db } from 'common/firebase';
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

export const getComments = async () => {
  const comments = [];

  const q = query(collection(db, 'comments'), orderBy('timeStamp', 'desc'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    const id = item.id;
    const date = item.data().timeStamp.toDate().toLocaleDateString();
    comments.push({ ...data, timeStamp: date, id });
  });

  return comments.sort((a) => (a.status === 'pending' ? -1 : 1));
};

export const updateComment = async (commentId, newStatus) => {
  try {
    const docRef = doc(db, 'comments', commentId);

    await updateDoc(docRef, { status: newStatus });
  } catch (e) {
    return false;
  }
};
