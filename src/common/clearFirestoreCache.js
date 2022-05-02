
const clearFirestoreCache = () => {
  try {
    //this -> globalThis
    const map = this['_reactFirePreloadedObservables'];
    Array.from(map.keys()).forEach(
      (key) => key.includes('firestore') && map.delete(key),
    );
  } catch (e) {
    console.log(e);
  }
};
export default clearFirestoreCache;
