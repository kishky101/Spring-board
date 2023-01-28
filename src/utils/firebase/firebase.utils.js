// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    doc, 
    getDoc, 
    setDoc,
    getDocs,
    writeBatch,
    query

} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1LdH_1bVyweA0Wa1-9_-L1po4cx_8n4",
  authDomain: "spring-board-9032f.firebaseapp.com",
  projectId: "spring-board-9032f",
  storageBucket: "spring-board-9032f.appspot.com",
  messagingSenderId: "272967520122",
  appId: "1:272967520122:web:460b627361c89b7b64d0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addDocToFirebase =async (nameOfCollection, objectsToAdd) => {
    try {
        const collectionRef = collection(db, nameOfCollection);
        const batch = writeBatch(db);

        objectsToAdd.forEach((object) => {
            const docRef = doc(collectionRef, object.courseName.toLowerCase());
            batch.set(docRef, object);
        })
        
        await batch.commit();
        //console.log('done')
    } catch (error) {
        //console.log(error)
    }
    
}

export const getDocFromFirebase = async (nameOfCollection) => {
    const collectionRef = collection(db, nameOfCollection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}


export const createUserRegistrationDocument = async (userObj, collection, additionalInformation, key) => {
    if (!userObj) return

    const userDocRef = doc(db, collection, userObj[key]);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                ...userObj,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('An Error occured', error.message)
        }
    }

    return userSnapShot;
}
