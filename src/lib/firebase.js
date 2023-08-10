import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const {
 REACT_APP_FIREBASE_apiKey,
 REACT_APP_FIREBASE_authDomain,
 REACT_APP_FIREBASE_projectId,
 REACT_APP_FIREBASE_storageBucket,
 REACT_APP_FIREBASE_messagingSenderId,
 REACT_APP_FIREBASE_appId
} = process.env;

const firebaseConfig = {
 apiKey: REACT_APP_FIREBASE_apiKey,
 authDomain: REACT_APP_FIREBASE_authDomain,
 projectId: REACT_APP_FIREBASE_projectId,
 storageBucket: REACT_APP_FIREBASE_storageBucket,
 messagingSenderId: REACT_APP_FIREBASE_messagingSenderId,
 appId: REACT_APP_FIREBASE_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// localhost:2000/img/
//api.purwadhika-jcwd.com/img/

// img={process.env.react_app_img_url + data.img}
// bayu.jpg
