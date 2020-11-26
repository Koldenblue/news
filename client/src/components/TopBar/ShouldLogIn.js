import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setCurrentUser, selectCurrentUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

// the login / logout button changes depending on logged in status
export default function ShouldLogIn() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [loginBtn, setLoginBtn] = useState();
  const history = useHistory();

  const logout = () => {
    Axios.get('/api/logout').then(() => {
      dispatch(setCurrentUser(null));
      window.location.reload();
    })
  }

  // change when userInfo changes
  useEffect(() => {
    if (currentUser) {
      setLoginBtn(
        <button 
          className='btn-secondary btn dropdown-basic should-log-in'
          onClick={logout}
        >
          Log out
        </button>
      );
    } else {
      setLoginBtn(
      <button 
        className='btn-secondary btn dropdown-basic should-log-in' 
        onClick={() => history.push('/login')}
      >
        Log in
      </button>);
    }
  }, [currentUser])


  return (<>
    {loginBtn}
  </>)
}