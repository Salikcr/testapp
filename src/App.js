import logo from './logo.svg';
import './App.css';
// import firebase from './firebaseConfig';
import bcrypt from 'bcryptjs';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {useEffect} from 'react';
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, onValue,set} from "firebase/database";
import jwt from 'jsonwebtoken'
import { isAdmin } from '@firebase/util';

function App() {
  const secretKey = "test123";
  // const database = getDatabase();

  useEffect( () => {
    
    const firebaseConfig = {
      // apiKey: "AIzaSyAvEdNPh47KTN2k2AfriLKzqXbynBAmz2Y",
      apiKey : process.env.API_KEY,
      authDomain: "hashing-5aeee.firebaseapp.com",
      databaseURL: "https://hashing-5aeee-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "hashing-5aeee",
      storageBucket: "hashing-5aeee.appspot.com",
      messagingSenderId: "820338775930",
      appId: "1:820338775930:web:7777f3153898e9429528c3",
      measurementId: "G-HW8LRYG8Q0"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics =  getAnalytics(app);
    console.log(analytics);
  
  }, [])
  const source = `{
    "rules": {
      "token": {
        
          ".read": true,
          ".write": true"
        
      }
    }
  }`;

  async function writeUserData(){

    
    const userobj = { user_id: 1234};
    // const userobj2 = { user_id: 12345};
    const hashedKey = await bcrypt.hashSync(secretKey,12);
    console.log(hashedKey);
    const token = jwt.sign(userobj
      ,
      "test123",
      {
        expiresIn: "2h",
      }
    );

    const db = getDatabase();
    const Ref = ref(db, '/token3');
onValue(Ref, (snapshot) => {
  const data = snapshot.val();
  console.log(data);

  const decoded = jwt.verify(data.tk,"test123");
  console.log(decoded);
  if(decoded.user_id == userobj.user_id)
    
    {
      // const result = await  db.setRules(source);
      // console.log(result);
      console.log("successs");
    }
    else
    {
      // source.token.write = false; 
      // const result =   await db.setRules(source);
      console.log("fail");
      // console.log(result);
    }
    // console.log("false")
// console.log(decoded.user_id,token.user_id);


  // updateStarCount(postElement, data);
});

set(ref(db, '/token3'), {
  tk : token
});
    
  }

  return (
    

    <div className="App">
      <p>test</p>
      <button onClick = {writeUserData}>click</button>
    </div>
  );
}

export default App;
