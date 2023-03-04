import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB36ZnTAhhZI6TxqgaTgZIDbmFXxCUzHo8",
  authDomain: "netflix-clone-f6a3c.firebaseapp.com",
  projectId: "netflix-clone-f6a3c",
  storageBucket: "netflix-clone-f6a3c.appspot.com",
  messagingSenderId: "467499100483",
  appId: "1:467499100483:web:60724c062be83df8d067f6"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }