// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../common/firebase';
// import { useEffect, useState } from 'react';
//
// const useStatistics = () => {
//   const [proStatistics, setProStatistics] = useState([]);
//
//   useEffect(async () => {
//     const q = query(collection(db, 'users'), where('hasPro', '==', true));
//
//     const querySnapshot = await getDocs(q);
//
//     querySnapshot.forEach((item) => {
//       setProStatistics((prev) => [
//         ...prev,
//         {
//           dateOfGettingPro: item.data().whenGotPro,
//           email: item.data().email,
//         },
//       ]);
//     });
//   }, []);
//
//   return { proStatistics };
// };
//
// export default useStatistics();
