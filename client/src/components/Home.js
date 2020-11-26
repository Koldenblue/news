import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from '../redux/userSlice';
import TopBar from './TopBar/TopBar';
import HomeJumbotron from './HomeJumbotron';
import TopHeadlines from './TopHeadlines';

export default function Home() {
  const [loginStatus, setLoginStatus] = useState();
  const dispatch = useDispatch();
  let currentUser = useSelector(selectCurrentUser);

  // upon login status change, conditionally render home page
  useEffect(() => {
    if (currentUser) {
      // console.log(userInfo);
      setLoginStatus(
      <div className='home'>
        <p>
          You are logged in as user "{currentUser.username}".
        </p>
      </div>)
    } else {
      setLoginStatus(
      <div className='home'>
        <p>
          You are not logged in.
        </p>
        <a href='/login'>Go to login page</a>
      </div>)
    }
  }, [currentUser])


  return(
    <>
      <TopBar />
      <HomeJumbotron />
      <TopHeadlines />
    </>
  )
}