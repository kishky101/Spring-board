// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  getDocs,
  writeBatch,
  query,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addDocToFirebase = async (nameOfCollection, objectsToAdd) => {
  try {
    const collectionRef = collection(db, nameOfCollection);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.courseName.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    //console.log('done')
  } catch (error) {
    //console.log(error)
  }
};

export const getDocFromFirebase = async (nameOfCollection) => {
  const collectionRef = collection(db, nameOfCollection);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserRegistrationDocument = async (
  userObj,
  collection,
  additionalInformation,
  key
) => {
  if (!userObj) return;

  const userDocRef = doc(db, collection, userObj[key]);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        ...userObj,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("An Error occured", error.message);
    }
  }

  return userSnapShot;
};

//AUTHENTICATION START

export const auth = getAuth();

export const CreatAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//STORAGE START

export const storage = getStorage();

export const about = (name, file) => {
  const imageRef = ref(storage, name);

  return uploadBytes(imageRef, file)
    .then((snapshot) => {
      console.log(snapshot, "Uploaded a blob or file!");
    })
    .catch((error) => console.log(error));
};
