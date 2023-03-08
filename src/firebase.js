import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcZKNvnyHIPGe5z_JFA_L5gflDANIpY80",
  authDomain: "job-link-akhmim.firebaseapp.com",
  projectId: "job-link-akhmim",
  storageBucket: "job-link-akhmim.appspot.com",
  messagingSenderId: "1000216307311",
  appId: "1:1000216307311:web:cc3f686d5458924b1e4f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

// export const storage = getStorage(app);
// export const provider = new GoogleAuthProvider();
