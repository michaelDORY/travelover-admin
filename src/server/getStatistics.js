import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../common/firebase';
import { useEffect, useState } from 'react';

const getStatistics = async () => {
  let proStatistics = [];

  const q = query(collection(db, 'users'), where('hasPro', '==', true));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    proStatistics.push({
      dateOfGettingPro: item.data().whenGotPro,
      email: item.data().email,
      count: 1,
    });
  });

  return { proStatistics };
};

export default getStatistics();
