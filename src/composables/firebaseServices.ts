import { db } from '@fb'
import { collection, addDoc, getDocs } from 'firebase/firestore'; 

export const useFiresbaseServices = () => {
  const getAll = (col: string) => {
    return new Promise((resolve, reject) => {
      getDocs(collection(db, col))
        .then(docs => {
          const data:any = docs.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          return resolve(data)
        })
        .catch(error => reject(error))
    })
  }

  const add = (col: string, data: any) => {
    return new Promise((resolve, reject) => {
      addDoc(collection(db, col), data)
        .then(docRef => resolve(docRef.id))
        .catch(error => reject(error))
    })
  }

  return {
    getAll,
    add, 
  }
}

