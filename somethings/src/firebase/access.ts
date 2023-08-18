// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, setDoc, doc, getDocs, collection } from "firebase/firestore";
import { ThingProps } from '../components/thing/thing';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA31ZKynstFx9wZ9MQv4xOg7dNwkOfWJ5U",
  authDomain: "somethings-22661.firebaseapp.com",
  projectId: "somethings-22661",
  storageBucket: "somethings-22661.appspot.com",
  messagingSenderId: "99770476921",
  appId: "1:99770476921:web:45b5ca15f12284695727a8",
  measurementId: "G-FN3PNWLB6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)


export const addThing = async (thing:ThingProps) => {
  await setDoc(doc(db, 'things', thing.title),{
    thing
  })
}

export const getThings = async () : Promise<ThingProps[]> => {
  const things = [] as ThingProps[];
  
  const thingsSnapshot = await getDocs(collection(db, 'things'))
  thingsSnapshot.forEach((doc) => {
    
    
    const data = doc.data();
    console.log(data)
    things.push({...data.thing} as ThingProps)
  });

  console.table(things)

  return Promise.resolve(things);
}
