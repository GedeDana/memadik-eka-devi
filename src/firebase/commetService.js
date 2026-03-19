import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addComment = async ({ name, message }) =>{
  const docRef = await addDoc(
    collection(db, "comments"),
    {
      name: name,
      comment: message,
      createdAt: new Date()
    }
  );


  return {
      success: true,
      id: docRef.id
  }
}; 

const getComments = async () => {
    const querySnapshot = await getDocs(
        query(
            collection(db,"comments"),
            orderBy("createdAt","desc")
        )
    );
    const data = querySnapshot.docs.map(doc => {
        const data = doc.data();

        return{
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate().toISOString()
        }
    });

    return data;
};

export {
    addComment,
    getComments
}