import React, { useEffect } from "react";
import { useSelector,useDispatch,} from 'react-redux';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Post from "./components/Post";
import Sidebar from './components/Sidebar';
import Widget from "./components/Widget";
import { login, logout, selectUser } from './features/userSlice';
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          displayName: userAuth.displayName,
          uid: userAuth.uid,
          photoUrl:userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
            <Sidebar />
            <Post />
            <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
