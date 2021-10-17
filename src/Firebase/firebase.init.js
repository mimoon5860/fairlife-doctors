import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const Authinit = () => {
    return initializeApp(firebaseConfig);
}

export default Authinit;