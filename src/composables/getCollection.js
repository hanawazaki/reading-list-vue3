import { ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from '@firebase/firestore'

const getCollection = (c, q) => {
  const documents = ref(null)

  // collection reference
  let colRef = collection(db, c)
  if (q) {
    colRef = query(colRef, where(...q))
  }

  const unsub = onSnapshot(colRef, snapshot => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id }); //loop + push data colRef melalui snapshot ke dalam obj baru variable docs
    });
    documents.value = results; //masukan data yang sudah diloop dalam var docs ke dalam ref books
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })


  return { documents }

}

export default getCollection