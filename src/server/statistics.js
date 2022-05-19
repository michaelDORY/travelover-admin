import { db } from 'common/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getProStat = async () => {
  const proStatistics = [];
  const proStatObj = {};

  const q = query(collection(db, 'users'), where('hasPro', '==', true));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    const dateString = data.whenGotPro.toDate().toString();
    console.log(dateString);

    if (proStatObj[dateString] !== undefined) {
      proStatObj[dateString] = [...proStatObj[dateString], data];
    } else {
      proStatObj[dateString] = [data];
    }

    for (const [key, value] of Object.entries(proStatObj)) {
      proStatistics.push({
        dateOfGettingPro: new Date(key).toLocaleDateString(),
        count: value.length,
      });
    }
  });

  return proStatistics;
};
