import { db } from 'common/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const getProStat = async () => {
  const proStatistics = [];
  const proStatObj = {};

  const q = query(collection(db, 'users'), where('hasPro', '==', true));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    const dateString = data.whenGotPro.toDate().toDateString();

    if (proStatObj[dateString]) {
      proStatObj[dateString] = [...proStatObj[dateString], data];
    } else {
      proStatObj[dateString] = [data];
    }
  });

  for (const [key, value] of Object.entries(proStatObj)) {
    proStatistics.push({
      dateOfGettingPro: new Date(key).toLocaleDateString(),
      count: value.length,
    });
  }

  return proStatistics;
};

export const getAllStat = async () => {
  const allStatistics = [];
  const allStatObj = {};

  const q = query(collection(db, 'users'), orderBy('timeStamp'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    const dateString = data.timeStamp.toDate().toDateString();

    if (allStatObj[dateString]) {
      allStatObj[dateString] = [...allStatObj[dateString], data];
    } else {
      allStatObj[dateString] = [data];
    }
  });

  for (const [key, value] of Object.entries(allStatObj)) {
    allStatistics.push({
      dateOfRegister: new Date(key).toLocaleDateString(),
      count: value.length,
    });
  }

  return allStatistics;
};
