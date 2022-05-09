import { db } from 'common/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const getStatistics = async () => {
  const proStatistics = [];

  const q = query(collection(db, 'users'), where('hasPro', '==', true));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    proStatistics.push({
      dateOfGettingPro: data.whenGotPro.toDate().toLocaleDateString(),
      count: 200,
    });
  });

  return proStatistics;
};

export default getStatistics;
