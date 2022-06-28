import { db } from 'common/firebase';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

export const getProStat = async () => {
  const proStatistics = [];
  const proStatObj = {};

  const q = query(
    collection(db, 'users'),
    where('hasPro', '==', true),
    orderBy('whenGotPro'),
  );

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

export const getRegistrationStat = async () => {
  const regStat = [];
  const regStatObj = {};

  const q = query(collection(db, 'users'), orderBy('timeStamp'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    const data = item.data();
    const dateString = data.timeStamp.toDate().toDateString();

    if (regStatObj[dateString]) {
      regStatObj[dateString] = [...regStatObj[dateString], data];
    } else {
      regStatObj[dateString] = [data];
    }
  });

  for (const [key, value] of Object.entries(regStatObj)) {
    regStat.push({
      dateOfRegister: new Date(key).toLocaleDateString(),
      count: value.length,
    });
  }

  return regStat;
};

export const getMostPopularPlaces = async () => {
  const placesStat = [];

  const q = query(collection(db, 'places'), orderBy('views', 'desc'), limit(5));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    placesStat.push(item.data());
  });

  return placesStat;
};

export const getTopRatedPlaces = async () => {
  const placesStat = [];

  const q = query(
    collection(db, 'places'),
    orderBy('rating.mark', 'desc'),
    limit(5),
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    placesStat.push(item.data());
  });

  return placesStat.map((item) => {
    return { ...item, ratingMark: item.rating.mark };
  });
};
